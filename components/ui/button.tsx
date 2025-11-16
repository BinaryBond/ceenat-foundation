import Link from "next/link";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: any;
  form?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export default function Button({
  text,
  onClick,
  className,
  type = "button",
  disabled,
  form,
  href,
  icon,
  ...props
}: ButtonProps) {
  const buttonContent = (
    <button
      disabled={disabled}
      type={type}
      form={form}
      onClick={onClick}
      className={`${className} bg-primary-default text-gray-1 px-6 py-3 lg:px-8 lg:py-4 text-bodyLarge lg:text-headingExtraSmall cursor-pointer rounded-lg flex-center gap-[10px] font-medium  disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {text}
      {icon}
    </button>
  );

  if (href) {
    return (
      <Link href={href} target="_blank" className="w-fit">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
