import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';



const HelpBot = () => {

    //only show chatbot on ipads and desktops
    const [largeScreen, setLargeScreen] = useState(window.innerWidth > 700);

    const showBot = () => {
        setLargeScreen(window.innerWidth > 700);
    };

    useEffect(() => {
        window.addEventListener("resize", showBot);
        return () => window.removeEventListener("resize", showBot);
    });

    const config = {
        width: "300px",
        height: "300px",
        floating: true,
        headerTitle: 'JW Music Store Chat'
    };

    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Sans Serif',
        headerBgColor: '#043352',
        headerFontColor: 'white',
        headerFontSize: '1.5rem',
        botBubbleColor: '#5a84cd',
        botFontColor: 'white',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    }

    const steps = [
        {
            id: '1',
            message: 'Welcome to JW Music Store!',
            trigger: '2',
        },
        {
            id: '2',
            delay: 1000,
            message: 'My name is JW Bot. How may I help you today?',
            end: true
        }
    ];
    return (
        <div className="help-bot">
            {
                largeScreen ? (
                    <ThemeProvider theme={theme}>
                        <ChatBot
                            steps={steps}
                            {...config}
                        />
                    </ThemeProvider>
                ) : (
                        <div></div>
                    )
            }
        </div>

    )
}
export default HelpBot