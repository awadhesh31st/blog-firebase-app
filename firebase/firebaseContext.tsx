"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";
import { Article, User } from "@/types/firebase";

export const FirbaseContext = createContext({});

export interface FirbaseProviderProps {
  children?: ReactNode;
}

export const FirbaseProvider: React.FC<FirbaseProviderProps> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const querySnap = await getDocs(collection(db, "users"));
      setUsers(
        querySnap.docs.map((user) => {
          const userData: User = {
            id: user.id,
            data: {
              ...user.data(),
            },
          };
          return userData;
        })
      );
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getArticles = async () => {
      const querySnap = await getDocs(collection(db, "articles"));
      setArticles(
        querySnap.docs.map((article) => {
          const articleData: Article = {
            id: article.id,
            data: {
              ...article.data(),
            },
          };
          return articleData;
        })
      );
    };
    getArticles();
  }, []);

  return (
    <FirbaseContext.Provider value={{ users, articles }}>
      {children}
    </FirbaseContext.Provider>
  );
};
