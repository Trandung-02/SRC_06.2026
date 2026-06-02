'use client'

import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

const STEP_KEYS = ['step1', 'step2', 'step3'] as const

export default function MvStepsSection() {
  const t = useLandingStrings()

  return (
    <section
      className="mv-section-dark w-full py-12 sm:py-16 lg:py-20"
      aria-labelledby="mv-steps-title"
    >
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 id="mv-steps-title" className="text-center text-[1.5rem] font-bold sm:text-left sm:text-[2rem]">
              {t.steps.title}
            </h2>
            <ol className="mt-10 flex list-none flex-col gap-8 p-0">
              {STEP_KEYS.map((key, index) => (
                <li key={key} className="flex items-start gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[15px] font-bold text-meta-blue"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <p className="pt-2 text-[17px] font-medium leading-snug text-white/90">{t.steps[key]}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-[24px] bg-white/10">
              <img
                src="/images/meta/header.png"
                alt=""
                className="h-full w-full object-cover object-top opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
