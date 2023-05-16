"use client";

import { FirbaseContext } from "@/firebase/firebaseContext";
import { FirebaseContextProps } from "@/types/firebase";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { formatDate } from "@/lib/utils";

import notFound from "@/public/assets/image/notFound.png";

const BlogPage = () => {
  const { articles }: FirebaseContextProps = useContext(FirbaseContext);

  return (
    <div className="container max-w-4xl py-6 mx-auto lg:py-10">
      <div className="mx-8 sm:mx-0">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block text-4xl font-bold tracking-tight lg:text-5xl">
              Blog
            </h1>
            <p className="text-lg text-grayLight">
              At our Tech Blog, we aim to keep you informed and inspired with
              the latest trends and innovations in the tech world.
            </p>
          </div>
        </div>
        <hr className="my-8 text-grayDark/30" />
        {articles?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.id}
                className="relative flex flex-col group"
              >
                {article?.data?.title && (
                  <div className="relative w-full h-64 mb-6 transition-colors bg-white rounded-md">
                    <Image
                      src={article?.data?.articles_image || notFound}
                      alt="Picture of the author"
                      fill={true}
                      className="object-contain"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold">{article?.data?.title}</h2>
                {article?.data?.content && (
                  <p className="mt-2 text-grayLight">
                    {article?.data?.content}
                  </p>
                )}
                {article?.data?.publicationDate && (
                  <p className="mt-4 text-sm text-grayDark">
                    {formatDate(article?.data?.publicationDate)}
                  </p>
                )}
                <Link href="#" className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
