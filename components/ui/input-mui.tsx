import * as React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive focus-visible:ring-destructive",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-3 py-1.5 text-sm",
        lg: "h-11 px-4 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface InputProps
  extends Omit<TextFieldProps, "variant" | "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, sx, error, label, ...props }, ref) => {
    const variantStyles = {
      default: {
        "& .MuiOutlinedInput-root": {
          backgroundColor: "var(--background)",
          borderColor: error ? "var(--destructive)" : "var(--input)",
          borderRadius: "0.375rem",
          fontSize: "0.875rem",
          color: "var(--foreground)",
          borderWidth: "1px",
          "& fieldset": {
            borderColor: error ? "var(--destructive)" : "var(--input)",
            borderWidth: "1px",
          },
          "&:hover fieldset": {
            borderColor: error ? "var(--destructive)" : "var(--input)",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "var(--destructive)" : "var(--ring)",
            borderWidth: "1px",
          },
          "&.Mui-focused": {
            boxShadow: error
              ? "0 0 0 2px color-mix(in srgb, var(--destructive) 20%, transparent)"
              : "0 0 0 2px color-mix(in srgb, var(--ring) 50%, transparent)",
          },
          "&.Mui-disabled": {
            cursor: "not-allowed",
            opacity: 0.5,
          },
        },
        "& .MuiInputBase-input": {
          padding:
            size === "sm"
              ? "0.5rem 0.75rem"
              : size === "lg"
              ? "0.625rem 1rem"
              : "0.5rem 0.75rem",
          height:
            size === "sm" ? "2.25rem" : size === "lg" ? "2.75rem" : "2.5rem",
          "&::placeholder": {
            color: "var(--muted-foreground)",
            opacity: 1,
          },
        },
        "& .MuiInputLabel-root": {
          color: "var(--foreground)",
          fontSize: "0.875rem",
          fontWeight: 500,
          marginBottom: "0.5rem",
          "&.Mui-focused": {
            color: error ? "var(--destructive)" : "var(--ring)",
          },
        },
      },
      destructive: {
        "& .MuiOutlinedInput-root": {
          borderColor: "var(--destructive)",
          "& fieldset": {
            borderColor: "var(--destructive)",
          },
          "&:hover fieldset": {
            borderColor: "var(--destructive)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "var(--destructive)",
          },
          "&.Mui-focused": {
            boxShadow:
              "0 0 0 2px color-mix(in srgb, var(--destructive) 20%, transparent)",
          },
        },
      },
    };

    return (
      <TextField
        inputRef={ref}
        data-slot="input"
        variant="outlined"
        error={error}
        label={label}
        sx={{
          width: "100%",
          ...variantStyles[variant || "default"],
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
