"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    };

    const addUserToMongoDB = async (userData) => {
        try {
            const response = await fetch('http://localhost:3000/api/addUserDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to add user to MongoDB');
            }
            console.log("User added to MongoDB successfully");
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                // Only add user details to MongoDB if this is the first time the user is detected
                if (!user) {
                    const userData = {
                        uid: currentUser.uid,
                        email: currentUser.email,
                        displayName: currentUser.displayName,
                        photo: currentUser.photoURL,
                        phone: currentUser.providerData[0]?.phoneNumber || null,
                        // Add other user details you want to store
                    };
                    await addUserToMongoDB(userData);
                }
                setUser(currentUser);
            } else {
                setUser(null);
            }

            // Set initialLoad to false after the first authentication check
            if (initialLoad) {
                setInitialLoad(false);
            }
        });

        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
