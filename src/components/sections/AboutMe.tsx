import type { ReactNode } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "../../context/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";
import profile from '../../assets/about-me/perfil.jpg'


interface LanguageContent {
  title: string;
  greeting: string;
  bio: ReactNode;
  skillsTitle: string;
  skills: string[];
}

const content: Record<'en' | 'es', LanguageContent> = {
  en: {
    title: "About Me",
    greeting: "Hi, I'm Joaquin Cardoso!",
    bio: (
        <>
            I’m a Web Developer with 2 years of experience and a Data Science enthusiast taking my first steps in the field.
            I studied and worked as a Mechanical Engineer before making a career shift to pursue my true passion: technology.
            I enjoy tackling challenges and constantly seek to learn and grow, both within the tech world and beyond.
            My goal is to make the most of my skills and contribute meaningfully to every project I take on.
        </>
    ),
    skillsTitle: "My Skills",
    skills: [
      "Frontend development (HTML, CSS, Js, Ts, React)",
      "Backend development (NodeJs, ExpressJs, Django)",
      "Databases(PostgreSQL, MongoDB)",
      "Data Analysis (Python, Pandas, SQL)",
      "Machine Learning (Scikit-learn, TensorFlow basics)",
      "Version Control (Git & GitHub)",
      "Agile Methodologies",
      "Problem Solving"
    ],
  },
  es: {
    title: "Sobre Mí",
    greeting: "¡Hola, soy Joaquin Cardoso!",
    bio: (
        <>
            Soy un Desarrollador Web con 2 años de experiencia y un entusiasta de la Ciencia de Datos dando mis primeros pasos en este campo.
            Estudié y trabajé como Ingeniero Mecánico, hasta que decidí dar un giro en mi carrera para dedicarme a la tecnología, mi verdadera pasión.
            Disfruto enfrentar desafíos y estoy en constante búsqueda de aprendizaje, tanto dentro del mundo tech como más allá.
            Mi objetivo es aprovechar al máximo mis habilidades y aportar valor de forma significativa en cada proyecto que emprenda.
        </>
    ),
    skillsTitle: "Mis Habilidades",
    skills: [
      "Desarrollo Frontend (HTML, CSS, Js, Ts, React)",
      "Desarrollo Backend (NodeJs, ExpressJs, Django)",
      "Bases de datos (PostgreSQL, MongoDB)",
      "Análisis de Datos (Python, Pandas, SQL)",
      "Aprendizaje Automático (Scikit-learn, bases de TensorFlow)",
      "Control de Versiones (Git y GitHub)",
      "Metodologías Ágiles",
      "Resolución de Problemas"
    ],
  },
};



function AboutMe() {
    const { language } = useLanguage();
    const currentContent = content[language];

    // TODO agregar foto e iconos de skills
    return (
        <SectionWrapper id='about-me' title={currentContent.title} className="bg-background">
            <Card className="max-w-3xl mx-auto shadow-lg border border-border/60">
                <CardHeader className="flex flex-column items-center justify-between pb-4">
                    <img  src={profile} className="object-cover rounded-full w-40 h-40 sm:w-48 sm:h-48 ring ring-primary"/>
                    <CardTitle className="text-2xl md:text-3xl font-semibold text-primary">{currentContent.greeting}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-0">
                    <p className="text-md md:text-lg text-foreground/80 leading-relaxed">
                        {currentContent.bio}
                    </p>
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-primary">{currentContent.skillsTitle}</h3>
                        <div className="flex flex-wrap gap-2 md:gap-3">
                            {currentContent.skills.map((skill) => (
                                <Badge
                                    key={skill}
                                    variant='secondary'
                                    className="text-sm px-3 py-1.5 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </SectionWrapper>
    )
}

export default AboutMe