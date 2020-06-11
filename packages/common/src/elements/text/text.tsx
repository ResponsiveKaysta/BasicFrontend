import * as React from "react";
import { FC } from "react";
import styled from "styled-components";
import { typography } from "../../identity";
import { TextProps } from "./text-props";
import { TextTypes } from "./text-types";

const Label = styled.label`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Paragraph = styled.p`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Span = styled.span`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Pre = styled.pre`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Blockquote = styled.blockquote`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Caption = styled.caption`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Sub = styled.sub`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

const Sup = styled.sup`
  font-family: ${typography.type.primary};
  text-transform: ${typography.transform.none};
  text-decoration: ${typography.decoration.none};
`;

export const Text: FC<TextProps> = ({ children, type, ...props }) => {
  switch (type) {
    case TextTypes.blockquote: {
      return <Blockquote {...props}>{children}</Blockquote>;
    }
    case TextTypes.caption: {
      return <Caption {...props}>{children}</Caption>;
    }
    case TextTypes.label: {
      return <Label {...props}>{children}</Label>;
    }
    case TextTypes.paragraph: {
      return <Paragraph {...props}>{children}</Paragraph>;
    }
    case TextTypes.pre: {
      return <Pre {...props}>{children}</Pre>;
    }
    case TextTypes.span: {
      return <Span {...props}>{children}</Span>;
    }
    case TextTypes.sub: {
      return <Sub {...props}>{children}</Sub>;
    }
    case TextTypes.sup: {
      return <Sup {...props}>{children}</Sup>;
    }
    default: {
      return <Paragraph {...props}>{children}</Paragraph>;
    }
  }
};
