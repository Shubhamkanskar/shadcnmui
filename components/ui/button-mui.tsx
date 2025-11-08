import * as React from "react"
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-6",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "size">,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, sx, ...props }: ButtonProps) {
  const variantStyles = {
    default: {
      backgroundColor: "var(--primary)",
      color: "var(--primary-foreground)",
      "&:hover": { 
        backgroundColor: "var(--primary)",
        opacity: 0.9,
      },
    },
    destructive: {
      backgroundColor: "var(--destructive)",
      color: "white",
      "&:hover": { 
        backgroundColor: "var(--destructive)",
        opacity: 0.9,
      },
    },
    outline: {
      border: "1px solid var(--border)",
      backgroundColor: "var(--background)",
      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      "&:hover": {
        backgroundColor: "var(--accent)",
        color: "var(--accent-foreground)",
      },
    },
    secondary: {
      backgroundColor: "var(--secondary)",
      color: "var(--secondary-foreground)",
      "&:hover": { 
        backgroundColor: "var(--secondary)",
        opacity: 0.8,
      },
    },
    ghost: {
      "&:hover": {
        backgroundColor: "var(--accent)",
        color: "var(--accent-foreground)",
      },
    },
    link: {
      color: "var(--primary)",
      textDecoration: "underline",
      textUnderlineOffset: "4px",
      "&:hover": { textDecoration: "underline" },
    },
  }

  const sizeStyles = {
    default: { height: "2.25rem", padding: "0.5rem 1rem" },
    sm: { height: "2rem", padding: "0.375rem 0.75rem", borderRadius: "0.375rem", gap: "0.375rem" },
    lg: { height: "2.5rem", padding: "0.5rem 1.5rem", borderRadius: "0.375rem" },
    icon: { width: "2.25rem", height: "2.25rem" },
    "icon-sm": { width: "2rem", height: "2rem" },
    "icon-lg": { width: "2.5rem", height: "2.5rem" },
  }

  return (
    <MuiButton
      data-slot="button"
      variant="text"
      sx={{
        ...variantStyles[variant || "default"],
        ...sizeStyles[size || "default"],
        borderRadius: "0.375rem",
        fontSize: "0.875rem",
        fontWeight: 500,
        textTransform: "none",
        gap: "0.5rem",
        transition: "all 0.2s",
        "&:disabled": {
          pointerEvents: "none",
          opacity: 0.5,
        },
        outline: "none",
        ...sx,
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants }

