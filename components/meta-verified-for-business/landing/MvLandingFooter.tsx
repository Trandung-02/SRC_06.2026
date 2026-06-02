'use client'

import Link from 'next/link'
import React from 'react'

import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { META_VERIFIED_FOOTER_LINKS } from '@/data/metaVerifiedLinks'
import { useAppStrings } from '@/hooks/useAppStrings'

const SOCIAL = [
  { href: 'https://www.facebook.com/', icon: '/images/icons/ic_facebook.svg', label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: '/images/icons/ic_instagram.svg', label: 'Instagram' },
  { href: 'https://twitter.com/', icon: '/images/icons/ic_x.svg', label: 'X' },
  { href: 'https://www.linkedin.com/', icon: '/images/icons/ic_in.svg', label: 'LinkedIn' },
] as const

export default function MvLandingFooter() {
  const t = useAppStrings()
  const year = new Date().getFullYear()

  const links = [
    { href: META_VERIFIED_FOOTER_LINKS.privacy, label: t.main.linkPrivacy },
    { href: META_VERIFIED_FOOTER_LINKS.terms, label: t.main.linkTerms },
    { href: META_VERIFIED_FOOTER_LINKS.community, label: t.main.linkCommunity },
    { href: META_VERIFIED_FOOTER_LINKS.help, label: t.main.linkHelp },
    { href: META_VERIFIED_FOOTER_LINKS.business, label: t.main.linkBusiness },
  ] as const

  return (
    <footer className="mv-landing-footer w-full pb-[max(24px,env(safe-area-inset-bottom))] pt-10">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-8">
          <PrivacyLanguagePicker />
          <nav aria-label="Footer links">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] sm:text-[13px]">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center gap-4" aria-label="Social media">
            {SOCIAL.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={label}
                >
                  <img src={icon} alt="" width={18} height={18} className="h-[18px] w-[18px] brightness-0 invert" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-center text-[11px] leading-relaxed sm:text-[12px]">
          <span className="text-white/90">Meta © {year}</span>
          <span className="mx-2 opacity-50" aria-hidden="true">
            ·
          </span>
          <span>{t.main.footerMeta}</span>
        </p>
      </div>
    </footer>
  )
}
