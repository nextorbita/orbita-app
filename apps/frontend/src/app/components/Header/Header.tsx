"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

const navHrefs = [
    "#sobre-nosotros",
    "#servicios",
    "#testimonios",
    "#porfolio",
    "#qa",
    "#contacto-formulario",
] as const;

const navKeys = ["about", "services", "testimonials", "portfolio", "qa", "contact"] as const;

const Header = () => {
    const t = useTranslations("Header");

    return (
        <header className="flex items-center justify-between gap-10 [font-family:var(--font-heading)]">
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

            <div className="flex items-center gap-6 md:gap-10">
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
            </div>
        </header>
    );
};

export default Header;
