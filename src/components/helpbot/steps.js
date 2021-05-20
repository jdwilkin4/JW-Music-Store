const productCategories = [
    ''
]



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
            //{ value: 2, label: 'FAQ', trigger: '6' },
            //{ value: 3, label: 'Store hours', trigger: '7' },
        ],
    },
    {
        id: '3',
        message: 'What instrument do you play?',
        trigger: '4'

    },
    {
        id: '4',
        user: true,
        trigger: '5'
    }, {
        id: '5',
        message: 'Here is what I would suggest',
        end: true
    }
];
export default steps