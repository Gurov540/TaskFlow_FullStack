import React from "react";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = {
  size?: InputSize;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  label?: string;
  children?: React.ReactNode;
};
