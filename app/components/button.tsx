import React from 'react'

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'nav' | 'submenu' | 'back' | 'action' | 'submit';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const baseClasses = "flex items-center transition duration-200 focus:outline-none";

const variants: Record<string, string> = {
  nav: "text-sm gap-1 hover:text-[#39ff14]",
  submenu: "w-full text-left py-2 hover:text-[#39ff14] justify-between",
  back: "gap-2",
  action:
    "bg-[#39ff14] hover:bg-[#23da03] px-6 py-2 md:px-8 md:py-3 rounded-full uppercase text-black text-sm",
  submit:
    "bg-[#39ff14] hover:bg-[#23da03] px-15 py-3 rounded-full w-full md:w-auto",
};

export function Button({
  children,
  onClick,
  type="button",
  variant="nav",
  icon,
  iconPosition="right",
  className="",
}: ButtonProps) {

  const variantClass = variants[variant] || "";

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClass} ${className}`}>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
      </button>
  )
}