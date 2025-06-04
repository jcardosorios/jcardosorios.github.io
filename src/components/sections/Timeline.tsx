import { Briefcase, GraduationCap, Award } from 'lucide-react'
import type { TimelineEvent as TimelineEventType } from '../../types'
import { SectionWrapper } from './SectionWrapper';
import { useLanguage } from '../../context/LanguageContext';
import TimelineItem from '../timeline/TimelineItem';

const timelineData: TimelineEventType[] = [
  {
    id: 'cert-3',
    date: '06/2024 - 11/2024',
    title: {
        en: 'Programa Talento Digital: Data Science Certification',
        es: 'Programa Talento Digital: Certificación en Ciencia de Datos',
    },
    institution: {
        en: 'IT Academy Kibernum',
        es: 'Academia TI Kibernum',
    },
    description: {
      en: '168-hours specialization course focused on Data Science.',
      es: 'Curso de 168 horas de especialidad enfocado en Data Science.',
    },
    icon: Award,
  },
  {
    id: 'train-1',
    date: '02/2024 - 07/2024',
    title: {
      en: 'Data Science Bootcamp',
      es: 'Bootcamp en Data Science',
    },
    institution: {
      en: 'Tripleten',
      es: 'Tripleten',
    },
    description: {
      en: 'Intensive training on data science fundamentals, algorithms, and machine learning using Python.',
      es: 'Curso intensivo de fundamentos de ciencias de datos, algoritmos y aprendizaje automático utilizando Python.',
    },
    icon: Briefcase,
  },
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
  },
  {
    id: 'cert-2',
    date: '08/2022',
    title: {
      en: 'PCAP - Programming Essentials in Python',
      es: 'PCAP - Programming Essentials in Python',
    },
    institution: {
      en: 'CISCO Networking Academy',
      es: 'CISCO Networking Academy',
    },
    description: {
      en: 'Intermediate Python programming course focused on object-oriented programming, exception handling, advanced data structures, and modules. Prepares for the PCAP (Certified Associate in Python Programming) certification.',
      es: 'Curso intermedio de programación en Python que profundiza en programación orientada a objetos, manejo de excepciones, estructuras de datos avanzadas y módulos. Prepara para la certificación PCAP (Certified Associate in Python Programming).',
    },
    icon: GraduationCap,
  },
  {
    id: 'cert-1',
    date: '07/2022',
    title: {
      en: 'Python Essentials 1',
      es: 'Python Essentials 1',
    },
    institution: {
      en: 'CISCO Networking Academy',
      es: 'CISCO Networking Academy',
    },
    description: {
      en: 'Introductory course covering the fundamentals of Python programming, including data types, control structures, functions, and basic object-oriented concepts. Focused on problem-solving and algorithmic thinking.',
      es: 'Curso introductorio que abarca los fundamentos de la programación en Python, incluyendo tipos de datos, estructuras de control, funciones y conceptos básicos de programación orientada a objetos. Enfocado en la resolución de problemas y el pensamiento algorítmico.',
    },
    icon: Award,
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
  },
];

const content = {
  sectionTitle: {
    en: "My Journey",
    es: "Mi Trayectoria",
  }
};



function Timeline() {

    const { language } = useLanguage();
    const currentContent = {
        sectionTitle: content.sectionTitle[language],
    };
  return (
    <SectionWrapper id='timeline' title={currentContent.sectionTitle}>
        <ol>
            {timelineData.map((event, index) => (
                <TimelineItem key={event.id} event={event} isLast={index === timelineData.length - 1}></TimelineItem>
            ))}
        </ol>
    </SectionWrapper>
  )
}

export default Timeline