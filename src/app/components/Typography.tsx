import React from "react";

type Typography =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "inherit";
export interface TypographyProps {
  variant: Typography;
  children: React.ReactNode;
}
const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
  const variants: Record<Typography, string> = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    subtitle1: "text-lg",
    subtitle2: "text-base",
    body1: "text-base",
    body2: "text-sm",
    inherit: "inherit",
  };
  return <div className={variants[variant]}>{children}</div>;
};
export default Typography;
