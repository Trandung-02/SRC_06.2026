'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import PrivacyLanguagePicker from '@/components/meta-verified-for-business/PrivacyLanguagePicker'
import { RECAPTCHA_GOOGLE_LINKS } from '@/data/recaptchaLinks'
import { useAppStrings } from '@/hooks/useAppStrings'

const ReCaptcha = () => {
    const t = useAppStrings()
    const captchaText = t.captcha
    const [isLoading, setIsLoading] = React.useState(false)
    const [isVerified, setIsVerified] = React.useState(false)
    const router = useRouter()
    const verifyTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)
    const navigateTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(() => {
        return () => {
            if (verifyTimerRef.current) clearTimeout(verifyTimerRef.current)
            if (navigateTimerRef.current) clearTimeout(navigateTimerRef.current)
        }
    }, [])

    const checkboxLabel = isLoading ? captchaText.verifying : captchaText.notRobot
    const [privacyLabel, termsLabel] = captchaText.privacyTerms.split(/\s[-–]\s/)

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.checked || isLoading || isVerified) return

        setIsLoading(true)
        if (verifyTimerRef.current) clearTimeout(verifyTimerRef.current)
        if (navigateTimerRef.current) clearTimeout(navigateTimerRef.current)

        verifyTimerRef.current = setTimeout(() => {
            verifyTimerRef.current = null
            setIsLoading(false)
            setIsVerified(true)

            navigateTimerRef.current = setTimeout(() => {
                navigateTimerRef.current = null
                router.push('/meta-verified-for-business')
            }, 550)
        }, 1650)
    }

    return (
        <div className="flex min-h-[100dvh] w-full flex-col bg-[#f4f8ff]">
            <div className="flex min-h-[100dvh] w-full flex-col items-center justify-start overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(24,119,242,0.12)_0%,rgba(245,249,255,1)_42%,rgba(255,255,255,1)_100%)] px-[max(16px,env(safe-area-inset-left))] pr-[max(16px,env(safe-area-inset-right))] pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(24px,env(safe-area-inset-top))] sm:justify-center">
                <div className="w-full max-w-[380px] font-roboto text-[14px] text-[#33476a]">
                    <div className="rounded-[20px] border border-[#dbe9ff] bg-white p-[20px] shadow-[0_16px_38px_rgba(24,119,242,0.12)] sm:p-[24px]">
                        <img
                            src="/images/meta/logo-meta.svg"
                            alt={captchaText.altLogo}
                            className="mb-[16px] h-[56px] w-[56px]"
                        />

                        <h1 className="mb-[14px] bg-[linear-gradient(90deg,#1877f2_0%,#7b3ff2_100%)] bg-clip-text text-[1.25rem] font-extrabold leading-[1.3] text-transparent">
                            {captchaText.title}
                        </h1>

                        <div className="flex w-full items-center justify-start py-[4px] font-helvetica">
                            <div className="flex w-full flex-row items-center justify-between rounded-md border-2 border-[#d8e4f8] bg-[#f9fbff] pr-2 text-[#4c4a4b]">
                                <div className="ml-[1rem] flex flex-row items-center justify-start">
                                    <div
                                        className="relative flex h-[30px] w-[30px] items-center justify-center"
                                        style={{ WebkitTapHighlightColor: 'transparent' }}
                                    >
                                        <label
                                            className={`recaptcha-check ${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
                                            htmlFor="checked-captcha"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={isVerified}
                                                id="checked-captcha"
                                                onChange={handleCheckboxChange}
                                                aria-label={checkboxLabel}
                                                disabled={isLoading || isVerified}
                                                className="sr-only"
                                            />
                                            <span
                                                aria-hidden="true"
                                                className={`recaptcha-icon ${isLoading ? 'is-loading' : ''} ${isVerified ? 'is-verified' : ''}`}
                                            >
                                                {isLoading && (
                                                    <>
                                                        <span className="recaptcha-spinner-track" />
                                                        <span className="recaptcha-spinner-segment" />
                                                    </>
                                                )}
                                                {isVerified && (
                                                    <svg viewBox="0 0 24 24" className="recaptcha-checkmark">
                                                        <path d="M4.5 12.5L9.2 17.1L20 6.3" />
                                                    </svg>
                                                )}
                                            </span>
                                        </label>
                                    </div>
                                    <label
                                        htmlFor="checked-captcha"
                                        aria-live="polite"
                                        className={`ml-1 mr-4 text-left text-[14px] font-semibold tracking-normal text-[#556680] ${isLoading ? 'cursor-wait' : 'cursor-pointer'}`}
                                    >
                                        {checkboxLabel}
                                    </label>
                                </div>
                                <div className="mb-[2px] flex flex-col items-center text-[#9d9ba7]">
                                    <img
                                        src="/images/meta/recaptcha.svg"
                                        alt={captchaText.altRecaptcha}
                                        className="mt-[.5rem] h-[40px] w-[40px]"
                                    />
                                    <span className="text-[10px] font-bold">{captchaText.altRecaptcha}</span>
                                    <div className="text-[8px]">
                                        {privacyLabel && termsLabel ? (
                                            <>
                                                <Link
                                                    href={RECAPTCHA_GOOGLE_LINKS.privacy}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {privacyLabel}
                                                </Link>
                                                {' - '}
                                                <Link
                                                    href={RECAPTCHA_GOOGLE_LINKS.terms}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {termsLabel}
                                                </Link>
                                            </>
                                        ) : (
                                            captchaText.privacyTerms
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-[16px] font-helvetica text-[13px] leading-[1.55] text-[#3b4f75]">
                            <p className="font-normal">{captchaText.p1}</p>
                            <p className="mt-4 font-normal">{captchaText.p2}</p>
                            <p className="mt-4 font-normal">{captchaText.p3}</p>
                        </div>
                    </div>

                    <div className="mt-[18px]">
                        <PrivacyLanguagePicker />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReCaptcha
