import { GraduationCap } from 'lucide-react'
import type { TimelineEvent as TimelineEventType } from '../../types'
import { SectionWrapper } from './SectionWrapper';
import { useLanguage } from '../../context/LanguageContext';
import TimelineItem from '../timeline/TimelineItem';

const timelineData: TimelineEventType[] = [
  {
    id: 'edu-2',
    date: '2022 - 2023',
    title: {
      en: 'Technician in Programming Analyst',
      es: 'TNS Analista Programador',
    },
    institution: {
      en: 'Virginio Gómez Professional Institute',
      es: 'IP Virginio Gomez',
    },
    description: {
      en: 'Program focused on software development, systems analysis, and database management, training professionals to create and implement technological solutions.',
      es: 'Carrera orientada al desarrollo de software, análisis de sistemas y gestión de bases de datos, formando profesionales capaces de crear e implementar soluciones tecnológicas.',
    },
    icon: GraduationCap,
    logoUrl:'https://upload.wikimedia.org/wikipedia/commons/d/d0/Escudo_Instituto_Profesional_Virginio_G%C3%B3mez_UdeC.png',
    logoBgColor: 'bg-white'
  },
  {
    id: 'edu-1',
    date: '2008 - 2014',
    title: {
      en: 'Mechanical Engineer',
      es: 'Ingeniero Civil Mecánico',
    },
    institution: {
      en: 'Universidad de Concepcion',
      es: 'Universidad de Concepción, Chile',
    },
    description: {
      en: 'A program focused on the design, analysis, and management of complex mechanical systems across various industries. Combines fundamentals of physics, mathematics, thermodynamics, and applied mechanics.',
      es: 'Carrera orientada al diseño, análisis y gestión de sistemas mecánicos complejos en diversas industrias. Combina fundamentos en física, matemáticas, termodinámica y mecánica aplicada.',
    },
    icon: GraduationCap,
    logoUrl:'https://upload.wikimedia.org/wikipedia/commons/3/3f/Escudo_udec.gif',
    logoBgColor: 'bg-white',

  },
];

const content = {
  sectionTitle: {
    en: "My Professional Journey",
    es: "Mi Trayectoria Profesional",
  }
};



function Timeline() {

    const { language } = useLanguage();
    const currentContent = {
        sectionTitle: content.sectionTitle[language],
    };
  return (
    <SectionWrapper id='timeline' title={currentContent.sectionTitle}>
        <ol className="relative border-s-0 border-transparent">
            {timelineData.map((event, index) => (
                <TimelineItem key={event.id} event={event} isLast={index === timelineData.length - 1}></TimelineItem>
            ))}
        </ol>
    </SectionWrapper>
  )
}

export default Timeline