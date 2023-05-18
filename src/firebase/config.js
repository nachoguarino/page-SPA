// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3QUdkJb5laf4c7GBV2lbLwXSp2khiHsA",
    authDomain: "lowkeyclub-spa.firebaseapp.com",
    projectId: "lowkeyclub-spa",
    storageBucket: "lowkeyclub-spa.appspot.com",
    messagingSenderId: "112733180060",
    appId: "1:112733180060:web:8704ef457f8b2952281d59",
    measurementId: "G-TP3W1RMNF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)