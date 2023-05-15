"use client";

import React, { FC } from "react";
import { cm } from "@/lib/utils";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { userAuthSchema } from "@/lib/validations/auth";
import { useForm } from "react-hook-form";
import { FaGoogle, FaSpinner } from "react-icons/fa";

export interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export type FormData = z.infer<typeof userAuthSchema>;

const UserAuthForm: FC<UserAuthFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
  }

  return (
    <div className={cm("grid gap-6", className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
            {errors?.email && (
              <p className="px-1 text-xs text-error">Invalid email</p>
            )}
          </div>
          <button className={cm(buttonVariants())}>
            {isLoading && <FaSpinner className="w-4 h-4 mr-2 animate-spin" />}
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t text-grayDark" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 bg-coal text-grayLight">Or continue with</span>
        </div>
      </div>
      <button
        type="button"
        className={cm(buttonVariants({ variant: "outline" }))}
        disabled={isLoading || isGitHubLoading}
      >
        {isGitHubLoading ? (
          <FaSpinner className="w-4 h-4 mr-2 animate-spin" />
        ) : (
          <FaGoogle className="w-4 h-4 mr-2" />
        )}{" "}
        Google
      </button>
    </div>
  );
};

export default UserAuthForm;
