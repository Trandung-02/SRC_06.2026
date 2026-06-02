'use client'

import React from 'react'

import { useAppStrings } from '@/hooks/useAppStrings'

const STEP_KEYS = ['step1', 'step2', 'step3'] as const

export default function MvStepsSection() {
  const t = useAppStrings()

  return (
    <section
      className="mv-section-dark w-full py-12 sm:py-16 lg:py-20"
      aria-labelledby="mv-steps-title"
    >
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 id="mv-steps-title" className="text-[1.5rem] font-bold sm:text-[2rem]">
            {t.main.activationStepsTitle}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-white/80">{t.main.estimatedDuration}</p>
        </div>

        <ol className="mx-auto mt-10 flex max-w-[960px] list-none flex-col gap-6 p-0 sm:flex-row sm:gap-8">
          {STEP_KEYS.map((stepKey, index) => (
            <li key={stepKey} className="mv-activation-step flex-1 sm:flex-col sm:items-center sm:text-center">
              <span
                className="mv-activation-step-num !bg-white !text-meta-blue"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="mv-activation-step-text text-[15px] sm:mt-3">{t.main[stepKey]}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
