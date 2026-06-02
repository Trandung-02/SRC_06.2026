'use client'

import React from 'react'

type MvButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline'
  className?: string
  ariaLabel?: string
}

export default function MvButton({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ariaLabel,
}: MvButtonProps) {
  const base =
    'inline-flex min-h-[48px] w-full max-w-[min(100%,360px)] items-center justify-center px-6 py-3 text-[15px] sm:text-[16px] transition duration-200 disabled:cursor-not-allowed disabled:opacity-60'
  const variantClass = variant === 'primary' ? 'mv-btn-meta' : 'mv-btn-meta-outline'

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variantClass} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
