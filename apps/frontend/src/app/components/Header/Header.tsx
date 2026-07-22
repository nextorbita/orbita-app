"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const navHrefs = [
    "#about-us",
    "#services",
    "#testimonials",
    "#porfolio",
    "#qa",
    "#contact-form",
] as const;

const navKeys = ["about", "services", "testimonials", "portfolio", "qa", "contact"] as const;

const Header = () => {
    const t = useTranslations("Header");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-[#282828]/95 shadow-sm shadow-black/10 backdrop-blur-sm [font-family:var(--font-heading)]">
            <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-10 px-6 py-5 md:px-10 lg:px-16">
                <a href="#" aria-label={t("logoAlt")} className="shrink-0">
                    <Image
                        src="/nex-orbita-logo.svg"
                        alt="Orbitadev"
                        width={198}
                        height={48}
                        priority
                        className="h-auto w-[75px] sm:w-[85px] md:w-[105px]"
                    />
                </a>

                <div className="flex items-center gap-4 md:gap-10">
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-10 text-lg font-medium text-[#f2f2ee]">
                            {navKeys.map((key, index) => (
                                <li key={key}>
                                    <a
                                        href={navHrefs[index]}
                                        className="transition-colors duration-200 hover:text-lime-300"
                                    >
                                        {t(`nav.${key}`)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <LanguageToggle />
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
                        aria-expanded={isMenuOpen}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[#f2f2ee] transition-colors hover:text-lime-300 md:hidden"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <AnimatePresence initial={false}>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden border-t border-white/10 md:hidden"
                    >
                        <nav className="px-6 py-6">
                            <ul className="flex flex-col gap-5 text-lg font-medium text-[#f2f2ee]">
                                {navKeys.map((key, index) => (
                                    <li key={key}>
                                        <a
                                            href={navHrefs[index]}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block transition-colors duration-200 hover:text-lime-300"
                                        >
                                            {t(`nav.${key}`)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
