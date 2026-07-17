import React, { forwardRef } from "react";
import styles from "./Input.module.css";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  fullWidth?: boolean;
  error?: string;
  color?: "primary" | "success";
  inputSize?: "sm" | "md" | "lg";
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      fullWidth = false,
      error,
      color = "primary",
      inputSize = "md",
      startAdornment,
      endAdornment,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    const inputClasses = [
      styles.input,
      styles[color],
      styles[inputSize],
      fullWidth && styles.fullWidth,
      error && styles.error,
      startAdornment && styles.hasStart,
      endAdornment && styles.hasEnd,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={styles.field}>
        {label && (
          <label
            className={`${styles.label} ${error ? styles.labelError : ""}`}
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        <div className={styles.inputWrap}>
          {startAdornment && (
            <span className={`${styles.adornment} ${styles.start}`}>
              {startAdornment}
            </span>
          )}
          <input ref={ref} id={inputId} className={inputClasses} {...props} />
          {endAdornment && (
            <span className={`${styles.adornment} ${styles.end}`}>
              {endAdornment}
            </span>
          )}
        </div>
        {error ? (
          <span className={`${styles.hint} ${styles.hintError}`}>{error}</span>
        ) : hint ? (
          <span className={styles.hint}>{hint}</span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
