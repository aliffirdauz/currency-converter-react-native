import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAitzANxMoxRt1i1PLJ1hohVkoAQ22NwBo",
  authDomain: "aplikasi-9c64e.firebaseapp.com",
  projectId: "aplikasi-9c64e",
  storageBucket: "aplikasi-9c64e.appspot.com",
  messagingSenderId: "951616609803",
  appId: "1:951616609803:web:2224396613945a597ab10e",
  measurementId: "G-8ZX9PCQXV6"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };