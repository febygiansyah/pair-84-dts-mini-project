// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "movie-app-fe80c.firebaseapp.com",
  projectId: "movie-app-fe80c",
  storageBucket: "movie-app-fe80c.appspot.com",
  messagingSenderId: "515036892392",
  appId: "1:515036892392:web:bc79e66997d4c357a3cd5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpReq = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(
      "User yang teregistrasi dan berhasil login adalah",
      response.user
    );
  } catch (err) {
    console.log(err);
    console.log("error code auth", err.code);
    console.log("error message auth", err.message);
    alert(
      err.message
        .replace(/-/g, " ")
        .replace(/Firebase:/g, "")
        .replace("auth/", "")
    );
  }
};

const signOutReq = async () => {
  try {
    await signOut(auth);
    console.log("berhasil log out");
  } catch (err) {
    console.log(err);
    console.log("gagal log out");
  }
};

export { auth, signUpReq, signOutReq };
