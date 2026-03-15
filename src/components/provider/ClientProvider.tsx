"use client"

import MagicCursor from "@/components/animations/MagicCursor"
import PageLoader from "@/components/animations/PageLoader"
import { Toaster } from "sonner"

export default function ClientProviders() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <MagicCursor />
      <PageLoader />
    </>
  )
}