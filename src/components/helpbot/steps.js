const steps = [
    {
        id: '1',
        message: 'Hi, my name is JW Bot! What is your name?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3'
    },
    {
        id: '3',
        message: 'Hi {previousValue}! How may I help you today?',
        end: true
    }
];
export default steps