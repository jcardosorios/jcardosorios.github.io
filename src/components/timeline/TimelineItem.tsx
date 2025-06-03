import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { TimelineEvent as TimelineEventType } from '../../types'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface TimelineItemProps {
  event: TimelineEventType;
  isLast: boolean;
}

function TimelineItem({event, isLast} : TimelineItemProps) {
    const { language } = useLanguage();
    const Icon = event.icon || Star;
    // TODO shadow en modo oscuro
    return (
        <li className='mb-10 ms-6 relative'>
            <span className='absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-4 ring-background  text-primary-foreground'>
                <Icon className='h-4 w-4'/>
            </span>
            {!isLast && <div className="absolute w-px h-full bg-border -start-[0.85rem] top-8"></div>}
            <Card className='ml-4 shadow-md hover:shadow-lg transition-shadow duration-300 dark:hover:shadow-foreground'>
                <CardHeader className='pb-2'>
                    <div className='flex items-center justify-between'>
                        <CardTitle className='text-xl'>{event.title[language]}</CardTitle>
                        <time className='text-sm font-normal leading-none text-muted-foreground bg-muted px-2 py-1 rounded-md'>{event.date}</time>
                    </div>
                    <p>{event.institution[language]}</p>
                </CardHeader>
                <CardContent>
                    <p>{event.description[language]}</p>
                </CardContent>
            </Card>
        </li>
    )
}

export default TimelineItem