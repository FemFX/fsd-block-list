"use client";

import React from "react";
import { useAddBlockItemForm } from "../model/use-block-item-form";
import SelectField from "@/shared/ui/select-field";
import TextField from "@/shared/ui/text-field";
import Button from "@/shared/ui/button";
import { AddBlockItemDtoType } from "@/shared/api/generated";

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export const AddBlockItemForm = () => {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <SelectField
        options={typeOptions}
        className="grow min-w-[200px]"
        selectProps={{ ...register("type") }}
      />
      <TextField
        className="grow"
        inputProps={{
          placeholder: type === "KeyWord" ? "Enter key word" : "Enter website",
          ...register("data"),
        }}
      />
      <Button disabled={isLoading} variant="primary">
        Add Block Item
      </Button>
    </form>
  );
};
