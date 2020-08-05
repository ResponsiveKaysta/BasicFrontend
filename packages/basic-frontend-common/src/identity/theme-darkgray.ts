import { ThemeType } from "../typings";

export const ThemeDarkgray: ThemeType = {
  body: {
    textColor: "text-gray-100",
    secondaryText: "text-gray-200",
    backgroundColor: "bg-gray-700",
    borderColor: "border-gray-100",
  },
  link: {
    textColor: "text-gray-100",
    focusColor: "text-red-500",
    hoverColor: "text-red-500",
    activeColor: "text-red-500",
    visitedColor: "text-gray-100",
  },
  form: {
    textColor: "text-white",
    backgroundColor: "bg-transparent",
    borderColor: "bg-gray-200",
    borderHoverColor: "border-red-500",
  },
  format: {
    codeTextColor: "text-gray-100",
    codeBorderColor: "border-gray-800",
    codeBackgroundColor: "bg-gray-400",
  },
};