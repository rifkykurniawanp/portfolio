"use client"

import React, {
  Children,
  useState,
  HTMLAttributes,
  ReactNode
} from "react"

import { motion, AnimatePresence, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  currentStep: number
  onStepChange: (step: number) => void
  onFinalStepCompleted: () => void

  stepCircleContainerClassName?: string
  stepContainerClassName?: string
  contentClassName?: string
  footerClassName?: string

  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>

  backButtonText?: string
  nextButtonText?: string

  disableStepIndicators?: boolean
}

export default function Stepper({
  children,
  currentStep,
  onStepChange,
  onFinalStepCompleted,

  stepCircleContainerClassName = "",
  stepContainerClassName = "",
  contentClassName = "",
  footerClassName = "",

  backButtonProps = {},
  nextButtonProps = {},

  backButtonText = "Back",
  nextButtonText = "Continue",

  disableStepIndicators = false,
  ...rest
}: StepperProps) {

  const [direction, setDirection] = useState(0)

  const stepsArray = Children.toArray(children)
  const totalSteps = stepsArray.length

  const isCompleted = currentStep > totalSteps
  const isLastStep = currentStep === totalSteps

  function handleBack() {
    if (currentStep > 1) {
      setDirection(-1)
      onStepChange(currentStep - 1)
    }
  }

  function handleNext() {
    if (!isLastStep) {
      setDirection(1)
      onStepChange(currentStep + 1)
    }
  }

  function handleComplete() {
    setDirection(1)
    onFinalStepCompleted()
  }

  return (
    <div
      className="w-full flex flex-col"
      {...rest}
    >

      {/* Step indicators */}
      <div className={cn("w-full", stepCircleContainerClassName)}>

        <div
          className={cn(
            "flex flex-wrap items-center justify-center gap-2 md:gap-4",
            "px-4 md:px-8 pt-8 pb-6",
            stepContainerClassName
          )}
        >

          {stepsArray.map((_, index) => {

            const stepNumber = index + 1
            const isNotLastStep = index < totalSteps - 1

            return (
              <React.Fragment key={stepNumber}>

                <StepIndicator
                  step={stepNumber}
                  currentStep={currentStep}
                  disableStepIndicators={disableStepIndicators}
                  onClickStep={(clicked) => {
                    setDirection(clicked > currentStep ? 1 : -1)
                    onStepChange(clicked)
                  }}
                />

                {isNotLastStep && (
                  <StepConnector
                    isComplete={currentStep > stepNumber}
                  />
                )}

              </React.Fragment>
            )

          })}

        </div>

      </div>

      {/* Content */}
      <div
        className={cn(
          "relative overflow-hidden",
          "px-4 md:px-8",
          contentClassName
        )}
      >

        <AnimatePresence mode="wait" custom={direction}>

          {!isCompleted && (

            <motion.div
              key={currentStep}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >

              {stepsArray[currentStep - 1]}

            </motion.div>

          )}

        </AnimatePresence>

      </div>

      {/* Footer */}
      {!isCompleted && (

        <div
          className={cn(
            "px-4 md:px-8 pt-8 pb-8",
            footerClassName
          )}
        >

          <div
            className={cn(
              "flex items-center",
              currentStep !== 1
                ? "justify-between"
                : "justify-end"
            )}
          >

            {currentStep !== 1 && (

              <button
                type="button"
                onClick={handleBack}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                {...backButtonProps}
              >

                {backButtonText}

              </button>

            )}

            <button
              type="button"
              onClick={isLastStep ? handleComplete : handleNext}
              className="bg-[#5227FF] hover:bg-[#4318d4] text-white py-2 px-6 rounded-full text-sm font-medium transition"
              {...nextButtonProps}
            >

              {isLastStep ? "Send Message" : nextButtonText}

            </button>

          </div>

        </div>

      )}

    </div>
  )
}

const stepVariants: Variants = {

  enter: (dir: number) => ({
    x: dir >= 0 ? "15%" : "-15%",
    opacity: 0
  }),

  center: {
    x: "0%",
    opacity: 1
  },

  exit: (dir: number) => ({
    x: dir >= 0 ? "-15%" : "15%",
    opacity: 0
  })

}

interface StepIndicatorProps {
  step: number
  currentStep: number
  onClickStep: (clicked: number) => void
  disableStepIndicators?: boolean
}

function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators
}: StepIndicatorProps) {

  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete"

  return (

    <div
      onClick={() =>
        !disableStepIndicators && onClickStep(step)
      }
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition",
        status === "active" && "bg-[#5227FF] text-white",
        status === "complete" && "bg-[#5227FF] text-white",
        status === "inactive" && "bg-muted text-muted-foreground",
        !disableStepIndicators && "cursor-pointer"
      )}
    >

      {status === "complete" ? "✓" : step}

    </div>

  )

}

function StepConnector({ isComplete }: { isComplete: boolean }) {

  return (

    <div className="hidden md:block h-[2px] w-12 bg-border rounded overflow-hidden">

      <motion.div
        initial={false}
        animate={{ width: isComplete ? "100%" : "0%" }}
        className="h-full bg-[#5227FF]"
      />

    </div>

  )

}

export function Step({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}