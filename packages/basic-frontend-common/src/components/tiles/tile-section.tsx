import React, { FC, ReactNode } from "react";
import { ContainerSection } from "../containers";
import { ThemeType } from "../../identity";

type TileSectionProps = {
  children: ReactNode;
  theme?: ThemeType;
};

export const TileSection: FC<TileSectionProps> = ({ children, theme }) => {
  return (
    <ContainerSection
      theme={theme}
      cssStyle="table-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {children}
    </ContainerSection>
  );
};