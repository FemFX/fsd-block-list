"use client";

import { useSignUpForm } from "@/features/model/use-sign-up-form";
import { ROUTES } from "@/shared/constants/routes";
import Button from "@/shared/ui/button";
import TextField from "@/shared/ui/text-field";
import Link from "next/link";

import React from "react";

export const SignUpForm = () => {
  const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm();
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
        Sign up
      </Button>
      <Link href={ROUTES.SIGN_IN}>Sign In</Link>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
    </form>
  );
};
