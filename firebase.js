import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGtnhSnCooN_G0dSQta-6PIEu-pxswaJw",
  authDomain: "exoterra-8cd27.firebaseapp.com",
  projectId: "exoterra-8cd27",
  storageBucket: "exoterra-8cd27.appspot.com",
  messagingSenderId: "501782585231",
  appId: "1:501782585231:web:5e9f894e4e4646d71475fa",
  measurementId: "G-7KVZLE0SMK",
};

//   const app = !getApps().length ? initializeApp(firebaseConfig) :
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
