'use client'

import React from 'react'

import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvFinalCtaProps = {
  onSignUp: () => void
}

export default function MvFinalCta({ onSignUp }: MvFinalCtaProps) {
  const t = useLandingStrings()

  return (
    <section className="w-full bg-white py-12 sm:py-16" aria-labelledby="mv-cta-title">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <h2 id="mv-cta-title" className="text-[1.5rem] font-bold text-meta-text sm:text-[2rem]">
            {t.finalCta.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-meta-text-body sm:text-[17px]">
            {t.finalCta.subtitle}
          </p>
          <div className="mt-8 w-full max-w-[360px]">
            <MvSignUpButton onSignUp={onSignUp} />
          </div>
        </div>
      </div>
    </section>
  )
}
