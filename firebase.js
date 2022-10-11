import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDUcXbLDXCBp3FArVlqzdAQZNyKwo4mH94",
    authDomain: "react-todo-app-ed6fc.firebaseapp.com",
    databaseURL: "https://react-todo-app-ed6fc-default-rtdb.firebaseio.com",
    projectId: "react-todo-app-ed6fc",
    storageBucket: "react-todo-app-ed6fc.appspot.com",
    messagingSenderId: "610325022127",
    appId: "1:610325022127:web:449d6144318543660d5b5a",
    measurementId: "G-N5FVC61C8D"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };