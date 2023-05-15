"use client";

import { Card } from "@/components/Card";
import { FirbaseContext } from "@/firebase/firebaseContext";
import { Article, FirebaseContextProps } from "@/types/firebase";
import Link from "next/link";
import React, { useContext } from "react";

const Post = () => {
  const { articles, handleAuth, currentUser }: FirebaseContextProps =
    useContext(FirbaseContext);

  console.log("ccacacc", currentUser);
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/post">Post</Link>
      {articles?.map((article: Article, key) => {
        return <Card post={article} key={key} />;
      })}
      {!currentUser?.email && (
        <span className="cursor-pointer" onClick={handleAuth}>
          Login
        </span>
      )}
    </div>
  );
};

export default Post;
