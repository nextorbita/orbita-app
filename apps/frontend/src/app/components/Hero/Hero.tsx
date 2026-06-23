"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../Header/Header";

const Hero = () => {
    return (
        <>
        <section className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] min-h-screen">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-[-12rem] top-[-16rem] h-[28rem] w-[28rem] rounded-full bg-lime-400/10 blur-3xl" />
                {/* <div className="absolute right-[-10rem] bottom-[-14rem] h-[24rem] w-[24rem] rounded-full bg-neutral-100/10 blur-3xl" /> */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(157,247,77,0.1),transparent_40%))]" />
            </div>

            <div className="mx-auto flex min-h-screen w-full max-w-[1180px] flex-col px-6 pb-12 pt-7 md:px-10 lg:px-16 lg:pt-10">
                <Header />

                <div className="mx-auto flex w-full max-w-[900px] grow flex-col items-center justify-center pt-16 text-center md:pt-20">
                    <h1 className="max-w-[13ch] text-balance text-4xl font-semibold leading-[1.25] text-[#9df74d] [font-family:var(--font-heading)] sm:text-5xl lg:text-[68px] lg:leading-[1.16]">
                        Tu proyecto digital, en la órbita correcta
                    </h1>

                    <p className="mt-8 max-w-[880px] text-pretty text-[17px] leading-relaxed text-[#deded7]">
                        En nextorbita creamos sitios web y productos digitales enfocados en la experiencia
                        de usuario, el rendimiento y el crecimiento de tu negocio. Combinamos diseño UX/UI,
                        desarrollo front-end y back-end para construir soluciones digitales claras,
                        funcionales y escalables.
                    </p>

                    <div className="mt-12 flex w-full max-w-[560px] flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                        <a
                            href="#contacto-formulario"
                            className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl bg-[#efefe8] px-8 text-lg font-semibold text-[#2b2b2a] transition-transform duration-200 hover:-translate-y-0.5 sm:w-[260px]"
                        >
                            Sigamos en contacto
                        </a>
                        <a
                            href="#"
                            className="inline-flex min-h-[64px] w-full items-center justify-center rounded-2xl border border-[#bcbcb5] bg-transparent px-8 text-lg font-medium text-[#f2f2ee] transition-colors duration-200 hover:border-lime-300 hover:text-lime-300 sm:w-[260px]"
                        >
                            Quiero saber más
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
        <section className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-bold leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    ¿Quiénes somos?
                </h2>

                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left side text content */}
                    <div className="flex flex-col gap-8">
                        <p className="text-lg leading-relaxed text-[#deded7]">
                            Somos nextorbita, una agencia de diseño web y desarrollo web enfocada en crear experiencias digitales funcionales, atractivas y pensadas para crecer junto a cada proyecto.
                        </p>

                        <p className="text-lg leading-relaxed text-[#deded7]">
                            Trabajamos de forma cercana y colaborativa, involucrándosnos en cada etapa del proceso desde la definición de la idea, el diseño de la experiencia de usuario y la interfaz, hasta el desarrollo técnico y el mantenimiento del producto.
                        </p>

                        <p className="text-lg leading-relaxed text-[#deded7]">
                            Nuestro enfoque combina diseño UX/UI, desarrollo front-end y desarrollo back-end, priorizando la usabilidad, el rendimiento y la escalabilidad. Creamos sitios web claros, fáciles de mantener y preparados para evolucionar en el tiempo, acompañando al crecimiento digital de cada cliente.
                        </p>
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
                    <h2 className="text-4xl font-bold leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                        ¿Quiénes forman parte de nextorbita?
                    </h2>
                    <p className="max-w-[700px] text-lg text-[#deded7]">
                        Equipo especializado en UX/UI, front-end y back-end trabajando de forma colaborativa desde la etapa inicial del proyecto.
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Team Member 1 */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-[#9df74d] bg-gradient-to-br from-[#9df74d] to-[#6b9944]">
                            <div className="h-full w-full flex items-center justify-center bg-[#3a3a3a] text-xl font-bold text-[#9df74d]">
                                CA
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h3 className="text-center text-2xl font-bold text-[#9df74d] [font-family:var(--font-heading)]">
                                Christian Aránguiz
                            </h3>
                        </div>
                        <p className="text-center text-sm leading-relaxed text-[#deded7]">
                            Ha estudiado la carrera de Analista de Sistemas y cuenta con experiencia previa como desarrolladora, lo que le permite comprender en profundidad el nivel de diseño y tecnología. Actualmente se enfoca en el área de diseño UX/UI, en la cual se ha formado a través de distintos cursos y un Master en UX/UI en Nuclio Digital School. Diseña experiencias claras, funcionales y alineadas a los objetivos del negocio.
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-[#9df74d] bg-gradient-to-br from-[#9df74d] to-[#6b9944]">
                            <Image
                                src="/foto-paloma.svg"
                                alt="Paloma Herrera"
                                width={200}
                                height={200}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h3 className="text-center text-2xl font-bold text-[#9df74d] [font-family:var(--font-heading)]">
                                Paloma Herrera
                            </h3>
                        </div>
                        <p className="text-center text-sm leading-relaxed text-[#dedad7]">
                            Ha estudiado la carrera de Analista de Sistemas y cuenta con experiencia previa como desarrolladora, lo que le permite comprender en profundidad el nivel de diseño y tecnología. Actualmente se enfoca en el área de diseño UX/UI, en la cual se ha formado a través de distintos cursos y un Master en UX/UI en Nuclio Digital School. Diseña experiencias claras, funcionales y alineadas a los objetivos del negocio.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="flex flex-col items-center gap-6">
                        <div className="h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-[#9df74d] bg-gradient-to-br from-[#9df74d] to-[#6b9944]">
                            <div className="h-full w-full flex items-center justify-center bg-[#3a3a3a] text-xl font-bold text-[#9df74d]">
                                MV
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <h3 className="text-center text-2xl font-bold text-[#9df74d] [font-family:var(--font-heading)]">
                                Martin Valdes
                            </h3>
                        </div>
                        <p className="text-center text-sm leading-relaxed text-[#deded7]">
                            Soy desarrollador Full Stack, con especialización en Backend, enfocado en la creación de soluciones robustas, escalables y seguras. Trabajo principalmente en el desarrollo y mantenimiento de arquitecturas del lado del servidor, integrando APIs y lógica de negocio eficiente. Complemento mi perfil como desarrollador con formación en redes de datos y ciberseguridad, tanto en el ámbito defensivo como ofensivo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-bold leading-tight text-[#9df74d] text-center [font-family:var(--font-heading)] lg:text-5xl">
                    ¿Qué servicios ofrecemos?
                </h2>

                <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center">
                    {/* Left Card - Diseño UX/UI */}
                    <div className="w-full rounded-2xl border-2 border-dashed border-[#ff6b6b] bg-transparent p-6 flex flex-col gap-4 lg:max-w-[260px] lg:flex-shrink-0">
                        <h3 className="text-xl font-bold text-[#ff6b6b] [font-family:var(--font-heading)]">
                            Diseño UX/UI
                        </h3>
                        <ul className="space-y-2 text-lg text-[#c7c7c1]">
                            <li>• Research y arquitectura de información</li>
                            <li>• Diseño de interfaces y prototipado en Figma</li>
                            <li>• Diseño responsive y creación de UI Kits</li>
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
                        <div className="rounded-2xl border-2 border-dashed border-[#6b7dff] bg-transparent p-6 flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-[#6b7dff] [font-family:var(--font-heading)]">
                                Mantenimiento de la web
                            </h3>
                            <ul className="space-y-2 text-lg text-[#c7c7c1]">
                                <li>• Testing final y optimización antes del lanzamiento</li>
                                <li>• Configuración de entorno de producción</li>
                                <li>• Deploy en producción y monitoreo post-lanzamiento</li>
                            </ul>
                        </div>
                        {/* Development */}
                        <div className="rounded-2xl border-2 border-dashed border-[#ffed5c] bg-transparent p-6 flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-[#ffed5c] [font-family:var(--font-heading)]">
                                Desarrollo front-end y backend
                            </h3>
                            <ul className="space-y-2 text-lg text-[#c7c7c1]">
                                <li>• Landing pages, e-commerce</li>
                                <li>• Desarrollo front-end (React, NextJS, TypeScript y TailwindCSS)</li>
                                <li>• Desarrollo back-end (bases de datos, integraciones y paneles)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pricing Plans Section */}
        <section className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-center text-4xl font-bold leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    Conocé nuestros planes y elegi el ideal para vos
                </h2>

                <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Plan 1 - NOVA */}
                    <div className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-6">
                        <div>
                            <p className="text-xs font-bold uppercase text-[#5C81FA] tracking-widest">
                                Estandar
                            </p>
                            <h3 className="mt-3 text-3xl font-bold text-[#FEFDEC] [font-family:var(--font-heading)]">
                                Plan NOVA
                            </h3>
                        </div>

                        <div>
                            <p className="inline-block rounded-full border border-[#FEFDEC] px-4 py-1 text-xs text-[#FEFDEC]">
                                Entrega Estimado: 2 a 3 Semanas
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-[#c7c7c1]">
                                Desde USD 400
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-[#c7c7c1]">
                                Ideal para marcas personales, lanzamientos de empresas o emprendimientos que necesitan una presencia online rápida, moderna y efectiva.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase mb-3">
                                Incluye:
                            </p>
                            <ul className="space-y-2">
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Diseño UX/UI completo en FIGMA</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Implementación en Wordpress</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Sitio responsivo</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>3 revisiones</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Configuración completa de hosting, dominio y seguridad SSL</span>
                                </li>
                            </ul>
                        </div>

                        <button className="w-full rounded-lg bg-[#FEFDEC] py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#7fd940] mt-auto">
                            Solicitar más info
                        </button>
                    </div>

                    {/* Plan 2 - ONIX */}
                    <div className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-6">
                        <div>
                            <p className="text-xs font-bold uppercase text-[#5C81FA] tracking-widest">
                                Premium
                            </p>
                            <h3 className="mt-3 text-3xl font-bold text-[#FEFDEC] [font-family:var(--font-heading)]">
                                Plan ONIX
                            </h3>
                        </div>

                        <div>
                            <p className="inline-block rounded-full border border-[#FEFDEC] px-4 py-1 text-xs text-[#FEFDEC]">
                                Entrega Estimado: 3 a 4 Semanas
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-[#c7c7c1]">
                                Desde USD 800
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-[#c7c7c1]">
                                Ideal para empresas o marcas que buscan presencia online profesional y que necesitan una solución integral.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase mb-3">
                                Incluye:
                            </p>
                            <ul className="space-y-2">
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Diseño UX/UI completo en FIGMA</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>UI Kit y manual de diseño</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Desarrollo front-end + back-end básico</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>APIs</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Sitio responsivo</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>5 revisiones pre-lanzamiento</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Configuración completa de hosting, dominio y seguridad SSL</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Soporte post-lanzamiento</span>
                                </li>
                            </ul>
                        </div>

                        <button className="w-full rounded-lg bg-[#FEFDEC] py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#7fd940] mt-auto">
                            Solicitar más info
                        </button>
                    </div>

                    {/* Plan 3 - ÓRBITA */}
                    <div className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-6">
                        <div>
                            <p className="text-xs font-bold uppercase text-[#5C81FA] tracking-widest">
                                Personalizado
                            </p>
                            <h3 className="mt-3 text-3xl font-bold text-[#FEFDEC] [font-family:var(--font-heading)]">
                                Plan ÓRBITA
                            </h3>
                        </div>

                        <div>
                            <p className="inline-block rounded-full border border-[#FEFDEC] px-4 py-1 text-xs text-[#FEFDEC]">
                                Entrega Estimado: A Definir
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-[#c7c7c1]">
                                Precio: a definir según requerimientos del proyecto
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-[#c7c7c1]">
                                Ideal para empresas o proyectos que necesitan un sitio web 100% personalizado, con funcionalidades específicas, integraciones avanzadas o diseño a medida desde cero.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase mb-3">
                                Incluye:
                            </p>
                            <ul className="space-y-2">
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Incluye todo del</span>
                                    <span className='text-[#5C81FA]'>PLAN ONIX +</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Reunión estratégica y análisis del proyecto</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Arquitectura UX/UI personalizada</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Desarrollo front-end y back-end a medida</span>
                                </li>
                                <li className="text-sm text-[#c7c7c1] flex gap-2">
                                    <span className="text-[#9df74d]">•</span>
                                    <span>Revisiones ilimitadas</span>
                                </li>
                            </ul>
                        </div>

                        <button className="w-full rounded-lg bg-[#FEFDEC] py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#7fd940] mt-auto">
                            Solicitar más info
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-center text-4xl font-bold leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    ¿Qué opinan nuestros clientes?
                </h2>

                <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Testimonial 1 */}
                    <div className="rounded-3xl border-2 border-[#9df74d] bg-transparent p-8 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#9df74d] bg-gradient-to-br from-[#9df74d] to-[#6b9944]">
                                <Image
                                    src="/vivi-foto.svg"
                                    alt="Nombre Completo"
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#9df74d]">
                                    Viviana Urbaneja
                                </h3>
                                <p className="text-sm text-[#c7c7c1]">
                                    Vivaldi Marketing - Co-Founder
                                </p>
                            </div>
                        </div>

                        <blockquote className="text-base leading-relaxed text-[#c7c7c1] italic">
                            &quot;Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor&quot;
                        </blockquote>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="rounded-3xl border-2 border-[#9df74d] bg-transparent p-8 flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-[#9df74d] bg-gradient-to-br from-[#9df74d] to-[#6b9944]">
                                <Image
                                    src="/diana-foto.svg"
                                    alt="Diana Pompa Morris"
                                    width={64}
                                    height={64}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#9df74d]">
                                    Diana Pompa Morris
                                </h3>
                                <p className="text-sm text-[#c7c7c1]">
                                    Dictum - Founder & Lead Quality Assurance
                                </p>
                            </div>
                        </div>

                        <blockquote className="text-base leading-relaxed text-[#c7c7c1] italic">
                            &quot;Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor&quot;
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section id="porfolio" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-16 px-6 md:px-10 lg:px-16">
                <div className="flex w-full flex-col items-center gap-6 text-center">
                    <h2 className="text-4xl font-bold leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                        Portafolio
                    </h2>
                    <p className="max-w-[800px] text-lg text-[#c7c7c1]">
                        Creamos sitios web pensados para las personas. En este portfolio mostramos algunos de los proyectos en los que trabajamos, combinando diseño UX/UI, desarrollo y mantenimiento para construir experiencias digitales que funcionan, se ven bien y evolucionan en el tiempo.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-6">
                    {/* Portfolio Item 1 */}
                    <div className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-[#9df74d] [font-family:var(--font-heading)]">
                                Vivaldi Marketing
                            </h3>
                            <p className="text-base leading-relaxed text-[#c7c7c1]">
                                Para Vivaldi Marketing nos encargamos del rediseño de su sitio web. El cliente ya contaba con una parte del diseño avanzado, y nuestra tarea fue optimizar lo existente y completar el diseño del resto de las páginas para lograr una experiencia coherente y alineada con la identidad de la marca.
                            </p>
                        </div>
                        <a
                            href="https://www.vivaldimkt.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-xl bg-[#efefe8] px-6 py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7] md:w-auto md:flex-shrink-0 inline-flex items-center justify-center"
                        >
                            Ver proyecto {">"}
                        </a>
                    </div>

                    {/* Portfolio Item 2 */}
                    <div className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-[#9df74d] [font-family:var(--font-heading)]">
                                Dictum Translations
                            </h3>
                            <p className="text-base leading-relaxed text-[#c7c7c1]">
                                Para Dictum Translation Solutions llevamos adelante el rediseño completo de su sitio web en español e inglés. El proceso comenzó con el diseño UX/UI en Figma y posteriormente fue implementado en WordPress. El objetivo principal fue modernizar la identidad digital de la marca, logrando un estilo contemporáneo y formal, pero al mismo tiempo dinámico y flexible, evitando una estructura rígida.
                            </p>
                        </div>
                        <a
                            href="https://www.dictumtranslationsolutions.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full rounded-xl bg-[#efefe8] px-6 py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7] md:w-auto md:flex-shrink-0 inline-flex items-center justify-center"
                        >
                            Ver proyecto {">"}
                        </a>
                    </div>

                    {/* Portfolio Item 3 */}
                    <div className="rounded-3xl border-2 border-[#FEFDEC] bg-transparent p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold text-[#9df74d] [font-family:var(--font-heading)]">
                                easyemAll
                            </h3>
                            <p className="text-base leading-relaxed text-[#c7c7c1]">
                                EasyEmail fue un proyecto desarrollado en 5 días dentro de No Country, con el desafío de integrar inteligencia artificial para la generación automatizada de emails orientados a emprendimientos. La plataforma permite crear correos personalizados definiendo temática, tono y asunto según las necesidades del usuario, optimizando tiempos y facilitando la comunicación digital.
                            </p>
                        </div>
                        <button className="w-full rounded-xl bg-[#efefe8] px-6 py-3 font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7] md:w-auto md:flex-shrink-0">
                            Ver proyecto {">"}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="qa" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-16 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-bold leading-tight text-[#9df74d] [font-family:var(--font-heading)] lg:text-5xl">
                    Preguntas Frecuentes
                </h2>

                <div className="flex w-full flex-col gap-4">
                    {/* FAQ Item 1 */}
                    <details className="group rounded-3xl border-2 border-[#FEFDEC] p-6 cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-medium text-[#c7c7c1] hover:text-[#9df74d] group-open:text-[#9df74d] transition-colors duration-200">
                            <span>¿Cómo es el proceso de trabajo para un nuevo proyecto?</span>
                            <svg
                                className="h-6 w-6 text-[#FEFDEC] group-open:text-[#9df74d] transition-transform group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-base leading-relaxed text-[#c7c7c1]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                        </p>
                    </details>

                    {/* FAQ Item 2 */}
                    <details className="group rounded-3xl border-2 border-[#FEFDEC] p-6 cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-medium text-[#c7c7c1] hover:text-[#9df74d] group-open:text-[#9df74d] transition-colors duration-200">
                            <span>¿Cuánto tiempo lleva desarrollar una página web?</span>
                            <svg
                                className="h-6 w-6 text-[#FEFDEC] group-open:text-[#9df74d] transition-transform group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-base leading-relaxed text-[#c7c7c1]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                        </p>
                    </details>

                    {/* FAQ Item 3 */}
                    <details className="group rounded-3xl border-2 border-[#FEFDEC] p-6 cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-medium text-[#c7c7c1] hover:text-[#9df74d] group-open:text-[#9df74d] transition-colors duration-200">
                            <span>¿Mi sitio web será adaptable a dispositivos móviles?</span>
                            <svg
                                className="h-6 w-6 text-[#FEFDEC] group-open:text-[#9df74d] transition-transform group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-base leading-relaxed text-[#c7c7c1]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                        </p>
                    </details>

                    {/* FAQ Item 4 */}
                    <details className="group rounded-3xl border-2 border-[#FEFDEC] p-6 cursor-pointer">
                        <summary className="flex items-center justify-between text-lg font-medium text-[#c7c7c1] hover:text-[#9df74d] group-open:text-[#9df74d] transition-colors duration-200">
                            <span>¿Pueden rediseñar o mejorar un sitio web existente?</span>
                            <svg
                                className="h-6 w-6 text-[#FEFDEC] group-open:text-[#9df74d] transition-transform group-open:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </summary>
                        <p className="mt-4 text-base leading-relaxed text-[#c7c7c1]">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                        </p>
                    </details>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section id="contacto-formulario" className="relative isolate overflow-hidden bg-[#282828] text-[#f0f0ec] py-20 md:py-32">
            <div className="mx-auto flex w-full max-w-[600px] flex-col items-center gap-12 px-6 md:px-10 lg:px-16">
                <h2 className="text-4xl font-bold leading-tight text-[#9df74d] text-center [font-family:var(--font-heading)] lg:text-5xl">
                    Sigamos en contacto
                </h2>

                <form className="flex w-full flex-col gap-6">
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Nombre y Apellido"
                        className="w-full rounded-2xl border-2 border-[#9df74d] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-2xl border-2 border-[#9df74d] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Subject Input */}
                    <input
                        type="text"
                        placeholder="Asunto"
                        className="w-full rounded-2xl border-2 border-[#9df74d] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Message Textarea */}
                    <textarea
                        placeholder="Mensaje"
                        rows={8}
                        className="w-full rounded-2xl border-2 border-[#9df74d] bg-transparent px-6 py-4 text-white placeholder-white placeholder-opacity-50 transition-colors resize-none focus:outline-none focus:ring-2 focus:ring-[#9df74d]/30"
                    />

                    {/* Submit Button */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="rounded-2xl bg-[#efefe8] px-12 py-4 text-lg font-semibold text-[#2b2b2a] transition-colors duration-200 hover:bg-[#deded7]"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
};

export default Hero;