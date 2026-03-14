"use client"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import Stepper, { Step } from "@/components/animations/Stepper"
import { cn } from "@/lib/utils"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const step1Schema = z.object({
  from_name: z.string().trim().min(2, "Name is required"),
  from_email: z.string().trim().email("Invalid email address"),
})
const step2Schema = z.object({
  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),
})
const step3Schema = z.object({
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
})

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema)
type FormData = z.infer<typeof fullSchema>
const stepSchemas = [step1Schema, step2Schema, step3Schema]

export default function ContactForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(fullSchema),
    mode: "onTouched",
  })

  const handleStepChange = async (next: number) => {
    if (next < currentStep) {
      setCurrentStep(next)
      return
    }
    const currentSchema = stepSchemas[currentStep - 1]
    const fieldsToValidate = Object.keys(currentSchema.shape) as (keyof FormData)[]
    const isValid = await trigger(fieldsToValidate)
    if (isValid) {
      setCurrentStep(next)
    } else {
      toast.error("Please fill in the required fields to continue.")
    }
  }

  const onSubmit = async () => {
    const isLastStepValid = await trigger(["message"])
    if (!isLastStepValid) return
    setSending(true)
    const toastId = toast.loading("Sending message...")
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        getValues(),
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setSuccess(true)
      toast.success("Message sent! I'll be in touch.", { id: toastId })
    } catch {
      toast.error("Failed to send. Please use the email link instead.", { id: toastId })
    } finally {
      setSending(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-3 py-12"
      >
        <CheckCircle2 size={28} className="text-foreground" />
        <h3 className="text-xl font-bold text-foreground">Message sent!</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Thanks for reaching out. I'll get back to you shortly.
        </p>
      </motion.div>
    )
  }

  return (
    <div>
      <p className="text-xs text-muted-foreground font-medium mb-8 uppercase tracking-widest">
        Step {currentStep} of 3
      </p>

      <Stepper
        currentStep={currentStep}
        onStepChange={handleStepChange}
        onFinalStepCompleted={onSubmit}
        disableStepIndicators={true}
        nextButtonText="Continue →"
      >
        <Step>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Who are you?</h3>
              <p className="text-sm text-muted-foreground mt-1">Let me know your name and email.</p>
            </div>
            <div className="space-y-4">
              <FieldWrapper label="Full Name" error={errors.from_name?.message}>
                <input
                  {...register("from_name")}
                  placeholder="John Doe"
                  className={cn(inputStyles, errors.from_name && errorBorder)}
                />
              </FieldWrapper>
              <FieldWrapper label="Email Address" error={errors.from_email?.message}>
                <input
                  {...register("from_email")}
                  placeholder="john@example.com"
                  className={cn(inputStyles, errors.from_email && errorBorder)}
                />
              </FieldWrapper>
            </div>
          </div>
        </Step>

        <Step>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">What's the topic?</h3>
              <p className="text-sm text-muted-foreground mt-1">This helps me understand your request.</p>
            </div>
            <FieldWrapper label="Subject" error={errors.subject?.message}>
              <input
                {...register("subject")}
                placeholder="Project Inquiry, Job Offer, etc."
                className={cn(inputStyles, errors.subject && errorBorder)}
              />
            </FieldWrapper>
          </div>
        </Step>

        <Step>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Your message</h3>
              <p className="text-sm text-muted-foreground mt-1">Briefly explain what you need help with.</p>
            </div>
            <FieldWrapper label="Message" error={errors.message?.message}>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Hi Rifky, I'm looking for..."
                className={cn(inputStyles, "resize-none", errors.message && errorBorder)}
              />
            </FieldWrapper>
            {sending && (
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Loader2 size={14} className="animate-spin" />
                Sending...
              </div>
            )}
          </div>
        </Step>
      </Stepper>
    </div>
  )
}

function FieldWrapper({ label, error, children }: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="flex items-center gap-1.5 text-xs text-red-500"
          >
            <AlertCircle size={11} /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputStyles = "w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 bg-transparent border border-border text-foreground placeholder:text-muted-foreground/40 focus:border-foreground/40 focus:ring-0"

const errorBorder = "border-red-400"