import { ThemeType } from "../typings";

export const ThemeLight: ThemeType = {
  body: {
    textColor: "text-gray-800",
    secondaryText: "text-gray-700",
    backgroundColor: "bg-gray-100",
    borderColor: "border-gray-800",
  },
  link: {
    textColor: "text-gray-800",
    focusColor: "text-red-500",
    hoverColor: "text-red-500",
    activeColor: "text-red-500",
    visitedColor: "text-gray-800",
  },
  form: {
    textColor: "text-white",
    backgroundColor: "bg-transparent",
    borderColor: "bg-gray-200",
    borderHoverColor: "border-gray-100",
  },
  format: {
    codeTextColor: "text-gray-900",
    codeBorderColor: "bg-gray-300",
    codeBackgroundColor: "border-gray-900",
  },
};
