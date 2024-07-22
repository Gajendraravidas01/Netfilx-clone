import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDA1qtqBYxAu5xS_II009FBFe49nj80f-8",
  authDomain: "netfilx-clone-f1d39.firebaseapp.com",
  projectId: "netfilx-clone-f1d39",
  storageBucket: "netfilx-clone-f1d39.appspot.com",
  messagingSenderId: "137046322298",
  appId: "1:137046322298:web:f197973fda1353cb5fdfc3",
  measurementId: "G-F2Z2DHTP1D"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
