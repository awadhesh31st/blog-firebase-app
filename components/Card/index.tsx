"use client";

import React, { useEffect, useState } from "react";
import { CardDataProps } from "@/types/UiComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { UserInformation } from "@/types/firebase";
import Image from "next/image";

export const Card: React.FC<CardDataProps> = ({ post: { id, data } }) => {
  const [user, setUser] = useState<UserInformation>({});

  useEffect(() => {
    if (!data?.author) {
      const getAuther = async () => {
        setUser(
          (await getDoc(doc(db, "users", data?.author || ""))).data() || {}
        );
      };
      getAuther();
    }
  }, [data?.author]);

  return (
    <article
      key={id}
      className="flex max-w-xl flex-col items-start justify-between"
    >
      <div className="flex items-center gap-x-4 text-xs">
        <a
          href={data?.articles_image}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {data?.title}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={data?.articles_image}>
            <span className="absolute inset-0" />
            {data.title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {data?.content}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={data?.articles_image}>
              <span className="absolute inset-0" />
              {data?.author}
            </a>
          </p>
          <p className="text-gray-600">{data?.title}</p>
        </div>
      </div>
    </article>
  );
};
