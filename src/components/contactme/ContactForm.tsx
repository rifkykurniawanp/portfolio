"use client"
import { useState } from "react"
import emailjs from "emailjs-com"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import Stepper, { Step } from "@/components/animations/Stepper"
import { cn } from "@/lib/utils"
import { CheckCircle2, Loader2 } from "lucide-react"

const step1Schema = z.object({
  from_name: z.string().min(2, "Name must be at least 2 characters"),
  from_email: z.string().email("Invalid email address"),
})
const step2Schema = z.object({
  subject: z.string().min(3, "Subject must be at least 3 characters"),
})
const step3Schema = z.object({
  message: z.string().min(10, "Message must be at least 10 characters"),
})
const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema)
type FormData = z.infer<typeof fullSchema>
const stepSchemas = [step1Schema, step2Schema, step3Schema]

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500 animate-in slide-in-from-top-1 duration-200">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  )
}

const baseInput = cn(
  "w-full rounded-lg px-3.5 py-2.5 text-sm",
  "bg-background border",
  "text-foreground placeholder:text-muted-foreground/60",
  "focus:outline-none focus:ring-2 focus:ring-[#5227FF]/40 focus:border-[#5227FF]",
  "transition-all duration-200"
)

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
    defaultValues: {
      from_name: "",
      from_email: "",
      subject: "",
      message: "",
    },
  })

  const handleStepChange = async (next: number) => {
    const schema = stepSchemas[currentStep - 1]
    const fields = Object.keys(schema.shape) as (keyof FormData)[]
    const valid = await trigger(fields)
    if (!valid) {
      toast.error("Please fix the errors before continuing.")
      return
    }
    setCurrentStep(next)
  }

  const handleSubmit = async () => {
    const fields = Object.keys(step3Schema.shape) as (keyof FormData)[]
    const valid = await trigger(fields)
    if (!valid) {
      toast.error("Please fix the errors before submitting.")
      return
    }

    setSending(true)
    const toastId = toast.loading("Sending your message...")

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        getValues(),
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      toast.success("Message sent! I'll get back to you soon.", { id: toastId })
      setSuccess(true)
    } catch {
      toast.error("Failed to send. Please email directly at krifky14@gmail.com", {
        id: toastId,
        duration: 6000,
      })
    } finally {
      setSending(false)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <CheckCircle2 size={48} className="text-[#5227FF]" />
        <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. I'll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <Stepper
      initialStep={1}
      onStepChange={handleStepChange}
      onFinalStepCompleted={handleSubmit}
      nextButtonText="Continue"
      backButtonText="Back"
    >
      {/* Step 1 — Identity */}
      <Step>
        <div className="flex flex-col gap-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Who are you?</h3>
            <p className="text-sm text-muted-foreground mt-1">Let me know your name and email.</p>
          </div>
          <Field label="Full Name" error={errors.from_name?.message}>
            <input
              {...register("from_name")}
              type="text"
              placeholder="John Doe"
              className={cn(baseInput, errors.from_name ? "border-red-500 focus:ring-red-400/30" : "border-border")}
            />
          </Field>
          <Field label="Email Address" error={errors.from_email?.message}>
            <input
              {...register("from_email")}
              type="email"
              placeholder="john@example.com"
              className={cn(baseInput, errors.from_email ? "border-red-500 focus:ring-red-400/30" : "border-border")}
            />
          </Field>
        </div>
      </Step>

      {/* Step 2 — Subject */}
      <Step>
        <div className="flex flex-col gap-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">What's it about?</h3>
            <p className="text-sm text-muted-foreground mt-1">Give a brief subject for your message.</p>
          </div>
          <Field label="Subject" error={errors.subject?.message}>
            <input
              {...register("subject")}
              type="text"
              placeholder="Project collaboration, job offer, etc."
              className={cn(baseInput, errors.subject ? "border-red-500 focus:ring-red-400/30" : "border-border")}
            />
          </Field>
        </div>
      </Step>

      {/* Step 3 — Message */}
      <Step>
        <div className="flex flex-col gap-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Your message</h3>
            <p className="text-sm text-muted-foreground mt-1">Tell me more about what you have in mind.</p>
          </div>
          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Hi Rifky, I'd like to discuss..."
              className={cn(baseInput, "resize-none", errors.message ? "border-red-500 focus:ring-red-400/30" : "border-border")}
            />
          </Field>
          {sending && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Loader2 size={14} className="animate-spin" />
              Sending...
            </div>
          )}
        </div>
      </Step>
    </Stepper>
  )
}