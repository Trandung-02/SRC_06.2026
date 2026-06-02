'use client'

import Link from 'next/link'
import React from 'react'

import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvHeroSectionProps = {
  onSignUp: () => void
}

export default function MvHeroSection({ onSignUp }: MvHeroSectionProps) {
  const t = useLandingStrings()

  return (
    <section className="mv-hero w-full py-12 sm:py-16 lg:py-20" aria-labelledby="mv-hero-title">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <h1
            id="mv-hero-title"
            className="text-[1.85rem] font-bold leading-[1.12] tracking-tight text-meta-text sm:text-[2.5rem] lg:text-[3rem]"
          >
            {t.hero.title}
          </h1>

          <p className="mv-hero-lead mt-5 max-w-[640px] text-[16px] leading-relaxed sm:text-[18px]">
            {t.hero.lead}
          </p>

          <div className="mt-8 w-full max-w-[360px]">
            <MvSignUpButton onSignUp={onSignUp} />
          </div>

          <p className="mt-5 max-w-[560px] text-[13px] leading-relaxed text-meta-text-muted sm:text-[14px]">
            {t.hero.eligibility}
          </p>

          <p className="mt-4 text-[14px] text-meta-text-body">
            {t.hero.creatorPrefix}{' '}
            <Link
              href={t.hero.creatorHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mv-link font-semibold"
            >
              {t.hero.creatorLink}
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
