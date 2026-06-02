'use client'

import Image from 'next/image'
import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

export default function MvSiteHeader() {
  const t = useAppStrings()

  return (
    <header className="mv-site-header sticky top-0 z-40 w-full shrink-0">
      <div className="mx-auto flex max-w-mv-content items-center justify-between gap-4 px-[max(16px,env(safe-area-inset-left))] py-3 pr-[max(16px,env(safe-area-inset-right))] sm:py-4 lg:px-6">
        <a
          href="https://www.facebook.com/business"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-meta-blue"
          aria-label="Meta for Business"
        >
          <Image
            src="/images/meta/logo.svg"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0"
            aria-hidden
          />
          <span className="truncate text-[15px] font-bold tracking-tight text-meta-text sm:text-[16px]">
            Meta Verified
          </span>
        </a>
        <span className="mv-status-pill hidden rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide sm:inline-block">
          {t.main.badge}
        </span>
      </div>
    </header>
  )
}
