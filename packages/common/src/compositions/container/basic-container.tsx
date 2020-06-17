import React, { FC, ReactNode } from "react";

type BasicContainerProps = {
  children: ReactNode;
  cssStyle?: string;
};

export const BasicContainer: FC<BasicContainerProps> = ({
  children,
  cssStyle,
}) => {
  return (
    <div className={`container mx-auto ${cssStyle || ""}`}>{children}</div>
  );
};
