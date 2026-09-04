// Shared Firebase initialization for Trinadh Industries website.
// Used by products.html (public read), login.html and admin.html (auth + writes).
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLS_twk2yu4dbC-r1GliUWs0wGQ52xyKA",
  authDomain: "trinadh-website.firebaseapp.com",
  projectId: "trinadh-website",
  storageBucket: "trinadh-website.firebasestorage.app",
  messagingSenderId: "182848301772",
  appId: "1:182848301772:web:d00feec7918e5a60497069"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
