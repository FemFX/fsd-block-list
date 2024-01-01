import React, { ReactNode } from "react";

export const FormPageLayout = ({
  title,
  form,
  header,
}: {
  header?: ReactNode;
  form?: ReactNode;
  title: string;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {header}
      <div className="grow flex flex-col pt-24">
        <main className="rounded-xl border border-slate-300 px-14 py-8 pb-14 max-w-[400px] bg-white self-center w-full">
          <h1 className="text-2xl mb-6">{title}</h1>
          {form}
        </main>
      </div>
    </div>
  );
};
