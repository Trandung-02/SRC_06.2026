import type { Metadata } from 'next'

const FB_FAVICON = 'https://static.xx.fbcdn.net/rsrc.php/y5/r/m4nf26cLQxS.ico'
const DEFAULT_TITLE = 'Meta Verified for Business'
const OG_IMAGE_PATH = '/images/meta/header.png'

function resolveMetadataBase(): URL | undefined {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (siteUrl) {
    return new URL(siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`)
  }
  const vercelUrl = process.env.VERCEL_URL?.trim()
  if (vercelUrl) {
    return new URL(`https://${vercelUrl}`)
  }
  return undefined
}

const metadataBase = resolveMetadataBase()

export const metaVerifiedMetadata: Metadata = {
  ...(metadataBase ? { metadataBase } : {}),
  title: DEFAULT_TITLE,
  icons: {
    icon: FB_FAVICON,
    apple: FB_FAVICON,
    shortcut: FB_FAVICON,
  },
  description:
    'Meta Verified for Business helps you build trust, protect your brand and grow on Facebook, Instagram and WhatsApp. Choose a plan and sign up today.',
  themeColor: '#1877F2',
  openGraph: {
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 3919,
        height: 1671,
        alt: 'Meta Verified for Business',
      },
    ],
    title: DEFAULT_TITLE,
    description:
      'Verify your business with Meta Verified for Business. Build trust, protect your brand and connect with customers.',
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE_PATH],
    title: DEFAULT_TITLE,
    description:
      'Verify your business with Meta Verified for Business. Build trust, protect your brand and connect with customers.',
  },
}
