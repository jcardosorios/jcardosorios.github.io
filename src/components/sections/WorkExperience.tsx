import { Briefcase } from 'lucide-react';
import type { WorkExperienceEvent as WorkExperienceEventType } from '../../types';
import { SectionWrapper } from './SectionWrapper';
import { useLanguage } from '../../context/LanguageContext';
import WorkExperienceItem from '../work-experience/WorkExperienceItem';

const workExperienceData: WorkExperienceEventType[] = [
  {
    id: 'work-1',
    date: '01/2023 - 03/2025',
    role: {
      en: 'Fullstack Developer',
      es: 'Desarrollador Fullstack',
    },
    company: {
      en: 'Crecic S.A. - Concepcion',
      es: 'Crecic S.A. - Concepción',
    },
    description: {
      en: 'Led development of key features for a major e-commerce platform, mentored junior developers, and improved application performance by 20%.',
      es: 'Lideré el desarrollo de características clave para una importante plataforma de comercio electrónico, capacité a desarrolladores junior y mejoré el rendimiento de la aplicación en un 20%.',
    },
    responsibilities: {
      en: ['Full-stack development with React, Node.js, and PostgreSQL.', 'Agile methodology and CI/CD practices.', 'Code reviews and team collaboration.'],
      es: ['Desarrollo full-stack con React, Node.js y PostgreSQL.', 'Metodología Agile y prácticas de CI/CD.', 'Revisiones de código y colaboración en equipo.'],
    },
    icon: Briefcase,
  },
  {
    id: 'work-2',
    date: '04/2016 - 01/2018',
    role: {
      en: 'Process Engineer',
      es: 'Ingeniero de Procesos',
    },
    company: {
      en: 'CCU Chile Brewery Ltd., Temuco',
      es: 'Cervecera CCU Chile Ltda, Temuco',
    },
    description: {
      en: 'Performed data analysis, created dashboards, and provided actionable insights for marketing campaigns. Developed predictive models for customer behavior.',
      es: 'Realicé análisis de datos, creé paneles de control y proporcioné información procesable para campañas de marketing. Desarrollé modelos predictivos para el comportamiento del cliente.',
    },
    responsibilities: {
        en: ['Data cleaning and preprocessing.', 'Statistical analysis and A/B testing.', 'Report generation and presentation.'],
        es: ['Limpieza y preprocesamiento de datos.', 'Análisis estadístico y pruebas A/B.', 'Generación de informes y presentación.'],
    },
    icon: Briefcase,
  },
];

const content = {
  sectionTitle: {
    en: "Work Experience",
    es: "Experiencia Laboral",
  },
};

function WorkExperience() {
    const { language } = useLanguage()
    const currentContent = {
        sectionTitle: content.sectionTitle[language]
    }
  return (
    <SectionWrapper id='work-experience' title={currentContent.sectionTitle}>
        <ol className='relative border-s-0 border-transparent'>
            {workExperienceData.map((event, index) => (
                <WorkExperienceItem key={event.id} event={event} isLast={index === workExperienceData.length - 1} />
            ))}
        </ol>
    </SectionWrapper>
  )
}

export default WorkExperience