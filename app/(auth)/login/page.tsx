import React from "react";
import Link from "next/link";
import { cm } from "@/lib/utils";

import { FaAnchor, FaChevronLeft } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-10 sm:px-0">
      <Link
        href="/"
        className={cm(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <FaChevronLeft className="w-3 h-3 mr-2" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <FaAnchor className="w-8 h-8 mx-auto" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-grayDark">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm />
        <p className="px-8 text-sm text-center text-muted-foreground">
          <Link
            href="/register"
            className="underline hover:text-brand underline-offset-4"
          >
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
