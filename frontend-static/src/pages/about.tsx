import * as React from "react";
import * as Scroll from "react-scroll";
import { Head } from "react-static";
import { PAGE_NAME } from "../constants";
import { ArticleContainer } from "../components/article-container/article-container";
import { ArticleBanner } from "../compositions/article-banner/article-banner";
import { ePageStyleTemplates } from "../less";
import { Spotlight } from "../compositions/spotlight/spotlight";
import { ePictogram, eSpotlightOrientation, eTextStyles } from "../page-types/";
import { ColorContainer } from "../components/color-container/color-container";
import { PageHeader } from "../compositions/page-header/page-header";
import { ParagraphElement } from "../elements/text-elements/paragraph-element";
import { Spacer } from "../elements/spacer/spacer";
import { CallToAction } from "../compositions/call-to-action/call-to-action";
import { ToTopButton } from "../elements/to-top-button/to-top-button";

var scroll = Scroll.animateScroll;

class About extends React.Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  public render() {
    return (
      <>
        <Head>
          <title>Über uns - {PAGE_NAME}</title>
        </Head>
        <ArticleContainer>
          <ArticleBanner
            header="Über responsive IT"
            paragraph="Für uns ist die Kreativität des Ungeplanten von zentraler Bedeutung"
            pageStyle={ePageStyleTemplates.transparent}
          />

          <Spotlight
            header="Gestern, Heute, Morgen"
            paragraph="Bereits seit 2002 bieten wir innovative Leistungen rund um Informatik an"
            pictogram={ePictogram.ai_1}
            pageStyle={ePageStyleTemplates.light}
            orientation={eSpotlightOrientation.left}
          />

          <ColorContainer pageStyle={ePageStyleTemplates.light} padded>
            <PageHeader
              header="Erfahrung"
              paragraph="Dank unserer Erfahrung dürfen wir bei Pionieren und Grössen der Branche lernen, wachsen und spannende Projekte umsetzen."
              pageStyle={ePageStyleTemplates.light}
            />

            <ParagraphElement textStyles={eTextStyles.lead}>
              Deshalb kann responsive IT in allen Bereichen der
              Informationstechnologie beraten, realisieren und unterstützen.
            </ParagraphElement>

            <Spacer />

            <PageHeader
              header="Beratung"
              paragraph="Wir helfen aus dem „Dschungel“ und stehen partnerschaftlich zur Seite damit eine geeignete Lösung gefunden wird."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Umsetzung"
              paragraph="Interdisziplinäres Arbeiten ist gleich Vernetzte Kreativität. So können wir durch langjährige Erfahrung zum Projekterfolg beitragen."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <PageHeader
              header="Engineering & Coding"
              paragraph="Schnell, hochwertig, komplex, stabil – nur einige der Anforderungen die wir nicht nur an unseren Code stellen. Qualität muss sein, hat aber auch ihren Preis."
              pageStyle={ePageStyleTemplates.light}
            />

            <Spacer />

            <CallToAction
              header="Interaktiv"
              paragraph="Nicht nur «sehende» Geräte bedienen, einen Schritt weiter gehen."
              linkText="Impressum"
              linkUrl="/impressum"
              specialText="Haftungsausschluss"
              specialUrl="/legal"
            />

            <ToTopButton />
          </ColorContainer>
        </ArticleContainer>
      </>
    );
  }
}

export default About;
