"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LanguageToggle = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("LanguageToggle");

    const nextLocale = routing.locales.find((candidate) => candidate !== locale) ?? locale;

    const handleToggle = () => {
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            type="button"
            onClick={handleToggle}
            aria-label={t("ariaLabel")}
            className="flex items-center gap-1 rounded-full border border-[#bcbcb5] px-4 py-2 text-sm font-semibold text-[#f2f2ee] transition-colors duration-200 hover:border-lime-300 hover:text-lime-300"
        >     
             <span className={locale === "en" ? "text-lime-300" : ""}>EN</span>
             <span aria-hidden="true">/</span>
            <span className={locale === "es" ? "text-lime-300" : ""}>ES</span>
            
           
        </button>
    );
};

export default LanguageToggle;
