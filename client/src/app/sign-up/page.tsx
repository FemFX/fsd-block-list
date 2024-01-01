import { SignUpForm } from "@/features/auth";
import { Header } from "@/shared/ui/header";
import { FormPageLayout } from "@/shared/ui/layouts/form-page-layout";
import React from "react";

const SignUp = () => {
  return (
    <FormPageLayout title="Sign Up" form={<SignUpForm />} header={<Header />} />
  );
};

export default SignUp;
