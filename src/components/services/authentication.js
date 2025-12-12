// Import Firebase App & Firestore
import app, { db } from "../../config/firebase-config";

// Import Auth Functions
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

// Initialize Auth
const auth = getAuth(app);


// Register a new user
export const registerUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;
        console.log(user);
        alert("User created successfully!");
    }
    catch (err) {
        console.log(err.code, err.message);
    }
};


//  Login a user
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        const user = userCredential.user;

        // FIXED — reloadUserInfo hata diya (Firebase v9+ me nahi hota)
        return user.email;
    }
    catch (err) {
        console.log(err.code, err.message);
    }
};


//Logout a user
export const logoutUser = async () => {
    try {
        await signOut(auth);
        console.log("Signed out successfully!");
    }
    catch (err) {
        console.log(err);
    }
};
