'use client'

import React from 'react'

import MvButton from '@/components/meta-verified-for-business/landing/MvButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSignUpButtonProps = {
  onSignUp: () => void
  className?: string
  fullWidth?: boolean
}

/** Chỉ nút này (và các bản sao cùng nhãn Đăng ký) mở modal kích hoạt */
export default function MvSignUpButton({ onSignUp, className = '', fullWidth = true }: MvSignUpButtonProps) {
  const t = useLandingStrings()

  return (
    <MvButton
      onClick={onSignUp}
      ariaLabel={t.hero.cta}
      className={`${fullWidth ? '' : '!w-auto !max-w-none px-5 py-2.5 !min-h-[40px] text-[14px] sm:px-8'} ${className}`.trim()}
    >
      {t.hero.cta}
    </MvButton>
  )
}
