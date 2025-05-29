import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { Project as WebProject } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { SectionWrapper } from './SectionWrapper';
import pgestudio from '../../assets/projects/pgestudio.png';
import uptask from '../../assets/projects/uptask.png'

const projectsData: WebProject[] = [
  {
    id: 'web-1',
    title: {
      en: 'PG Estudio Mural Catalog',
      es: 'Catálogo de Murales PG Estudio',
    },
    description: {
      en: 'Static website designed to showcase the product catalog of a wallpaper store.',
      es: 'Sitio web estático diseñado para mostrar el catálogo de productos de una tienda especializada en papeles murales.',
    },
    imageUrl: pgestudio,
    imageHint: 'online catalog',
    liveDemoUrl: 'https://pg-estudio.vercel.app/',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js'],
  },
  {
    id: 'uptask',
    title: {
      en: 'Task Management App "UpTask"',
      es: 'App de Gestión de Tareas "UpTask"',
    },
    description: {
      en: 'A collaborative task management application allowing users to create, assign, and track tasks. Features real-time updates and a Kanban board view.',
      es: 'Una aplicación colaborativa de gestión de tareas que permite a los usuarios crear, asignar y seguir tareas. Cuenta con actualizaciones en tiempo real y una vista de tablero Kanban.',
    },
    imageUrl: uptask,
    imageHint: 'task board',
    liveDemoUrl: 'https://uptask-rosy.vercel.app/',
    repoUrl: 'https://github.com/jcardosorios/11_uptask',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js' ,'Express.js','MongoDB', 'Nodemailer'],
  },
];

const content = {
  sectionTitle: {
    en: "Web Development Projects",
    es: "Proyectos de Desarrollo Web",
  },
  techUsed: {
    en: "Technologies Used:",
    es: "Tecnologías Utilizadas:",
  },
  liveDemo: {
    en: "Live Demo",
    es: "Demo en Vivo",
  },
  repository: {
    en: "Repository",
    es: "Repositorio",
  },
};

function WebDev() {
    const { language } = useLanguage();
    const currentContent = {
        sectionTitle: content.sectionTitle[language],
        techUsed: content.techUsed[language],
        liveDemo: content.liveDemo[language],
        repository: content.repository[language],
    };
  return (
    <SectionWrapper id='web-dev' title={currentContent.sectionTitle}>
        <div className='grid md:grid-cols-2 gap-8'>
            {projectsData.map((project) => (
                <Card key={project.id} className='flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <CardHeader>
                        <div className='aspect-video relative mb-4 rounded-md overflow-hidden'>
                            <img 
                                src={project.imageUrl} 
                                alt={project.title[language]} 
                                className='absolute inset-0 w-full h-full object-cover'
                            />
                        </div>
                        <CardTitle className='text-2xl'>{project.title[language]}</CardTitle>
                        <CardDescription>{project.description[language]}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex-grow'>
                        <h4 className='font-semibold mb-2 text-sm text-muted-foreground'>{currentContent.techUsed}</h4>
                        <div className='flex flex-wrap gap-2'>
                            {project.tags?.map((tag) => (
                                <Badge key={tag} variant='secondary'>{tag}</Badge>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter className='flex justify-end gap-2 p-4 bg-muted/50'>
                        {project.liveDemoUrl && (
                            <Button asChild variant='outline'>
                                <a href={project.liveDemoUrl} target='_blank' rel='noopener noreferrer'>
                                    <ExternalLink className='mr-2 h-4 w-4'/> {currentContent.liveDemo}
                                </a>
                            </Button>
                        )}
                        {project.repoUrl && (
                            <Button asChild>
                                <a href={project.repoUrl} target='_blank' rel='noopener noreferrer'>
                                    <ExternalLink className='mr-2 h-4 w-4'/> {currentContent.liveDemo}
                                </a>
                            </Button>
                        )}
                    </CardFooter>
                </Card>
            ))}
        </div>
    </SectionWrapper>
  )
}

export default WebDev