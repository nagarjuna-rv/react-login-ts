import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="standard"
        />
      )}
    />
  );
};