import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebase from "../config/firebase.js"

const db = getFirestore(firebase);

export const findByUsername = async (username) => {
    const usersCollection = collection(db, 'users');
    const q = query(usersCollection, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => doc.data());
}