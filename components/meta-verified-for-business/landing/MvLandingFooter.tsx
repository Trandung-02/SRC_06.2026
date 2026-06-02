'use client'

import Link from 'next/link'
import React from 'react'

import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { useAppStrings } from '@/hooks/useAppStrings'
import { useLandingStrings } from '@/hooks/useLandingStrings'

const SOCIAL = [
  { href: 'https://www.facebook.com/', icon: '/images/icons/ic_facebook.svg', label: 'Facebook' },
  { href: 'https://www.instagram.com/', icon: '/images/icons/ic_instagram.svg', label: 'Instagram' },
  { href: 'https://twitter.com/', icon: '/images/icons/ic_x.svg', label: 'X' },
  { href: 'https://www.linkedin.com/', icon: '/images/icons/ic_in.svg', label: 'LinkedIn' },
] as const

export default function MvLandingFooter() {
  const t = useLandingStrings()
  const app = useAppStrings()
  const year = new Date().getFullYear()

  return (
    <footer className="mv-landing-footer w-full pb-[max(24px,env(safe-area-inset-bottom))] pt-12">
      <div className="mx-auto max-w-mv-content px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] lg:px-6">
        <div className="grid gap-8 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="mb-3 text-[13px] font-bold text-white">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-3 text-[13px] font-bold text-white">{app.languagePicker.label}</p>
            <PrivacyLanguagePicker />
          </div>
        </div>

        <ul className="mt-8 flex items-center justify-center gap-4" aria-label="Social media">
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

        <p className="mt-6 text-center text-[12px] text-white/70">
          {t.footer.copyright} {year}
        </p>
      </div>
    </footer>
  )
}
