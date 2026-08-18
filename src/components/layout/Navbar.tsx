export default function Navbar(){
    return(
        <nav className="w-full sticky top-0 z-50 border-b border-neutral-200 bg-background">
            <div className="mx-auto flex h-16 w-full items-center justify-between px-6">
                <a
                href="/"
                className="text-lg font-bold tracking-tight text-neutral-950 antialiased"
                >
                Franz
                </a>

                <div className="flex items-center gap-8">
                <a
                    href="#about"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                >
                    About
                </a>

                <a
                    href="#skills"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                >
                    Contact
                </a>
                </div>
            </div>
        </nav>
    )
}