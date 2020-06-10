import * as React from "react";
import { FC } from "react";
import { LinkTypes } from "./link-types";
import { RegularLink } from "./regular";
import { TextLink } from "./text-link";

interface LinkProps {
  text: string;
  link: string;
  type?: LinkTypes;
  showLinkIcon?: boolean;
  showLinkDivider?: boolean;
}

export const Link: FC<LinkProps> = ({
  text,
  link,
  type,
  showLinkIcon,
  showLinkDivider,
}) => {
  switch (type) {
    case LinkTypes.regular: {
      return <RegularLink text={text} link={link} />;
    }
    case LinkTypes.text: {
      return (
        <TextLink
          text={text}
          link={link}
          showLinkIcon={showLinkIcon}
          showLinkDivider={showLinkDivider}
        />
      );
    }
    default: {
      return <RegularLink text={text} link={link} />;
    }
  }
};
