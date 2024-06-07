import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

import firebase from "../config/firebase.js"
import Transaction from "../model/Transaction.js";

const db = getFirestore(firebase);

export const createTransaction = async (req, res) => {
    const { items, status, price, customerId } = req.body;
    const id = nanoid(10);
    const transaction = new Transaction(items, status, price, customerId)

    if (!Array.isArray(items)) {
        items = [];
    }

    await setDoc(doc(db, "transactions", id), transaction.toPlainObject());
    res.send(transaction);
}

export const getAllTransactions = async (req, res) => {
    var allTransactions = [];
    const querySnapshot = await getDocs(collection(db, "transactions"));
    querySnapshot.forEach((doc) => {
        allTransactions.push(doc.data())
    });

    res.send(allTransactions);
};

export const getTransaction = async (req, res) => {
    const { transactionId } = req.params;
    const transactionRef = doc(db, "transactions", transactionId);
    const transactionSnap = await getDoc(transactionRef);
    res.send(transactionSnap.data())
}

export const deleteTransaction = async (req, res) => {
    const { transactionId } = req.params;
    await deleteDoc(doc(db, "transactions", transactionId));

    res.send("Deleted!")
}

export const updateTransaction = async (req, res) => {
    const { transactionId } = req.params;
    const transactionData = req.body;

    const transactionRef = doc(db, 'transactions', transactionId);
    await updateDoc(transactionRef, transactionData);

    res.send("Updated!")
}