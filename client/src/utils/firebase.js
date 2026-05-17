
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-a657a.firebaseapp.com",
  projectId: "authexamnotes-a657a",
  storageBucket: "authexamnotes-a657a.firebasestorage.app",
  messagingSenderId: "410002041500",
  appId: "1:410002041500:web:8d8eceb271e8f015b31b59"
};


const app = initializeApp(firebaseConfig);

const auth =getAuth(app)


const provider =new GoogleAuthProvider()

export {auth, provider }
