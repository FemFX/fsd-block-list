import { SignInForm } from "@/features/auth";
import { Header } from "@/shared/ui/header";
import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";
import React from "react";

const SignIn = () => {
  return (
    <FormPageLayout title="Sign In" form={<SignInForm />} header={<Header />} />
  );
};

export default SignIn;
