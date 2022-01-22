import React from "react";

const TestModal = ({ children, open, toogleShowTestOpen }) => {
  return (
    <div
      className={`fixed top-0 w-96 h-full bg-sky-500 p-10 ${
        open ? "right-0" : "-right-96"
      }`}
    >
      <div
        className="w-12 h-12 bg-darkBlue absolute -left-12 top-1/2"
        onClick={toogleShowTestOpen}
      ></div>
      {children}
    </div>
  );
};

export default TestModal;
