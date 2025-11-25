"use client";

import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "./AuthContext.jsx";
import { auth } from "@/firebase/firebase.config.js";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const setAuthCookie = (isLoggedIn) => {
    if (isLoggedIn) {
      document.cookie = "auth=true; path=/";
    } else {
      document.cookie = "auth=; Max-Age=0; path=/";
    }
  };

  // REGISTER USER
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // LOGIN USER
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // GOOGLE SIGN IN
  const signInGoogle = async () => {
    setLoading(true);
    const result = await signInWithPopup(auth, googleProvider);
    // Set cookie on successful login
    setAuthCookie(true);
    return result;
  };

  // LOGOUT
  const logOut = async () => {
    setLoading(true);
    await signOut(auth);

    setAuthCookie(false);
  };

  // UPDATE PROFILE
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setAuthCookie(!!currentUser);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerUser,
    signInUser,
    signInGoogle,
    user,
    setUser,
    loading,
    setLoading,
    logOut,
    updateUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
