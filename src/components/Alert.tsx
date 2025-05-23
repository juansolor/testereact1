import React from "react";

interface Props {
  // Define any props you want to pass to the Alert component
  children: string;
  onclose: () => void; // Optional onClick handler
}

const Alert = ({ children, onclose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onclose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
