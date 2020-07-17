import { storiesOf } from "@storybook/react";
import { EyeCatcher } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 03 Compositions", module).add("Eye-Catcher", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">Eye-Catcher without Theme</div>
      <div className="w-3/4 flex flex-row justify-between">
        <EyeCatcher contentTop="Top" contentBottom="Bottom" />
      </div>
    </section>
  </div>
));
