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
      en: 'I was part of the development team responsible for the redesign and implementation of a new version of the municipal management system, using Svelte for the frontend, Node.js with Express for the backend, and PostgreSQL as the database. At the same time, I provided support to the help desk team by resolving tickets and fixing bugs in the production version of the system, developed in PHP and PostgreSQL, ensuring its continuous operation for various municipalities.',
      es: 'Formé parte del equipo de desarrollo encargado del rediseño e implementación de una nueva versión del sistema de gestión municipal, utilizando Svelte para el frontend, Node.js con Express en el backend y PostgreSQL como base de datos. Al mismo tiempo, brindé soporte al área de mesa de ayuda, resolviendo tickets y corrigiendo errores en la versión en producción del sistema, desarrollada en PHP y PostgreSQL, asegurando su funcionamiento continuo para diversos municipios.',
    },
    responsibilities: {
      en: ['Full-stack development with Svelte, Node.js, and PostgreSQL.', 'Agile methodology', 'Code reviews and team collaboration.'],
      es: ['Desarrollo full-stack con Svelte, Node.js y PostgreSQL.', 'Metodología Agile ', 'Revisiones de código y colaboración en equipo.'],
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
      en: 'I worked as a Process Engineer in the mechanical maintenance area of the brewery production plant, where I implemented and optimized the current preventive maintenance plan. I led initiatives focused on continuous improvement and safety, managed the inventory of critical and non-critical spare parts, and supervised maintenance tasks performed by both in-house and external personnel, ensuring proper completion. Additionally, I was in charge of the team responsible for applying the 5S methodology in the production area.',
      es: 'Me desempeñé como Ingeniero de Procesos en el área de mantenimiento mecánico en la planta de elaboración cervecera, donde implementé y optimicé el plan de mantenimiento preventivo actualmente vigente. Lideré iniciativas de mejora continua y seguridad, gestioné el stock de repuestos críticos y no críticos, y supervisé las tareas de mantenimiento realizadas tanto por personal interno como externo, validando su correcta ejecución. Además, estuve a cargo del equipo responsable de aplicar la metodología 5S en el área de producción.',
    },
    responsibilities: {
      en: ['Active participation in the design and implementation of technical solutions.', 'Identification and proposal of improvements to existing processes and systems.', 'Coordination and follow-up of tasks within a multidisciplinary team.', 'Clear documentation of procedures, solutions, and applied changes.'],
      es: ['Participación activa en el diseño e implementación de soluciones técnicas.', 'Identificación y propuesta de mejoras en procesos y sistemas existentes.', 'Coordinación y seguimiento de tareas en equipo multidisciplinario.', 'Documentación clara de procedimientos, soluciones y cambios aplicados.'],
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