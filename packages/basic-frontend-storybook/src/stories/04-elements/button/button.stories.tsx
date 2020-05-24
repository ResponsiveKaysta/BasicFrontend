import { storiesOf } from "@storybook/react";
import * as React from "react";
import { LinkButton } from "responsive-it-common";

import "../../../../public/less/fontawesome-all.css";
import "../../../../public/less/styles.css";
import "../../../../public/less/custom.css";

storiesOf("04: Elements / 01: Button", module)
  .add("with text", () => <LinkButton text="some link button" />)
  .add("with some emoji", () => <LinkButton text="😀 😎 👍 💯" />);
