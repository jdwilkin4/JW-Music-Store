import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



const HelpBot = () => {
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Sans Serif',
        headerBgColor: '#043352',
        headerFontColor: 'white',
        headerFontSize: '2rem',
        botBubbleColor: '#5a84cd',
        botFontColor: 'white',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    }

    const steps = [
        {
            id: '1',
            message: 'Welcome to JW Music Store!',
            end: true,
        },
    ];
    return (
        <div className="help-bot">
            <ThemeProvider theme={theme}>
                <ChatBot steps={steps} />
            </ThemeProvider>
        </div>

    )
}
export default HelpBot