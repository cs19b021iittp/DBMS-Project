// ActionProvider starter code
class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }
}

export default ActionProvider;

// class ActionProvider {
//     constructor(createChatBotMessage, setStateFunc) {
//       this.createChatBotMessage = createChatBotMessage;
//       this.setState = setStateFunc;
//     }
  
//     handleSingleOption = (message, widget) => {
//       const text = this.createChatBotMessage(message, {
//         widget: widget,
//       });
//       this.addMessageToState(text);
//     };
  
//     endConversation = (message, widget) => {
//       const text = this.createChatBotMessage("You can always start over!", {
//         widget: "options",
//       });
//       this.addMessageToState(text);
//     };
  
  
//     handleFeedback = () => {
//       const message = this.createChatBotMessage(
//         "Please go to the following url and type in your issues",
//         {
//           widget: "feedback",
//         }
//       );
  
//       this.addMessageToState(message);
//     };

//     handleGettingStarted = () => {
//         const message = this.createChatBotMessage(
//           "Please go to the following illustrative tutorial that walks you through how to make the best of My Margdarshaka",
//           {
//             widget: "gettingStarted",
//           }
//         );
    
//         this.addMessageToState(message);
//       };
  
//     handleFAQ = () => {
//       const message = this.createChatBotMessage(
//         "Here are a few commonly asked questions",
//         {
//           widget: "commonfaq",
//         }
//       );
  
//       this.addMessageToState(message);
//     };
  
//     addMessageToState = (message) => {
//       this.setState((prevState) => ({
//         ...prevState,
//         messages: [...prevState.messages, message],
//       }));
//     };
//   }
  
//   export default ActionProvider;
  