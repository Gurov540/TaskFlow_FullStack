import React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  fullWidth?: boolean;
  error?: string | boolean;
  inputSize?: InputSize;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}
