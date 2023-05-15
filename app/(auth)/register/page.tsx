import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cm } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaAnchor } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="grid flex-col items-center justify-center w-screen h-screen px-10 lg:max-w-none lg:grid-cols-2 lg:px-0 sm:px-0">
      <Link
        href="/login"
        className={cm(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-charcoal lg:block" />
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <FaAnchor className="w-6 h-6 mx-auto" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-grayDark">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-sm text-center text-grayDark">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline hover:text-brand underline-offset-4"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline hover:text-brand underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
