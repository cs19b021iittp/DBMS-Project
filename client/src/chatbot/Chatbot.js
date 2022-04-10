import React from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Montserrat',
  headerBgColor: '#edafb8',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#edafb8',
  botFontColor: '#fff',
  userBubbleColor: '#f7e1d7',
  userFontColor: '#000000',
}


  const Chatbot = (props) => {
    return (
        <ThemeProvider theme={theme}>
          <ChatBot 
          speechSynthesis={{ enable: true, lang: 'en' }}
          headerTitle="Chat with the Tsumani Deal Bot"
          recognitionEnable={true}
          floating = {true}
          steps = {[
            {
                id: '1',
                message: 'What is your name?',
                trigger: '2',
              },
              {
                id: '2',
                user: true,
                trigger: '3',
              },
              {
                id: '3',
                message: 'Hi {previousValue}, nice to meet you!',
                end: true,
              },
          ]}
        
          />
        </ThemeProvider> 
        
    );
  };

  export default Chatbot;