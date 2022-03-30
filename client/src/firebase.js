import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAU7Xjdx0Wr4rdExRosPStb3wTAFA9aFvo",
  authDomain: "tsunamideal.firebaseapp.com",
  projectId: "tsunamideal",
  storageBucket: "tsunamideal.appspot.com",
  messagingSenderId: "479577293965",
  appId: "1:479577293965:web:2dfd97b9b5b847c4740ec4",
  measurementId: "G-QXB2DX4KW3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// const analytics = getAnalytics(app);
