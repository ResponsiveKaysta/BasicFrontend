import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { ArticleContainer, ColorContainer } from "../components/";
import { ArticleBanner } from "../compositions/";
import { PAGE_MAIN_TOPIC, PAGE_NAME } from "../constants";
import { ePageStyleTemplates } from "../page-types/";
import { LinkButtonComposition } from "../custom-compositions/link-button-composition";
import { ToTopButton } from "../elements/";

var scroll = Scroll.animateScroll;

class LinkButton extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }
  public render() {
    return (
      <>
        <Head>
          <title>Links & Buttons - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header={PAGE_NAME}
            paragraph={PAGE_MAIN_TOPIC}
            elementId="one"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <LinkButtonComposition text="Links and Buttons -> ePageStyleTemplates.light" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.transparent}>
            <LinkButtonComposition text="Links and Buttons -> ePageStyleTemplates.transparent" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.gray}>
            <LinkButtonComposition text="Links and Buttons -> ePageStyleTemplates.gray" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.purple}>
            <LinkButtonComposition text="Links and Buttons -> ePageStyleTemplates.purple" />
          </ColorContainer>
          <ColorContainer padded pageStyle={ePageStyleTemplates.green}>
            <LinkButtonComposition text="Links and Buttons -> ePageStyleTemplates.green" />
            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default LinkButton;
