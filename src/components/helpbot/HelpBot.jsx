import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Config, theme, steps } from '../component-exports';



const HelpBot = () => {
    //only show chatbot on ipads and desktops
    const [largeScreen, setLargeScreen] = useState(window.innerWidth > 700);

    const showBot = () => setLargeScreen(window.innerWidth > 700);

    useEffect(() => {
        window.addEventListener("resize", showBot);
        return () => window.removeEventListener("resize", showBot);
    });


    return (
        <div className="help-bot">
            {
                largeScreen ? (
                    <ThemeProvider theme={theme}>
                        <ChatBot
                            steps={steps}
                            {...Config}
                        />
                    </ThemeProvider>
                ) : (
                        <div />
                    )
            }
        </div>

    )
}
export default HelpBot