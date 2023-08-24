import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUserWithEmailAndPhone = (email, password, phoneNumber, username, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        return Promise.all([
          updateProfile(loggedUser, { displayName: username, photoURL }),
          setDoc(doc(db, "users", loggedUser.uid), {
            username,
            email,
            photoURL,
            phoneNumber,
          }),
        ]);
      })
      .then(() => {
        console.log("User profile updated!");
        setLoading(false);
        return result;
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const authInfo = {
    createUserWithEmailAndPhone,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
