import { tv } from "tailwind-variants";
import clsx from "clsx";

const button = tv({
  base: "px-4 py-2 rounded-md font-medium transition focus:outline-none",
  variants: {
    variant: {
      primary: "bg-blue-700 text-white hover:bg-blue-800 active:bg-blue-900",
      outline:
        "border border-blue-700 text-blue-700 hover:bg-blue-700/5 active:bg-blue-700/10",
      tab: [
        "text-sm font-medium px-4 py-2",
        "bg-white text-gray-700",
        "hover:bg-gray-50",
        // "active:bg-blue-700 active:text-white",
      ].join(" "),
    },
    fullWidth: {
      true: "w-full",
    },
    rounded: {
      left: "rounded-l-lg",
      right: "rounded-r-lg",
      default: "",
    },
  },
});

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  rounded = "default",
  className,
  ...props
}) {
  return (
    <button
      className={clsx(button({ variant, fullWidth, rounded }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
