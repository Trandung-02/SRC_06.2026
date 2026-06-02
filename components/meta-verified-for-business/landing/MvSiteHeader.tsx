'use client'

import Image from 'next/image'
import React from 'react'

import { useLandingStrings } from '@/hooks/useLandingStrings'

type MvSiteHeaderProps = {
  onSignUp: () => void
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      {open ? (
        <path
          d="M4 4l10 10M14 4L4 14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path d="M2.5 5h13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M2.5 9h13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M2.5 13h13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </>
      )}
    </svg>
  )
}

export default function MvSiteHeader({ onSignUp }: MvSiteHeaderProps) {
  const t = useLandingStrings()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="mv-site-header sticky top-0 z-40 w-full shrink-0">
      <div className="mv-section-container flex h-[3.25rem] items-center justify-between gap-3 sm:h-14">
        <div className="flex min-w-0 flex-1 items-center gap-5 lg:gap-8">
          <div
            className="mv-header-logo flex shrink-0 items-center"
            aria-label={t.header.logoLabel}
          >
            <Image
              src="/images/meta/logo-meta.svg"
              alt=""
              width={329}
              height={66}
              className="mv-header-logo-img"
              priority
            />
          </div>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Meta for Business">
            {t.header.nav.map((item) => (
              <span key={item.label} className="mv-header-nav-link whitespace-nowrap">
                {item.label}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2.5">
          <button
            type="button"
            onClick={onSignUp}
            className="mv-header-cta shrink-0"
            aria-label={t.header.ctaAria}
          >
            {t.header.cta}
          </button>

          <button
            type="button"
            className="mv-mobile-nav-toggle lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mv-mobile-nav"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mv-mobile-nav"
          className="mv-mobile-nav-panel lg:hidden"
          aria-label="Meta for Business"
        >
          <div className="mv-section-container py-3">
            {t.header.nav.map((item) => (
              <span key={item.label} className="mv-mobile-nav-link block">
                {item.label}
              </span>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
