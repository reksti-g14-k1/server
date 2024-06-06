import { getFirestore, collection, doc, setDoc, getDocs, getDoc, deleteDoc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

import firebase from "../config/firebase.js"
import Product from "../model/Product.js";

const db = getFirestore(firebase);

export const createProduct = async (req, res) => {
    const { name, price, type, stock } = req.body;
    const id = nanoid(10);
    const product = new Product(name, price, type, stock)

    await setDoc(doc(db, "products", id), product.toPlainObject());
    res.send(product);
}

export const getAllProducts = async (req, res) => {
    var allProducts = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        allProducts.push(doc.data())
    });

    res.send(allProducts);
};

export const getProduct = async (req, res) => {
    const { productId } = req.params;
    const productRef = doc(db, "products", productId);
    const productSnap = await getDoc(productRef);
    res.send(productSnap.data())
}

export const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    await deleteDoc(doc(db, "products", productId));

    res.send("Deleted!")
}

export const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const productData = req.body;

    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, productData);

    res.send("Updated!")
}