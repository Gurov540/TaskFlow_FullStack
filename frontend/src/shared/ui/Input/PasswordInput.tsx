import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input, type InputProps } from "./Input";

import styles from "./PasswordInput.module.css";

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  ({ endAdornment, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <Input
        {...props}
        ref={ref}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <div className={styles.endAdornment}>
            {endAdornment}

            <button
              type="button"
              className={styles.toggleButton}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        }
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
