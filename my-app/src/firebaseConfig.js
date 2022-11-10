import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAXTXJxQ0gnrTkDCz6pEGSC_QggzgRamro",
  authDomain: "bandido-5f097.firebaseapp.com",
  projectId: "bandido-5f097",
  storageBucket: "bandido-5f097.appspot.com",
  messagingSenderId: "461255155090",
  appId: "1:461255155090:web:d1039523143da0e289b54b",
  measurementId: "G-F7TJSEG5HP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
