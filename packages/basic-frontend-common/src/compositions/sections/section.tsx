import React, { FC, ReactNode } from "react";
import { ThemeType } from "../../identity";

type SectionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const Section: FC<SectionProps> = ({ children, theme }) => {
  const style = `w-full ${theme ? theme.body.backgroundColor : ""}`;
  return <section className={style}>{children}</section>;
};
