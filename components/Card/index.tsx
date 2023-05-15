"use client";

import React, { useEffect, useState } from "react";
import { CardDataProps } from "@/types/UiComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { UserInformation } from "@/types/firebase";

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
    <aside id={id}>
      <div className="flex flex-col max-w-sm gap-3 p-6 m-8 shadow-md cursor-pointer rounded-2xl bg-coal hover:bg-charcoal">
        {data?.title && (
          <h5
            className="text-2xl font-bold tracking-tight text-gray-900 text-biege"
            data-testid="card-title"
          >
            {data?.title}
          </h5>
        )}
        {data?.content && (
          <p className="font-normal text-gray-400 text-grayDark">
            {data?.content}
          </p>
        )}
        <span className="text-pink">{user?.firstName}</span>
      </div>
    </aside>
  );
};
