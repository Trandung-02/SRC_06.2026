'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

export default function MvPromoBar() {
  const t = useAppStrings()

  return (
    <div
      className="mv-promo-bar w-full px-[max(16px,env(safe-area-inset-left))] py-2.5 pr-[max(16px,env(safe-area-inset-right))] text-center text-[13px] leading-snug sm:text-[14px]"
      role="status"
    >
      <p className="mx-auto max-w-mv-content font-medium">
        <span className="font-bold">{t.main.badge}</span>
        <span className="mx-2 opacity-60" aria-hidden="true">
          ·
        </span>
        <span>{t.main.reviewStatus}</span>
        <span className="mx-2 hidden opacity-60 sm:inline" aria-hidden="true">
          ·
        </span>
        <span className="hidden sm:inline">{t.main.noteTitle}: {t.main.estimatedDuration}</span>
      </p>
    </div>
  )
}
