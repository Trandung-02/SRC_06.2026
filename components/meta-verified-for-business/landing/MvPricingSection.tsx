'use client'

import React from 'react'

import MvSignUpButton from '@/components/meta-verified-for-business/landing/MvSignUpButton'
import { useLandingStrings } from '@/hooks/useLandingStrings'

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="shrink-0 text-meta-text-muted"
      aria-hidden
    >
      <path d="M12 1a5 5 0 00-5 5v3H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V11a2 2 0 00-2-2h-1V6a5 5 0 00-5-5zm-3 8V6a3 3 0 116 0v3H9z" />
    </svg>
  )
}

type MvPricingSectionProps = {
  onSignUp: () => void
}

export default function MvPricingSection({ onSignUp }: MvPricingSectionProps) {
  const t = useLandingStrings()

  return (
    <section
      className="w-full border-y border-meta-border-light bg-meta-bg-soft py-12 sm:py-16 lg:py-20"
      aria-labelledby="mv-pricing-title"
    >
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 id="mv-pricing-title" className="text-[1.5rem] font-bold text-meta-text sm:text-[2rem]">
            {t.pricing.title}
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-meta-text-body sm:text-[16px]">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="mv-pricing-scroll mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] sm:gap-5 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {t.pricing.plans.map((plan) => (
            <article
              key={plan.id}
              className="mv-benefit-card flex w-[min(100%,280px)] shrink-0 snap-start flex-col p-5 sm:w-[300px] lg:w-auto"
            >
              <h3 className="text-[17px] font-bold text-meta-text">{plan.name}</h3>
              <p className="mt-2 text-[22px] font-bold text-meta-text">
                {plan.price}
                <span className="text-[14px] font-normal text-meta-text-muted">{t.pricing.perMonth}</span>
              </p>

              <div className="mt-4 flex-1 space-y-4">
                {plan.categories.map((cat) => (
                  <div key={cat.title}>
                    <p className="mb-2 text-[12px] font-bold uppercase tracking-wide text-meta-text-secondary">
                      {cat.title}
                    </p>
                    <ul className="space-y-2">
                      {cat.features.map((f) => (
                        <li
                          key={f.text}
                          className={`flex items-start gap-2 text-[13px] leading-snug ${
                            f.locked ? 'text-meta-text-muted' : 'text-meta-text-body'
                          }`}
                        >
                          {f.locked ? <LockIcon /> : (
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-meta-blue" aria-hidden />
                          )}
                          <span>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <MvSignUpButton onSignUp={onSignUp} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
