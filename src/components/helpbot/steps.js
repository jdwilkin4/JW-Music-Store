import StratocasterHSSCard from '../guitar-product-cards/Stratocaster-HSS-card'

const steps = [
    {
        id: '1',
        delay: 1500,
        message: 'Hi, my name is JW Bot! How may I help you today?',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 1, label: 'Product recommendations', trigger: '3' },
            //{ value: 2, label: 'FAQ', trigger: '' },
            //{ value: 3, label: 'Store hours', trigger: '' },
        ]
    },

    {
        id: '3',
        message: 'Pick a category',
        trigger: '4'
    },
    {
        id: '4',
        options: [
            { value: 1, label: 'Guitars', trigger: '5' },
            //{value:2, label:'Basses', trigger:''}
        ]
    },
    {
        id: '5',
        message: 'Here are the top guitar products.',
        trigger: '6'
    },
    {
        id: '6',
        options: [
            { value: 1, label: 'Fender Stratocaster HSS', trigger: '7' },
            //{}
        ]
    },
    {
        id: '7',
        component: (<StratocasterHSSCard />),
        asMessage: true,

    }


];
export default steps