import Image from "next/image";

const navItems = [
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Porfolio", href: "#porfolio" },
    { label: "Q&A", href: "#qa" },
    { label: "Contacto", href: "#contacto-formulario" },
];

const Header = () => {
    return (
        <header className="flex items-center justify-between gap-10 [font-family:var(--font-heading)]">
            <a href="#" aria-label="Ir al inicio de Orbitadev" className="shrink-0">
                <Image
                    src="/nex-orbita-logo.svg"
                    alt="Orbitadev"
                    width={198}
                    height={48}
                    priority
                    className="h-auto w-[75px] sm:w-[85px] md:w-[105px]"
                />
            </a>

            <nav className="hidden md:block">
                <ul className="flex items-center gap-10 text-lg font-medium text-[#f2f2ee]">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="transition-colors duration-200 hover:text-lime-300"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
