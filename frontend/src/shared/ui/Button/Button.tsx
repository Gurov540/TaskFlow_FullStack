import { forwardRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import styles from "./Button.module.css";
import type { ButtonProps, ButtonAsButton, ButtonAsLink } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    if (props.to !== undefined) {
      const {
        to,
        variant = "primary",
        size = "md",
        loading = false,
        fullWidth = false,
        iconLeft,
        iconRight,
        className,
        children,
        ...linkProps
      } = props as ButtonAsLink;

      const classes = clsx(
        styles.button,
        styles[variant],
        styles[size],
        {
          [styles.loading]: loading,
          [styles.fullWidth]: fullWidth,
        },
        className,
      );

      return (
        <Link
          to={to}
          className={classes}
          aria-disabled={loading}
          {...linkProps}
        >
          {loading && <span className={styles.spinner} />}

          {!loading && iconLeft}

          <span>{children}</span>

          {!loading && iconRight}
        </Link>
      );
    }

    const {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      iconLeft,
      iconRight,
      className,
      children,
      disabled,
      type = "button",
      ...buttonProps
    } = props as ButtonAsButton;

    const classes = clsx(
      styles.button,
      styles[variant],
      styles[size],
      {
        [styles.loading]: loading,
        [styles.fullWidth]: fullWidth,
      },
      className,
    );

    return (
      <button
        {...buttonProps}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        className={classes}
      >
        {loading && <span className={styles.spinner} />}

        {!loading && iconLeft && (
          <span className={styles.icon}>{iconLeft}</span>
        )}

        <span className={styles.content}>{children}</span>

        {!loading && iconRight && (
          <span className={styles.icon}>{iconRight}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
