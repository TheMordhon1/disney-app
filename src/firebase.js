import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCk_Tw3qjScg8so3uRL8Mf13R7KlQL5diM",
  authDomain: "disney-plus-5fe62.firebaseapp.com",
  projectId: "disney-plus-5fe62",
  storageBucket: "disney-plus-5fe62.appspot.com",
  messagingSenderId: "35952236968",
  appId: "1:35952236968:web:b70fe74ac076d03399259d",
  measurementId: "G-FCE7H3B6NK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
