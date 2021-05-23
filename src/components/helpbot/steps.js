import { HSSHelpbotCard, GuildOmChatbotCard, CremonaUprightBassChatbotCard, SchecterGuitarChatbotCard } from './helpbot-exports';
import { SquierBulletTelecasterChatbotCard, SterlingRay4ChatbotCard } from './helpbot-exports';

const steps = [
    {
        id: 'intro',
        delay: 1800,
        message: 'Hi, my name is JW Bot! What\'s your name?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        validator: (value) => {
            if (value === '' || /[0-9!@#$%^&*<>?]/.test(value)) {
                return 'No name?'
            }
            return true
        },
        trigger: 'response'
    },
    {
        id: 'response',
        message: 'Hi, {previousValue}! How may I help you?',
        trigger: 'options'
    },
    {
        id: 'options',
        options: [
            { value: 1, label: 'Top products', trigger: 'products' },
            { value: 2, label: 'FAQ', trigger: '' },
            { value: 3, label: 'Store hours', trigger: '' },
            { value: 4, label: 'Exit chat', trigger: 'exit' }
        ]
    },
    //product categories
    {
        id: 'products',
        message: 'Pick a category',
        trigger: 'categories'
    },
    {
        id: 'categories',
        options: [
            { value: 1, label: 'Guitars', trigger: 'guitars' },
            { value: 2, label: 'Basses', trigger: 'basses' },
            { value: 3, label: 'Amps', trigger: '' },
            { value: 4, label: 'Drums', trigger: '' },
            { value: 5, label: 'Keyboards', trigger: '' },
            { value: 6, label: 'Other', trigger: '' }
        ]
    },
    {
        id: 'guitars',
        options: [
            { value: 1, label: 'Fender Stratocaster HSS', trigger: 'HSS' },
            { value: 2, label: 'Guild OM-240CE', trigger: 'Guild' },
            { value: 3, label: 'Squier Bullet Telecaster', trigger: 'Squier' }
        ]
    },
    {
        id: 'basses',
        options: [
            { value: 1, label: 'Cremona Upright', trigger: 'Cremona' },
            { value: 2, label: 'Schecter Guitar', trigger: 'Schecter' },
            { value: 3, label: 'Sterling Ray4', trigger: 'Sterling' }
        ]
    },
    //guitar options
    {
        id: 'HSS',
        component: <HSSHelpbotCard />,
        trigger: 'more'
    },
    {
        id: 'Guild',
        component: <GuildOmChatbotCard />,
        trigger: 'more'
    },
    {
        id: 'Squier',
        component: <SquierBulletTelecasterChatbotCard />,
        trigger: 'more'
    },
    //bass options
    {
        id: 'Cremona',
        component: <CremonaUprightBassChatbotCard />,
        trigger: 'more'
    },
    {
        id: 'Schecter',
        component: <SchecterGuitarChatbotCard />,
        trigger: 'more'
    },
    {
        id: 'Sterling',
        component: <SterlingRay4ChatbotCard />,
        trigger: 'more'
    },
    {
        id: 'more',
        message: 'What else would you like to do?',
        trigger: 'options'
    },
    {
        id: 'exit',
        message: 'Glad to help. Goodbye!',
        end: true
    }



];
export default steps