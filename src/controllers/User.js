import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import firebase from "../config/firebase.js"
import User from "../model/User.js";
import { findByUsername } from "../services/User.js";

const db = getFirestore(firebase);

export const register = async (req, res) => {
    const { username, password, role } = req.body;

    const id = nanoid(10);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User(username, hashedPassword, role);

    await setDoc(doc(db, "users", id), user.toPlainObject());
    res.send(user);
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await findByUsername(username);
    if(user.length === 0){
        throw new Error('User not found');
    }
    const isValidPassword = await bcrypt.compare(password, user[0].password);
    if(!isValidPassword){
        throw new Error('Invalid password');
    }
    const token = jwt.sign({username: user[0].username}, "secret", {expiresIn: '2h'});
    res.json({ token });
}