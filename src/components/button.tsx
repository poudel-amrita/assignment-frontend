import React from "react";
interface ButtonProps {
  icon?: React.ReactNode;
  buttonText: string;
  onClick?: () => void;
}

export default function Button({ icon, buttonText, onClick }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        onClick={onClick}
      >
        {icon}
        {buttonText}
      </button>
    </>
  );
}
