import {FirebaseApp, getApp, getApps, initializeApp} from "firebase/app";
import {Auth, getAuth, initializeAuth} from "firebase/auth";
import {getReactNativePersistence} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Firestore,
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
} from "firebase/firestore";
import {IAccount, IList, IMovie} from "@/types";


const firebaseConfig = {
    apiKey: "AIzaSyCqtwWr7P5N0LuNx-jc91Zr_u0w7DgTbGc",
    authDomain: "netflix-dfc39.firebaseapp.com",
    projectId: "netflix-dfc39",
    storageBucket: "netflix-dfc39.appspot.com",
    messagingSenderId: "562511067546",
    appId: "1:562511067546:web:5822e2b09820fd07696223",
    measurementId: "G-XK0PB8RECC"
};

let app: FirebaseApp;
let auth: Auth;

if (!getApps().length) {
    try {
        app = initializeApp(firebaseConfig);
        auth = initializeAuth(app, {
            persistence: getReactNativePersistence(AsyncStorage),
        });
    } catch (err) {
        console.error("Firebase initialize error: ", err);
    }
} else {
    app = getApp();
    auth = getAuth();
}

export {auth};












