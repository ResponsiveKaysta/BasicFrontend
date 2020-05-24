import { storiesOf } from "@storybook/react";
import * as React from "react";
import { SearchTypeSelector } from "responsive-it-common";

import "../../../../public/less/fontawesome-all.css";
import "../../../../public/less/styles.css";
import "../../../../public/less/custom.css";

storiesOf(
  "02: Components / 04: Search Type Selector",
  module
).add("Search Type Selector", () => (
  <SearchTypeSelector onChange={() => null} />
));
