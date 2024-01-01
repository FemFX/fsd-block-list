"use client";

import { useSignInForm } from "@/features/model/use-sign-in-form";
import { ROUTES } from "@/shared/constants/routes";
import Button from "@/shared/ui/button";
import TextField from "@/shared/ui/text-field";
import Link from "next/link";

import React from "react";

export const SignInForm = () => {
  const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <TextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <Button disabled={isLoading} variant="primary">
        Sign in
      </Button>
      <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
};
