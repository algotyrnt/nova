'use client'
import { useState, useCallback } from 'react'

export function usePrivacyModal() {
  const [open, setOpen] = useState(false)

  const openModal = useCallback(() => setOpen(true), [])
  const closeModal = useCallback(() => setOpen(false), [])

  return { open, openModal, closeModal }
}
