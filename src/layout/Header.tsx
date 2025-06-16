import { useLanguage } from "../context/LanguageContext";
import { Menu, Briefcase, Languages } from "lucide-react";
import type { LocalizedString } from "../types";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/Sheet";


interface NavItem {
  href: string;
  label: LocalizedString;
}

const content = {
  portfolioName: {
    en: "Joaquin Cardoso",
    es: "Joaquín Cardoso",
  },
  navItems: [
    { href: "#about-me", label: { en: "About Me", es: "Sobre Mí" } },
    { href: "#work-experience", label: { en: "Work Experience", es: "Experiencia Laboral" } },
    { href: "#timeline", label: { en: "Education", es: "Estudios" } },
    { href: "#data-science", label: { en: "Data Science", es: "Cien. Datos" } },
    { href: "#web-dev", label: { en: "Web Dev", es: "Des. Web" } },
    { href: "#contact", label: { en: "Contact", es: "Contacto" } },
  ] as NavItem[],
  languageToggle: {
    en: "Español",
    es: "English",
  },
  ariaLabelLanguage: {
    en: "Switch to Spanish",
    es: "Cambiar a Inglés",
  }
};

function Header() {
    const { language, toggleLanguage } = useLanguage();
    
    const currentContent = {
    portfolioName: content.portfolioName[language],
    navItems: content.navItems.map(item => ({ href: item.href, label: item.label[language] })),
    languageToggle: content.languageToggle[language],
    ariaLabelLanguage: content.ariaLabelLanguage[language],
  };
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm supports-[backdrop-filter]:bg-background/70 shadow-sm">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
            <Link to={'/'} className="flex items-center gap-2 group">
                <Briefcase className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[15deg]" />
                <span className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                    {currentContent.portfolioName}
                </span>
            </Link>
            <nav className="hidden md:flex md:flex-wrap items-center space-x-4 text-sm font-medium">
                {currentContent.navItems.map((item) => (
                    <Link
                        key={item.label}
                        to={item.href}
                        className="text-foreground/80 transition-colors hover:text-primary py-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            <div className="flex items-center gap-2">
                <Button
                    variant='outline'
                    onClick={toggleLanguage}
                    size='sm'
                    className="flex items-center gap-1.5 group hover:bg-accent/10 transition-colors duration-300 px-2.5"
                >
                    <Languages className="h-4 w-4 text-primary group-hover:text-accent transition-colors"/>
                    <span className="text-sx text-foreground group-hover:text-accent transition-colors">
                        {currentContent.languageToggle}
                    </span>
                </Button>
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant='ghost' size='icon'>
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='right'>
                            <nav className="flex flex-col space-y-4 mt-8">
                                {currentContent.navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg text-foreground/80 transition-colors hover:text-primary "
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header