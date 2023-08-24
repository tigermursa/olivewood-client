import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../Firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUserWithEmailAndPhone = (
    email,
    password,
    phoneNumber,
    username,
    photoURL
  ) => {
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

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (myUsers) => {
      setUser(myUsers);

      // Token URL and axios using
      if (myUsers) {
        axios
          .post("https://my-json-server-tigermursa.vercel.app/jwt", {
            email: myUsers.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching JWT token:", error);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      unSub();
    };
  }, []);
  const authInfo = {
    createUserWithEmailAndPhone,
    logout,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
