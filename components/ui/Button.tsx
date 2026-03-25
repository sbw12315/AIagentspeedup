import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-[#0a0f1a] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105",
      secondary:
        "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20",
      ghost:
        "text-slate-300 hover:text-white hover:bg-slate-800/50",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
