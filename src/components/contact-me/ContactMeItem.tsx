import { useLanguage } from '../../context/LanguageContext'
import type { ContactMeEvent as ContactMeEventType } from '../../types'
import { Button } from '../ui/Button'

interface ContactMeItemProps {
    event: ContactMeEventType
}


function ContactMeItem({event}: ContactMeItemProps) {
    const { language } = useLanguage()
    const Icon = event.icon
    return (
        <Button
            key={event.label[language]}
            asChild
            variant='outline'
            className="w-full h-14 text-base justify-start group hover:bg-accent/10 transition-colors duration-300"
        >
            <a href={event.href} target="_blank" rel="noopener noreferrer">
                <Icon  className='mr-4 h-6 w-6 text-primary group-hover:text-accent transition-colors'/>
                <span className='font-medium text-foreground group-hover:text-accent transition-colors'>{event.label[language]}</span>
                <span className='ml-2 text-muted-foreground group-hover:text-accent transition-colors'>{event.handle}</span>
            </a>
        </Button>
    )
}

export default ContactMeItem