'use client'

import React from 'react'

import MvPromoVideo from '@/components/meta-verified-for-business/landing/MvPromoVideo'
import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvHeroSectionProps = {
  onSignUp: () => void
}

export default function MvHeroSection({ onSignUp }: MvHeroSectionProps) {
  const t = useLandingStrings()

  return (
    <section className="mv-hero mv-section mv-section-lg" aria-labelledby="mv-hero-title">
      <div className="mv-section-container">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/images/icons/ic_blue.svg"
              alt={t.hero.badgeAlt}
              width={56}
              height={56}
              className="mv-hero-badge"
            />

            <h1 id="mv-hero-title" className="mv-hero-title">
              {t.hero.title}
            </h1>

            <p className="mv-hero-lead mt-5 max-w-[36rem]">{t.hero.lead}</p>

            <div className="mt-8 w-full max-w-[22.5rem]">
              <MvSignUpButton onSignUp={onSignUp} />
            </div>

            <p className="mv-hero-note mt-5 max-w-[35rem]">{t.hero.eligibility}</p>

            <p className="mv-hero-secondary mt-4">
              {t.hero.creatorPrefix}{' '}
              <span className="font-semibold text-meta-blue">{t.hero.creatorLink}</span>
            </p>
          </div>

          <div className="w-full min-w-0 lg:justify-self-stretch">
            <MvPromoVideo ariaLabel={t.hero.videoAria} className="mx-auto w-full lg:mx-0 lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
