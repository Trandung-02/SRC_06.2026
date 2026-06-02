'use client'

import Link from 'next/link'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvBenefitsSection() {
  const t = useLandingStrings()

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="mv-benefits-title">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2
            id="mv-benefits-title"
            className="text-[1.5rem] font-bold leading-tight text-meta-text sm:text-[2rem] lg:text-[2.25rem]"
          >
            {t.benefits.title}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-meta-text-body sm:text-[17px]">
            {t.benefits.subtitle}
          </p>
          <Link
            href={t.benefits.learnMoreHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mv-link mt-4 inline-flex items-center gap-1 text-[15px] font-semibold"
          >
            {t.benefits.learnMore}
            <span aria-hidden="true">›</span>
          </Link>
        </div>

        <ul className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {t.benefits.items.map((item) => (
            <li key={item.title}>
              <article className="mv-benefit-card flex h-full flex-col p-6 sm:p-7">
                <h3 className="text-[16px] font-bold text-meta-text sm:text-[17px]">{item.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-meta-text-body">{item.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
