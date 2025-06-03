import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { WorkExperienceEvent as WorkExperienceEventType } from '../../types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface WorkExperienceProps {
    event: WorkExperienceEventType
    isLast: boolean
}

const content = {
  responsibilitiesTitle: {
    en: "Key Responsibilities:",
    es: "Responsabilidades Clave:",
  }
};

function WorkExperienceItem({event, isLast} : WorkExperienceProps) {
    const { language } = useLanguage()
    const Icon = event.icon ||  Star
  return (
    <li className='mb-10 ms-6 relative'>
        <span className='absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-4 ring-background text-primary-foreground'>
            <Icon className='w-4 h-4' />
        </span>
        {!isLast && <div className='absolute w-px h-full bg-border -starts-[0.85rem] top-8'></div>}
        <Card className='ml-4 shandow-md hover:shadow-lg transition-all duration-300  dark:hover:shadow-foreground/30'>
            <CardHeader className='pb-2'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
                    <CardTitle className='text-xl mb-1 sm:mb-0'>{event.role[language]}</CardTitle>
                    <time className='text-sm font-normal leading-none text-muted-foreground bg-muted  px-2 py-1 rounded-md self-start sm:self-center'>{event.date}</time>
                </div>
                <p className='text-md font-semibold text-accent'>{event.company[language]}</p>
            </CardHeader>
            <CardContent>
                <p className='text-base font-normal text-foreground/80 mb-3'>{event.description[language]}</p>
                {event.responsibilities && event.responsibilities[language].length > 0 &&(
                    <div>
                        <h4 className='text-sm font-semibold text-muted-foreground mb-1.5'>{content.responsibilitiesTitle[language]}</h4>
                        <ul className='list-disc list-inside space-y-1 text-sm text-foreground/80'>
                        {event.responsibilities[language].map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    </li>
  )
}

export default WorkExperienceItem