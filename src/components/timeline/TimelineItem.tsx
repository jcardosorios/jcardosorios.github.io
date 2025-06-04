import { Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import type { TimelineEvent as TimelineEventType } from '../../types'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { cn } from '../../lib/utils';

interface TimelineItemProps {
  event: TimelineEventType;
  isLast: boolean;
}

function TimelineItem({event, isLast} : TimelineItemProps) {
    const { language } = useLanguage();
    const Icon = event.icon || Star;
    return (
        <li className='mb-10 ms-6 relative'>
            <span className='absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -start-4 ring-4 ring-background  text-primary-foreground/'>
                <Icon className='h-4 w-4'/>
            </span>
            {!isLast && <div className="absolute w-px h-full bg-border -start-[0.85rem] top-8"></div>}
            <Card className='ml-4 shadow-md hover:shadow-lg transition-shadow duration-300 dark:hover:shadow-foreground/30'>
                <CardHeader className='pb-2'>
                    <div className='flex items-center justify-between'>
                        <CardTitle className='text-xl'>{event.title[language]}</CardTitle>
                        <time className='text-sm font-normal leading-none text-muted-foreground bg-muted px-2 py-1 rounded-md'>{event.date}</time>
                    </div>
                    <div className='flex items-center space-x-2 mt-1'>
                        {event.logoUrl && (
                            <div className={cn(
                                    "relative w-8 h-8 rounded-full overflow-hidden border border-border/30 flex-shrink-0", event.logoBgColor || 'bg-card')}>
                                <img 
                                    src={event.logoUrl} 
                                    alt={event.logoAltText ? event.logoAltText[language] : event.institution[language]} 
                                    className='p-0.5 object-contain w-full h-full'
                                    data-ai-hint="institution logo"
                                />
                            </div>
                        )}
                        <p>{event.institution[language]}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <p>{event.description[language]}</p>
                </CardContent>
            </Card>
        </li>
    )
}

export default TimelineItem