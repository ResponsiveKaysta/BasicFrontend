import { storiesOf } from "@storybook/react";
import * as React from "react";

import {
  color,
  LayoutContainer,
  Button,
  Heading,
  HeadingTypes,
  Hr,
  Icon,
  Link,
  Pictogram,
  Spinner,
  Text,
} from "responsive-it-common";
import { Appearance } from "responsive-it-common/dist/elements/button/appearance";
import { TextTypes } from "responsive-it-common/dist/elements/text/text-types";

storiesOf("01: Identity", module).add("Pictograms", () => (
  <LayoutContainer>
    <Heading type={HeadingTypes.h2}>Some Heading</Heading>
    <Hr />
  </LayoutContainer>
));
