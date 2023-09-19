/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC3DEt-M0uachYZ_nYYKEwj9YYaSMVKAwA",
    authDomain: "helpdesk-b7437.firebaseapp.com",
    projectId: "helpdesk-b7437",
    storageBucket: "helpdesk-b7437.appspot.com",
    messagingSenderId: "428453817030",
    appId: "1:428453817030:web:e1e4faca4b91d9d18fc5c7",
    measurementId: "G-JN5Y5T3PB3"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const storage = getStorage(FIREBASE_APP)
