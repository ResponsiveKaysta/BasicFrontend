import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionFooterProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const SectionFooter: FC<SectionFooterProps> = ({ children, theme }) => {
  const style = `w-full ${
    theme
      ? `${theme.body.backgroundColor} ${theme.body.textColor}`
      : "bg-gray-100 text-gray-800"
  }`;
  return <footer className={style}>{children}</footer>;
};
