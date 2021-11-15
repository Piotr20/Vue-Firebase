/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDTh28tbqoP9nFa1LaCX2KlW53e0Zcq6DE",
  authDomain: "piotrify-vue-project.firebaseapp.com",
  databaseURL:
    "https://piotrify-vue-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "piotrify-vue-project",
  storageBucket: "piotrify-vue-project.appspot.com",
  messagingSenderId: "958903041172",
  appId: "1:958903041172:web:1c47eb03f9aade965f4881",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Get a list of songs from your database
export async function getSongs() {
  const songsCol = collection(db, "test-songs");
  const songSnapshot = await getDocs(songsCol);
  const songsList = songSnapshot.docs.map((doc) => doc.data());
  return songsList;
}

export async function addSong(author, title, imageUrl, youtubeLink) {
  try {
    const docRef = await addDoc(collection(db, "users-songs"), {
      author: author,
      title: title,
      url: imageUrl,
      youtube_link: youtubeLink,
      addedByUsers: true
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export async function getUsersSongs() {
  const songsCol = collection(db, "users-songs");
  const songSnapshot = await getDocs(songsCol);
  const songsList = songSnapshot.docs.map((doc) => doc.data());
  return songsList;
}



