"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Header from "../Header/Header";

type TeamMember = { name: string; bio: string };
type ServiceCard = { title: string; items: string[] };
type PricingPlan = {
    tag: string;
    name: string;
    delivery: string;
    price: string;
    description: string;
    featurePrefix?: string;
    featureHighlight?: string;
    features: string[];
};
type Testimonial = { name: string; role: string; quote: string };
type PortfolioItem = { title: string; description: string };
type FaqItem = { question: string; answer: string };

const Hero = () => {
    const t = useTranslations();
    const teamMembers = t.raw("Team.members") as TeamMember[];
    const serviceCards = t.raw("Services.cards") as ServiceCard[];
    const pricingPlans = t.raw("Pricing.plans") as PricingPlan[];
    const testimonials = t.raw("Testimonials.items") as Testimonial[];
    const portfolioItems = t.raw("Portfolio.items") as PortfolioItem[];
    const faqItems = t.raw("Faq.items") as FaqItem[];
    const aboutParagraphs = t.raw("About.paragraphs") as string[];
    const [openFaq, setOpenFaq] = useState<Record<string, boolean>>({});
    const toggleFaq = (question: string) =>
        setOpenFaq((prev) => ({ ...prev, [question]: !prev[question] }));

    return (
        <>
        <Header />
          {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#282828] bg-[url(/fondo_hero.png)] bg-contain bg-center bg-no-repeat text-[#f0f0ec] min-h-screen">
        
            <div className="pointer-events-none absolute inset-0 -z-10">
                {/* <div className="absolute left-[-12rem] top-[-16rem] h-[28rem] w-[28rem] rounded-full bg-lime-400/10 blur-3xl" /> */}
                {/* <div className="absolute right-[-10rem] bottom-[-14rem] h-[24rem] w-[24rem] rounded-full bg-neutral-100/10 blur-3xl" /> */}
                {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(157,247,77,0.1),transparent_40%))]" /> */}
            </div>

            <div className="mx-auto flex min-h-screen w-full max-w-[1480px] flex-col px-6 pb-12 pt-24 md:px-10 md:pt-28 lg:px-16 lg:pt-32">
                <div className="mx-auto flex w-full max-w-[1200px] grow flex-col items-center justify-center pt-16 text-center md:pt-20">
                    <h1 className="max-w-[30ch] text-balance text-4xl font-medium leading-[1.25] text-[#9df74d] [font-family:var(--font-heading)] sm:text-5xl lg:text-[50px] lg:leading-[1.16]">
                        {t("Hero.title")}
                    </h1>

                    <p className="mt-8 max-w-[880px] text-pretty text-[17px] leading-relaxed text-[#deded7]">
                        {t("Hero.description")}
                    </p>

                    <div className="mt-12 flex w-full max-w-[560px] flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                        <a
                            href="#servicios"
                            className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl bg-[#9df74d] px-8 text-lg font-medium text-[#2b2b2a] transition-transform duration-200 hover:-translate-y-0.5 sm:w-[260px] hover:border-[#FEFDEC] hover:text-[#FEFDEC]"
                        >
                            {t("Hero.ctaMore")}
                        </a>
                        <a
                            href="#contacto-formulario"
                            className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl border border-[#bcbcb5] bg-[#FEFDEC] px-8 text-lg font-medium text-[#2b2b2a] transition-colors duration-200 hover:border-lime-300 hover:text-lime-300 hover:-translate-y-0.5 sm:w-[260px]"
                        >
                            {t("Hero.ctaContact")}
                        </a>
                    </div>

                    <div className="mt-24 grid w-full max-w-[760px] grid-cols-1 items-center gap-8 opacity-60 sm:grid-cols-2 sm:gap-14">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/vivaldi-logo1.svg"
                                alt="Vivaldi"
                                width={200}
                                height={60}
                                className="h-[60px] w-auto"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src="/dictum-logo1.svg"
                                alt="Dictum"
                                width={200}
                                height={60}
                                className="h-[60px] w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Us Section */}
        <section id="quienes-somos" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-medium leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    {t("About.title")}
                </h2>

                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left side text content */}
                    <div className="flex flex-col gap-8">
                        {aboutParagraphs.map((paragraph) => (
                            <p key={paragraph} className="text-lg leading-relaxed text-[#deded7]">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Right side visualization with concentric circles */}
                    <div className="flex items-center justify-center">
                        <motion.svg
                            viewBox="0 0 400 400"
                            className="h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.circle cx="200" cy="200" r="180" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="130"
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth="1"
                                opacity="0.3"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                style={{ transformOrigin: "200px 200px" }}
                            />
                            <motion.circle cx="200" cy="200" r="80" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                            <motion.circle cx="200" cy="200" r="40" fill="#fffef9" />
                            <motion.circle
                                cx="150"
                                cy="35"
                                r="28"
                                fill="#ff6b6b"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.circle
                                cx="280"
                                cy="200"
                                r="20"
                                fill="#6b7dff"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                            />
                            <motion.circle
                                cx="120"
                                cy="300"
                                r="24"
                                fill="#ffed5c"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                            />
                        </motion.svg>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section id="sobre-nosotros" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <div className="flex w-full flex-col items-center gap-6 text-center">
                    <h2 className="text-4xl font-medium leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                        {t("Team.title")}
                    </h2>
                    <p className="max-w-[700px] text-lg text-[#deded7]">
                        {t("Team.subtitle")}
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member, index) => {
                        const teamImages = [
                            { src: "/foto-chris.png", imgClassName: "h-full w-full object-cover" },
                            { src: "/foto-paloma.svg", imgClassName: "h-full w-full object-cover" },
                            { src: "/foto_martin.jpeg", imgClassName: "h-70 w-full object-cover" },
                        ];
                        const image = teamImages[index];

                        return (
                            <div key={member.name} className="flex flex-col items-center gap-6">
                                <div className="h-[200px] w-[200px] overflow-hidden rounded-full bg-gradient-to-br from-[#9df74d] to-[#6b9944]">
                                    <Image
                                        src={image.src}
                                        alt={member.name}
                                        width={200}
                                        height={200}
                                        className={image.imgClassName}
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <h3 className="text-center text-2xl font-medium text-[#9df74d] [font-family:var(--font-heading)]">
                                        {member.name}
                                    </h3>
                                </div>
                                <p className="text-center text-sm leading-relaxed text-[#deded7]">
                                    {member.bio}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-medium leading-tight text-[#9df74d] text-center [font-family:var(--font-heading)] lg:text-5xl">
                    {t("Services.title")}
                </h2>

                <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center">
                    {/* Left Card - Diseño UX/UI */}
                    <div className="w-full rounded-2xl border-1 border-dashed border-[#ff6b6b] bg-transparent p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-solid hover:shadow-[0_0_25px_-5px_rgba(255,107,107,0.6)] lg:max-w-[260px] lg:flex-shrink-0">
                        <h3 className="text-xl font-bold text-[#ff6b6b] [font-family:var(--font-heading)]">
                            {serviceCards[0].title}
                        </h3>
                        <ul className="space-y-2 text-lg text-[#c7c7c1]">
                            {serviceCards[0].items.map((item) => (
                                <li key={item}>• {item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Center Orbital SVG */}
                    <div className="flex flex-1 items-center justify-center">
                        <svg
                            viewBox="0 0 400 400"
                            className="h-[364px] w-[364px] md:h-[494px] md:w-[494px]"
                        >
                            {/* Dashed concentric circles */}
                            <circle cx="200" cy="200" r="175" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="6 5" opacity="0.3" />
                            <circle cx="200" cy="200" r="125" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="6 5" opacity="0.3" />
                            <circle cx="200" cy="200" r="75" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="6 5" opacity="0.3" />

                            {/* Center circle */}
                            <circle cx="200" cy="200" r="35" fill="#fffef9" />

                            {/* Red Planet 1 — upper-left, outer ring */}
                            <motion.g
                                animate={{ scale: [1, 1.18, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                style={{ transformOrigin: "62px 108px" }}
                            >
                                <circle cx="62" cy="108" r="28" fill="#ff6b6b" />
                                <text x="62" y="108" textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="16" fontWeight="bold">1</text>
                            </motion.g>

                            {/* Yellow Planet 2 — lower-right, outer ring */}
                            <motion.g
                                animate={{ scale: [1, 1.18, 1] }}
                                transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                                style={{ transformOrigin: "265px 312px" }}
                            >
                                <circle cx="265" cy="312" r="24" fill="#ffed5c" />
                                <text x="265" y="312" textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="14" fontWeight="bold">2</text>
                            </motion.g>

                            {/* Blue Planet 3 — right, middle ring */}
                            <motion.g
                                animate={{ scale: [1, 1.18, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                style={{ transformOrigin: "312px 135px" }}
                            >
                                <circle cx="312" cy="135" r="20" fill="#6b7dff" />
                                <text x="312" y="135" textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="13" fontWeight="bold">3</text>
                            </motion.g>
                        </svg>
                    </div>

                    {/* Right Cards */}
                    <div className="flex w-full flex-col gap-6 lg:max-w-[260px] lg:flex-shrink-0">
                        {/* Maintenance */}
                        <div className="rounded-2xl border-1 border-dashed border-[#6b7dff] bg-transparent p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-solid hover:shadow-[0_0_25px_-5px_rgba(107,125,255,0.6)]">
                            <h3 className="text-xl font-bold text-[#6b7dff] [font-family:var(--font-heading)]">
                                {serviceCards[1].title}
                            </h3>
                            <ul className="space-y-2 text-lg text-[#c7c7c1]">
                                {serviceCards[1].items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        {/* Development */}
                        <div className="rounded-2xl border-1 border-dashed border-[#ffed5c] bg-transparent p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-solid hover:shadow-[0_0_25px_-5px_rgba(255,237,92,0.6)]">
                            <h3 className="text-xl font-bold text-[#ffed5c] [font-family:var(--font-heading)]">
                                {serviceCards[2].title}
                            </h3>
                            <ul className="space-y-2 text-lg text-[#c7c7c1]">
                                {serviceCards[2].items.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-center text-4xl font-medium leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    {t("Pricing.title")}
                </h2>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div key={plan.name} className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-6">
                            <div>
                                <p className="text-xs font-bold uppercase text-[#5C81FA] tracking-widest">
                                    {plan.tag}
                                </p>
                                <h3 className="mt-3 text-3xl font-bold text-[#FEFDEC] [font-family:var(--font-heading)]">
                                    {plan.name}
                                </h3>
                            </div>

                            <div>
                                <p className="inline-block rounded-full border border-[#FEFDEC] px-4 py-1 text-xs text-[#FEFDEC]">
                                    {plan.delivery}
                                </p>
                            </div>

                            <div>
                                <p className="text-2xl font-bold text-[#FEFDEC]">
                                    {plan.price}
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-[#FEFDEC]">
                                    {plan.description}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase mb-3">
                                    {t("Pricing.includesLabel")}
                                </p>
                                <ul className="space-y-2">
                                    {plan.featurePrefix && (
                                        <li className="text-sm text-[#FEFDEC] flex gap-2">
                                            <span className="text-[#9df74d]">•</span>
                                            <span>{plan.featurePrefix}</span>
                                            <span className="text-[#5C81FA]">{plan.featureHighlight}</span>
                                        </li>
                                    )}
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="text-sm text-[#FEFDEC] flex gap-2">
                                            <span className="text-[#9df74d]">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="w-full rounded-lg bg-[#FEFDEC] py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#7fd940] mt-auto">
                                {t("Pricing.cta")}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-center text-4xl font-medium leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    {t("Testimonials.title")}
                </h2>

                <div className="flex w-full flex-col gap-8">
                    {/* Top row — 2 cards */}
                    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                        {[
                            { color: "#6b7dff", image: "/vivi-foto.svg" },
                            { color: "#ffed5c", image: "/diana-foto.svg" },
                        ].map((style, index) => {
                            const testimonial = testimonials[index];
                            return (
                                <div
                                    key={testimonial.name}
                                    className="rounded-3xl border-2 border-dashed bg-transparent p-8 flex flex-col gap-6"
                                    style={{ borderColor: style.color }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="h-16 w-16 overflow-hidden rounded-full border-2"
                                            style={{ borderColor: style.color }}
                                        >
                                            <Image
                                                src={style.image}
                                                alt={testimonial.name}
                                                width={64}
                                                height={64}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold" style={{ color: style.color }}>
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-sm text-[#c7c7c1]">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                    <blockquote className="text-base leading-relaxed text-[#c7c7c1] italic text-center">
                                        &quot;{testimonial.quote}&quot;
                                    </blockquote>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom row — 1 card centered */}
                    <div className="flex justify-center">
                        <div className="w-full rounded-3xl border-2 border-dashed border-[#ff6b6b] bg-transparent p-8 flex flex-col gap-6 lg:max-w-[calc(50%-16px)]">
                            <div className="flex items-center gap-4">
                                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#ff6b6b]">
                                    <Image
                                        src="/jorge-foto.svg"
                                        alt={testimonials[2].name}
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#ff6b6b]">
                                        {testimonials[2].name}
                                    </h3>
                                    <p className="text-sm text-[#c7c7c1]">
                                        {testimonials[2].role}
                                    </p>
                                </div>
                            </div>
                            <blockquote className="text-base leading-relaxed text-[#c7c7c1] italic text-center">
                                &quot;{testimonials[2].quote}&quot;
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="porfolio" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <div className="flex w-full flex-col items-center gap-6 text-center">
                    <h2 className="text-4xl font-medium leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                        {t("Portfolio.title")}
                    </h2>
                    <p className="max-w-[900px] text-lg text-[#c7c7c1]">
                        {t("Portfolio.description")}
                    </p>
                </div>

                <div className="flex w-full flex-col gap-6">
                    {portfolioItems.map((item, index) => {
                        const hrefs = ["https://www.vivaldimkt.com/", "https://www.dictumtranslationsolutions.com/", null];
                        const href = hrefs[index];
                        const linkClassName = "w-full rounded-xl bg-[#efefe8] px-6 py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7] md:w-auto md:flex-shrink-0 inline-flex items-center justify-center";

                        return (
                            <div key={item.title} className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl font-semibold text-[#9df74d] [font-family:var(--font-heading)]">
                                        {item.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-[#c7c7c1]">
                                        {item.description}
                                    </p>
                                </div>
                                {href ? (
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={linkClassName}
                                    >
                                        {t("Portfolio.cta")} {">"}
                                    </a>
                                ) : (
                                    <button className="w-full rounded-xl bg-[#efefe8] px-6 py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7] md:w-auto md:flex-shrink-0">
                                        {t("Portfolio.cta")} {">"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="qa" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-medium leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    {t("Faq.title")}
                </h2>

                <div className="flex w-full flex-col gap-4">
                    {faqItems.map((item) => {
                        const isOpen = !!openFaq[item.question];
                        return (
                            <div key={item.question} className="rounded-xl border-2 border-[#FEFDEC] p-6">
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(item.question)}
                                    aria-expanded={isOpen}
                                    className={`flex w-full cursor-pointer items-center justify-between gap-4 text-left text-lg font-medium transition-colors duration-200 hover:text-[#9df74d] ${isOpen ? "text-[#9df74d]" : "text-[#c7c7c1]"}`}
                                >
                                    <span>{item.question}</span>
                                    <svg
                                        className={`h-6 w-6 shrink-0 text-[#9df74d] transition-transform duration-300 ease-out ${isOpen ? "" : "rotate-180"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-base leading-relaxed text-[#c7c7c1]">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contacto-formulario" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-12 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-medium leading-tight text-[#9df74d] text-center [font-family:var(--font-heading)] lg:text-5xl">
                    {t("Contact.title")}
                </h2>

                <form className="flex w-full flex-col gap-6">
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder={t("Contact.namePlaceholder")}
                        className="w-full rounded-2xl border-2 border-[#f0f0ec] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder={t("Contact.emailPlaceholder")}
                        className="w-full rounded-2xl border-2 border-[#f0f0ec] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Subject Input */}
                    <input
                        type="text"
                        placeholder={t("Contact.subjectPlaceholder")}
                        className="w-full rounded-2xl border-2 border-[#f0f0ec] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Message Textarea */}
                    <textarea
                        placeholder={t("Contact.messagePlaceholder")}
                        rows={8}
                        className="w-full rounded-2xl border-2 border-[#f0f0ec] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="rounded-2xl bg-[#efefe8] px-12 py-4 text-lg font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7]"
                        >
                            {t("Contact.submit")}
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
};

export default Hero;