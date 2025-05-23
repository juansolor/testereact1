import React from "react";

interface Props {
  // Define any props you want to pass to the Button component
  children: string;
  color?: "primary" | "secundary"; // Optional color prop
  onClick: () => void; // Optional onClick handler
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
