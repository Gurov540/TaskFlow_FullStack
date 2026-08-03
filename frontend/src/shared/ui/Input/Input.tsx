import React, { forwardRef, useId } from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.type";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      fullWidth = false,
      error,
      inputSize = "md",
      startAdornment,
      endAdornment,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const reactId = useId();
    const inputId =
      id ??
      (label
        ? `${label.toLowerCase().replace(/\s+/g, "-")}-${reactId}`
        : `input-${reactId}`);
    const hintId = `${inputId}-hint`;

    const inputClasses = [
      styles.input,
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
        <div
          className={`${styles.inputWrap} ${fullWidth ? styles.fullWidth : ""}`}
        >
          {startAdornment && (
            <span className={`${styles.adornment} ${styles.start}`}>
              {startAdornment}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={inputClasses}
            aria-invalid={!!error}
            aria-describedby={error ? hintId : hint ? hintId : undefined}
            {...props}
          />
          {endAdornment && (
            <span className={`${styles.adornment} ${styles.end}`}>
              {endAdornment}
            </span>
          )}
        </div>
        {error ? (
          typeof error === "string" ? (
            <span id={hintId} className={`${styles.hint} ${styles.hintError}`}>
              {error}
            </span>
          ) : (
            <span id={hintId} className={`${styles.hint} ${styles.hintError}`}>
              Ошибка
            </span>
          )
        ) : hint ? (
          <span id={hintId} className={styles.hint}>
            {hint}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
