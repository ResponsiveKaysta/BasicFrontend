import * as React from "react";
import ArticleContainer from "../../components/article-container/article-container";
import ColorContainer from "../../components/color-container/color-container";
import EyeCatcher from "../../compositions/eye-catcher/eye-catcher";
import PageBanner from "../../compositions/page-banner/page-banner";
import PageHeader from "../../compositions/page-header/page-header";
import Footer from "../../compositions/page/footer";
import Header from "../../compositions/page/header";
import eSpotlightOrientation from "../../compositions/spotlight/spec/eSpotlightOrientation";
import eSpotlightPictogram from "../../compositions/spotlight/spec/eSpotlightPictogram";
import Spotlight from "../../compositions/spotlight/spotlight";
import LinkButtonElement from "../../elements/button-elements/link-button-element";
import eButtonStyles from "../../elements/button-elements/spec/eButtonStyles";
import DivElement from "../../elements/text-elements/div-element";
import { ePageStyleTemplates } from "../../less";
import iHomeState from "./spec/iHomeState";

class Home extends React.Component<any, iHomeState> {
  public render() {
    return (
      <>
        <Header />

        <PageBanner
          header="responsive IT"
          paragraph="IT & Software Architecture, Engineering & Consulting"
          scrollTo="one"
          pageStyle={ePageStyleTemplates.transparent}
        />
        <EyeCatcher
          header="Was bedeutet responsive?"
          paragraph="„Responsive“ bedeutet so viel wie 'auf jemanden eingehen' oder 'reaktionsfähig bleiben'"
          elementId="one"
          pageStyle={ePageStyleTemplates.green}
        />
        <Spotlight
          header="Wir sind responsive"
          paragraph="Das Informationszeitalter ist unsere Kinderstube und Information ist praktisch immer zugänglich"
          orientation={eSpotlightOrientation.left}
          pageStyle={ePageStyleTemplates.light}
          pictogram={eSpotlightPictogram.ai_1}
        />
        <ArticleContainer pageStyle={ePageStyleTemplates.light}>
          <ColorContainer padded pageStyle={ePageStyleTemplates.light}>
            <PageHeader
              header="Die Zeiten ändern sich"
              paragraph="In Zeiten rasant wachsender Absatzzahlen von mobilen Endgeräten wie Tablets und Smartphones bildet Responsive Design die Möglichkeit der geräteunabhängigen Kommunikation."
              pageStyle={ePageStyleTemplates.light}
            />

            <DivElement>
              <LinkButtonElement
                text="weiter ..."
                link="/about"
                cssClass={eButtonStyles.button_special}
              />
            </DivElement>
          </ColorContainer>
        </ArticleContainer>

        <Footer />
      </>
    );
  }
}

export default Home;
