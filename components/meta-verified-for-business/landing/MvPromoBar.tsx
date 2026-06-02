'use client'

import Link from 'next/link'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvPromoBar() {
  const t = useLandingStrings()

  return (
    <div
      className="mv-promo-bar w-full px-[max(16px,env(safe-area-inset-left))] py-2.5 pr-[max(16px,env(safe-area-inset-right))] text-center text-[13px] leading-snug sm:text-[14px]"
      role="region"
      aria-label="Promotion"
    >
      <p className="mx-auto max-w-mv-content font-medium">
        {t.promo.text}{' '}
        <Link
          href={t.promo.learnMoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 font-semibold underline underline-offset-2 hover:opacity-90"
        >
          {t.promo.learnMore}
        </Link>
      </p>
    </div>
  )
}
