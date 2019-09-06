import * as React from "react";
import IStoreState from "../../application/interfaces/core/IStoreState";
import IViewState from "../../application/interfaces/core/IViewState";
import Footer from "../../components/page/Footer";
import Header from "../../components/page/Header";

const ArticleBanner = React.lazy(() =>
  import("../../components/organism/ArticleBanner")
);
const EyeCatcher = React.lazy(() =>
  import("../../components/organism/EyeCatcher")
);
const SomeLoremContent = React.lazy(() =>
  import("../../components/organism/SectionSomeLoremContent")
);
const SectionSpotlight = React.lazy(() =>
  import("../../components/organism/SectionSpotlight")
);

class PageContact extends React.Component<IViewState, IStoreState> {
  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext, storeContainer: [] };
  }

  public render() {
    return (
      <>
        <React.Suspense key={this.props.viewContext} fallback="Loading">
          <Header />
          <article id="main">
            <ArticleBanner
              header="PageContact"
              paragraph="some fancy text describing this page"
              cssStyle="transparent"
            />

            <div>
              <SectionSpotlight
                header="Spotlight"
                paragraph="Allways use some fancy effects"
                image="/assets/images/spotlight_planing.png"
                cssStyle="light"
              />
            </div>

            <SomeLoremContent header="Lorem Content 1" cssStyle="light" />
            <EyeCatcher
              header="Eye-Catcher"
              paragraph="a fancy eye-catcher"
              cssStyle="green"
            />
            <SomeLoremContent header="Lorem Content 2" cssStyle="light" />
          </article>
          <Footer />
        </React.Suspense>
      </>
    );
  }
}

export default PageContact;
