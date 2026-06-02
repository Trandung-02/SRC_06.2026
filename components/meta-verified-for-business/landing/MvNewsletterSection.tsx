'use client'

import Link from 'next/link'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

export default function MvNewsletterSection() {
  const t = useLandingStrings()
  const [email, setEmail] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      className="mv-section-dark w-full py-12 sm:py-16"
      aria-labelledby="mv-newsletter-title"
    >
      <div className="mx-auto max-w-[560px] px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <h2 id="mv-newsletter-title" className="text-center text-[1.35rem] font-bold sm:text-[1.5rem]">
          {t.newsletter.title}
        </h2>
        <p className="mt-3 text-center text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
          {t.newsletter.description}
        </p>

        {submitted ? (
          <p className="mt-8 text-center text-[15px] text-white/90" role="status">
            ✓
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-3">
            <div>
              <label htmlFor="mv-newsletter-email" className="sr-only">
                {t.newsletter.emailLabel}
              </label>
              <input
                id="mv-newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.newsletter.emailPlaceholder}
                className="w-full rounded-lg border-0 bg-white px-4 py-3 text-[15px] text-meta-text outline-none focus-visible:ring-2 focus-visible:ring-meta-blue"
              />
            </div>
            <div>
              <label htmlFor="mv-newsletter-country" className="sr-only">
                {t.newsletter.countryLabel}
              </label>
              <input
                id="mv-newsletter-country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder={t.newsletter.countryPlaceholder}
                className="w-full rounded-lg border-0 bg-white px-4 py-3 text-[15px] text-meta-text outline-none focus-visible:ring-2 focus-visible:ring-meta-blue"
              />
            </div>
            <p className="text-[12px] leading-relaxed text-white/70">
              {t.newsletter.privacyPrefix}{' '}
              <Link
                href={t.newsletter.privacyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                {t.newsletter.privacyLink}
              </Link>
            </p>
            <button
              type="submit"
              className="w-full rounded-full bg-white py-3 text-[15px] font-semibold text-meta-dark transition hover:bg-white/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t.newsletter.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
