// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCcdjD7h_uRFlhGvuBIGgblqVS1ojJxvcM",
    authDomain: "media-application-e7c77.firebaseapp.com",
    projectId: "media-application-e7c77",
    storageBucket: "media-application-e7c77.appspot.com",
    messagingSenderId: "531979120001",
    appId: "1:531979120001:web:e3283b6a4100da03324c80",
    measurementId: "G-TC40QLE17R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;