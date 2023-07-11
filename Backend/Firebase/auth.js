// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBzQXbAY3_i2WVn2NoGiPZf_wnRFNYqxJA",
	authDomain: "saak-15636.firebaseapp.com",
	projectId: "saak-15636",
	storageBucket: "saak-15636.appspot.com",
	messagingSenderId: "421186889665",
	appId: "1:421186889665:web:73fb7721ddf8b6c271b140",
	measurementId: "G-G2GSPHLBQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);
