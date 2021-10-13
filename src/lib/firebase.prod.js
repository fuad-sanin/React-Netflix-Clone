import { initializeApp } from "firebase/app"
import "firebase/firestore";
import "firebase/auth";


const Config = {
  apiKey: "AIzaSyBED7XYlrAOEvpf9jXN4EpzQzz_3IKVhRo",
  authDomain: "netflix-clone-e8b56.firebaseapp.com",
  projectId: "netflix-clone-e8b56",
  storageBucket: "netflix-clone-e8b56.appspot.com",
  messagingSenderId: "787325316192",
  appId: "1:787325316192:web:4f91c56d1227836ef8e705",
  measurementId: "G-ZDVRWS35S7",
};

const firebase = initializeApp(Config)
export { firebase };
