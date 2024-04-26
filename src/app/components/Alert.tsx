import React from "react";

type AlertType = "success" | "info" | "warning" | "error";
export interface AlertProps {
  type: AlertType;
  title: string;
}

const Alert: React.FC<AlertProps> = ({ type, title }) => {
  let alertClass = "";
  switch (type) {
    case "success":
      alertClass = "bg-green-500 text-white";
      break;
    case "info":
      alertClass = "bg-blue-500 text-white";
      break;
    case "warning":
      alertClass = "bg-yellow-500 text-black";
      break;
    case "error":
      alertClass = "bg-red-500 text-white";
      break;
    default:
      alertClass = "bg-gray-500 text-white";
  }

  return (
    <div className={`p-4 rounded ${alertClass}`}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm">This is an alert with a {type} title.</p>
    </div>
  );
};
export default Alert;
