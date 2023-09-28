import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCja1Nim-jdHu7XzQNmktuuJN1dv4egQZQ",
  authDomain: "login-app-a7356.firebaseapp.com",
  projectId: "login-app-a7356",
  storageBucket: "login-app-a7356.appspot.com",
  messagingSenderId: "1:688383513650:web:5cbdfd92e60214539c582b",
  appId: "G-9L9GJ3Z4XM",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export const signInWithProvider = (provider, setUser) => {
  const authProvider = new firebase.auth[`${provider}AuthProvider`]();

  auth
    .signInWithPopup(authProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
    })
    .catch((error) => {
      console.error(error);
    });
};
