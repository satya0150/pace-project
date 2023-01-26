
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF9sPo9Wqet-VJ5JtyzstW0xo7mKqvQ4Y",
  authDomain: "pace-auth-baca5.firebaseapp.com",
  projectId: "pace-auth-baca5",
  storageBucket: "pace-auth-baca5.appspot.com",
  messagingSenderId: "617115014020",
  appId: "1:617115014020:web:b6f84f918a5897966dc3d1",
  measurementId: "G-X35C900D1Y"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;