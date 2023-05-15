"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { getDocs, collection, setDoc, doc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "./firebase";
import { Article, User, UserInformation } from "@/types/firebase";

export const FirbaseContext = createContext({});

export interface FirbaseProviderProps {
  children?: ReactNode;
}

export const FirbaseProvider: React.FC<FirbaseProviderProps> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserInformation>({});

  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      const querySnap = await getDocs(collection(db, "users"));
      setUsers(
        querySnap.docs.map((user) => ({
          id: user.id,
          data: { ...user.data() },
        }))
      );
    };

    const getArticles = async () => {
      const querySnap = await getDocs(collection(db, "articles"));
      setArticles(
        querySnap.docs.map((article) => ({
          id: article.id,
          data: { ...article.data() },
        }))
      );
    };

    getUsers();
    getArticles();
    setLoading(false);
  }, []);

  const addUserToFirbase = async (userToStore: UserInformation) => {
    await setDoc(doc(db, "users", userToStore?.id || ""), {
      email: userToStore?.email || "",
      username: userToStore?.username || "",
      profile_image: userToStore?.profile_image || "",
    });
  };

  const handleAuth = async () => {
    const getUserInfo = await signInWithPopup(auth, provider);
    const userData = getUserInfo?.user;
    const userToStore: UserInformation = {
      email: userData?.email || "",
      username: userData?.displayName || "",
      profile_image: userData?.photoURL || "",
      id: userData?.uid || "",
    };
    setCurrentUser(userToStore);
    addUserToFirbase(userToStore);
  };

  return (
    <FirbaseContext.Provider
      value={{ users, articles, loading, handleAuth, currentUser }}
    >
      {children}
    </FirbaseContext.Provider>
  );
};
