import { storiesOf } from "@storybook/react";
import { CallToAction, ButtonType } from "basic-frontend-common";
import React from "react";

storiesOf("Design System / 04 Components", module).add("Call to Action", () => (
  <div className="container">
    <section className="flex flex-row mb-10">
      <div className="w-1/4 text-xl">Type</div>
      <div className="w-3/4 text-xl">Swarm</div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">cta, call to action</div>
      <div className="w-3/4 flex flex-row justify-between">
        <CallToAction
          ctaHeader="Lorem ipsum dolor sit amet"
          ctaText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          primaryButtonText="ButtonType.tertiary"
          primaryButtonAction={() => null}
          secondaryButtonText="ButtonType.primary"
          secondaryButtonAction={() => null}
        />
      </div>
    </section>

    <section className="flex flex-row mb-10">
      <div className="w-1/4">cta, call to action</div>
      <div className="w-3/4 flex flex-row justify-between">
        <CallToAction
          ctaHeader="Lorem ipsum dolor sit amet"
          ctaText="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          primaryButtonText="ButtonType.special"
          primaryButtonAction={() => null}
          primaryButtonType={ButtonType.special}
          secondaryButtonText="ButtonType.transparent"
          secondaryButtonAction={() => null}
          secondaryButtonType={ButtonType.transparent}
        />
      </div>
    </section>
  </div>
));
