import React from "react";
import  Loading  from "../loading/loading";
import { ButtonProps } from "@/types/buttonsType";

const Button = ({ onClick, text, title, loading = false }: ButtonProps) => {
  return (
    <button
      title={title}
      className="my-2 w-64 sm:w-96 h-10 bg-purple-600 mt-7 hover:bg-purple-700 flex items-center justify-center gap-x-2 text-white"
      onClick={onClick}
    >
      {text}
      {loading && <Loading />}
    </button>
  );
};

export default Button;
