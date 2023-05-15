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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {articles?.map((article: Article, key) => {
              return <Card post={article} key={key} />;
            })}
          </div>
        </div>
      </div>
      {!currentUser?.email && (
        <span className="cursor-pointer" onClick={handleAuth}>
          Login
        </span>
      )}
    </div>
  );
};

export default Post;
