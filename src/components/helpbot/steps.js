import { HSSHelpbotCard, GuildOmChatbotCard, CremonaUprightBassChatbotCard, SchecterGuitarChatbotCard } from './helpbot-exports';
import { SquierBulletTelecasterChatbotCard, SterlingRay4ChatbotCard, PedaltrainNanoChatbotCard } from './helpbot-exports';
import { FenderRumbleChatbotCard, LRBaggsVenueChatbotCard, BossDrChatbotCard, RogueDrumsetChatbotCard } from './helpbot-exports';
import { AlesisCrimsonChatobotCard, WilliamsSymphonyChatbotCard, YamahaP45ChatbotCard, SuzukiCtpChatbotCard } from './helpbot-exports';

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
            { value: 3, label: 'Amps', trigger: 'amps' },
            { value: 4, label: 'Drums', trigger: 'drums' },
            { value: 5, label: 'Keyboards', trigger: 'keyboards' }
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
    {
        id: 'amps',
        options: [
            { value: 1, label: 'Fender Rumble', trigger: 'Rumble' },
            { value: 2, label: 'LR Baggs Venue', trigger: 'LR' },
            { value: 3, label: 'Pedaltrain', trigger: 'Pedaltrain' }
        ]
    },
    {
        id: 'drums',
        options: [
            { value: 1, label: 'Boss DR machine', trigger: 'BossDR' },
            { value: 2, label: 'Rogue 5 Piece Drum set', trigger: 'Rogue' },
            { value: 3, label: 'Alesis Crimson', trigger: 'Alesis' }
        ]
    },
    {
        id: 'keyboards',
        options: [
            { value: 1, label: 'Williams Symphony Piano', trigger: 'williamsSymphony' },
            { value: 2, label: 'Yamaha P 45', trigger: 'yamahaPiano' },
            { value: 3, label: 'Suzuki CTP', trigger: 'suzukiCTP' },
        ]
    },
    //guitar options
    { id: 'HSS', component: <HSSHelpbotCard />, trigger: 'more' },
    { id: 'Guild', component: <GuildOmChatbotCard />, trigger: 'more' },
    { id: 'Squier', component: <SquierBulletTelecasterChatbotCard />, trigger: 'more' },

    //bass options
    { id: 'Cremona', component: <CremonaUprightBassChatbotCard />, trigger: 'more' },
    { id: 'Schecter', component: <SchecterGuitarChatbotCard />, trigger: 'more' },
    { id: 'Sterling', component: <SterlingRay4ChatbotCard />, trigger: 'more' },

    //amps options
    { id: 'Pedaltrain', component: <PedaltrainNanoChatbotCard />, trigger: 'more' },
    { id: 'Rumble', component: <FenderRumbleChatbotCard />, trigger: 'more' },
    { id: 'LR', component: <LRBaggsVenueChatbotCard />, trigger: 'more' },

    //Drum options
    { id: 'BossDR', component: <BossDrChatbotCard />, trigger: 'more' },
    { id: 'Rogue', component: <RogueDrumsetChatbotCard />, trigger: 'more' },
    { id: 'Alesis', component: <AlesisCrimsonChatobotCard />, trigger: 'more' },

    //Keyboard options
    { id: 'williamsSymphony', component: <WilliamsSymphonyChatbotCard />, trigger: 'more' },
    { id: 'yamahaPiano', component: <YamahaP45ChatbotCard />, trigger: 'more' },
    { id: 'suzukiCTP', component: <SuzukiCtpChatbotCard />, trigger: 'more' },


    { id: 'more', message: 'What else would you like to do?', trigger: 'options' },
    { id: 'exit', message: 'Glad to help. Goodbye!', end: true }


];
export default steps