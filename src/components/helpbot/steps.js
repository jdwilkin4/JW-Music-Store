import { HSSHelpbotCard } from './helpbot-exports';

const steps = [
    {
        id: 'intro',
        delay: 2200,
        message: 'Hi, my name is JW Bot! What\'s your name?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        validator: (value) => {
            if (value === '' || /[0-9!@#$%^&*<>?]/.test(value)) {
                return 'Won\'t you provide me with a name?'
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
    {
        id: 'products',
        message: 'Pick a category',
        trigger: 'categories'
    },
    {
        id: 'categories',
        options: [
            { value: 1, label: 'Guitars', trigger: 'guitars' },
            { value: 2, label: 'Basses', trigger: '' },
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
            //{}
        ]
    },
    {
        id: 'HSS',
        component: <HSSHelpbotCard />,
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