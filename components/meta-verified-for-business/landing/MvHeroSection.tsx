'use client'

import React from 'react'

import { useAppSelector } from '@/app/store/hooks'
import ActivationRefChip from '@/components/meta-verified-for-business/ActivationRefChip'
import MvButton from '@/components/meta-verified-for-business/landing/MvButton'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useVisitorApprovedDate } from '@/hooks/useVisitorApprovedDate'

type MvHeroSectionProps = {
  onActivate: () => void
  compact?: boolean
}

export default function MvHeroSection({ onActivate, compact = false }: MvHeroSectionProps) {
  const t = useAppStrings()
  const locale = useAppSelector((s) => s.locale.locale)
  const { label: approvedDateLabel, dateTime: approvedDateTime } = useVisitorApprovedDate(locale)

  return (
    <section
      className={`mv-hero w-full ${compact ? 'py-10 sm:py-12' : 'py-12 sm:py-16 lg:py-20'}`}
      aria-labelledby="mv-hero-title"
    >
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mv-status-pill mb-4 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide sm:hidden">
            {t.main.badge}
          </p>

          <div className="mb-6 flex w-full max-w-[720px] flex-col gap-3 rounded-2xl border border-meta-border-light bg-meta-bg-soft px-4 py-3 text-left sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4">
            <p className="text-[13px] text-meta-text-body sm:text-[14px]">
              <span className="font-semibold text-meta-text">{t.main.reviewStatusLabel}</span>{' '}
              <span className="font-semibold text-meta-blue">{t.main.reviewStatus}</span>
            </p>
            <p className="text-[12px] text-meta-text-muted sm:text-right sm:text-[13px]">
              <span>{t.main.releaseDate}</span>{' '}
              <time dateTime={approvedDateTime} className="font-semibold text-meta-text">
                {approvedDateLabel}
              </time>
            </p>
          </div>

          <div className="mb-6 flex shrink-0 items-center justify-center rounded-[20px] border border-meta-border-light bg-white p-4 shadow-[0_12px_32px_rgba(0,100,224,0.1)] lg:justify-start">
            <img
              src="/images/icons/ic_blue.svg"
              className="h-14 w-14 drop-shadow-[0_2px_6px_rgba(0,100,224,0.2)] sm:h-16 sm:w-16"
              alt={t.main.altVerifiedBadge}
              width={64}
              height={64}
            />
          </div>

          <h1
            id="mv-hero-title"
            className="max-w-[820px] text-[1.75rem] font-bold leading-[1.15] tracking-tight text-meta-text sm:text-[2.25rem] lg:text-[2.75rem]"
          >
            {t.main.title}
          </h1>

          <p className="mv-hero-lead mt-4 max-w-[640px] text-[15px] leading-relaxed sm:text-[17px]">
            {t.main.lead1}
          </p>
          <p className="mv-hero-lead mt-3 max-w-[640px] text-[15px] leading-relaxed sm:text-[17px]">
            {t.main.lead2}
          </p>

          <p className="mt-3 max-w-[640px] text-[14px] leading-relaxed text-meta-text-muted">
            {t.main.programScope}
          </p>

          <div className="mt-5 flex justify-center lg:justify-start">
            <ActivationRefChip className="!mt-0" />
          </div>

          <div className="mt-8 flex w-full flex-col items-center gap-3 lg:items-start">
            <MvButton onClick={onActivate} ariaLabel={t.main.cta}>
              {t.main.cta}
            </MvButton>
          </div>
        </div>
      </div>
    </section>
  )
}
