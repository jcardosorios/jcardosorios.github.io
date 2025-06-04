import { Github, Linkedin, Mail } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper"
import { useLanguage } from "../../context/LanguageContext";
import { Card, CardContent } from "../ui/Card";
import type { ContactMeEvent } from "../../types";
import ContactMeItem from "../contact-me/ContactMeItem";


const contactLinks : ContactMeEvent[] = [
  {
    href: 'https://github.com/jcardosorios',
    label: { en: 'Gihub', es: 'Github' }, 
    icon: Github,
    handle: 'jcardosorios',
  },
  {
    href: 'https://linkedin.com/in/jcardosor', 
    label: { en: 'LinkedIn', es: 'LinkedIn' },
    icon: Linkedin,
    handle: 'jcardosor',
  },
  {
    href: 'mailto:joaquin.cardoso.r@gmail.com', 
    label: { en: 'Email', es: 'Correo' },
    icon: Mail,
    handle: 'joaquin.cardoso.r@gmail.com',
  },
];

const content = {
  sectionTitle: {
    en: "Get In Touch",
    es: "Pongámanos en Contacto",
  },
  intro: {
    en: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    es: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
  },
  footerText: {
    en: "JCardoso Portfolio. All rights reserved.",
    es: "Portafolio JCardoso. Todos los derechos reservados.",
  }
};


function ContactMe() {
    const { language } = useLanguage();
    const currentContent = {
        sectionTitle: content.sectionTitle[language],
        intro: content.intro[language],
        footerText: content.footerText[language],
    };
    const currentYear = new Date().getFullYear();
    return (
        <SectionWrapper id='contact' title={content.sectionTitle[language]} className="pb-20 md:pb-32">
            <Card className="max-w-2xl mx-auto shadow-lg">
                <CardContent className="p-8 md:p-12">
                    <p className="text-center text-lg text-foreground/80 mb-8">{currentContent.intro}</p>
                    <div className="space-y-6">
                        {contactLinks.map((event) => (
                            <ContactMeItem key={event.label[language]} event={event} />
                        ))}
                    </div>
                </CardContent>
            </Card>
            <footer className="text-center mt-16 text-muted-foreground">
                <p>&copy; {currentYear} {currentContent.footerText}</p>
            </footer>
        </SectionWrapper>
  )
}

export default ContactMe