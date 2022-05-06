
import React, { Component } from 'react';
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { searchFunction } from "../functionality/search.js";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Montserrat",
  headerBgColor: "#edafb8",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#edafb8",
  botFontColor: "#fff",
  userBubbleColor: "#f7e1d7",
  userFontColor: "#000000",
};

class Chatbot extends Component {

  //const [searchValue, setSearchText];

  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  async handleEnd({ steps, values }) {
    console.log(steps);
    let searchValue = steps[4].value;
    console.log(searchValue);

    toast.info("Searching...", {
      position: toast.POSITION.TOP_RIGHT,
    });
    
    sessionStorage.setItem("search_query", searchValue);
    
    await searchFunction(
      searchValue,
      JSON.parse(localStorage.getItem("categories")),
      JSON.parse(localStorage.getItem("brands")),
      parseInt(localStorage.getItem("price")),
      localStorage.getItem("sortPrice")
    );
    window.location.href = "/buyer-home";
  }
    //alert(`Chat handleEnd callback! Number: ${values[0]}`);
  

  render() {

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        recognitionEnable={true}
        speechSynthesis={{ enable: true, lang: "en" }}
        headerTitle="Chat with the Tsumani Deal Bot"
        floating={true}
        handleEnd={this.handleEnd}

        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you! Please enter any search queries you have!",
            trigger: "4",
          },
          {
            id: "4",
            user: true,
            trigger: "5",
          },
          {
            id: '5',
            message: ({ previousValue, steps }) => 'Searching for results for "{previousValue}"',
            validator: (value) => {
              if (value === "") {
                return 'Please enter a search query';
              }
              else
              {
                alert("Search query entered" + value);
                return true;
              }
            },
            trigger: ({ value, steps }) => '6',
            end: true,
          },
          {
            id: "6",
            message: "Please enter any search queries you have!",
            trigger: "4",
          },

        ]}
      />
    </ThemeProvider>
  );
}
}

export default Chatbot;
