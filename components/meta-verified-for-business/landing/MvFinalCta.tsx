'use client'

import Link from 'next/link'
import React from 'react'

import MvButton from '@/components/meta-verified-for-business/landing/MvButton'
import { META_VERIFIED_FOOTER_LINKS } from '@/data/metaVerifiedLinks'
import { useAppStrings } from '@/hooks/useAppStrings'

type MvFinalCtaProps = {
  onActivate: () => void
}

export default function MvFinalCta({ onActivate }: MvFinalCtaProps) {
  const t = useAppStrings()

  return (
    <section className="mv-section-soft w-full py-12 sm:py-16" aria-labelledby="mv-cta-title">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <h2 id="mv-cta-title" className="text-[1.5rem] font-bold text-meta-text sm:text-[2rem]">
            {t.main.cta}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-meta-text-body">{t.main.noteBody}</p>
          <div className="mt-8 w-full">
            <MvButton onClick={onActivate} ariaLabel={t.main.cta}>
              {t.main.cta}
            </MvButton>
          </div>
          <p className="mv-help-prompt mt-4 max-w-[480px]">
            {t.main.helpPrompt}{' '}
            <Link
              href={META_VERIFIED_FOOTER_LINKS.business}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-link"
            >
              {t.main.linkBusiness}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
