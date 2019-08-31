import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import IStoreState from "../application/interfaces/core/IStoreState";
import IViewState from "../application/interfaces/core/IViewState";
import Spinner from "../components/core/Spinner";

const MainPage = React.lazy(() => import("../components/template/MainPage"));

/*
  credits: https://blog.logrocket.com/async-rendering-in-react-with-suspense-5d0eaac886c8

*/

class MainApplication extends React.Component<IViewState, IStoreState> {
  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = {
      storeContext: this.props.viewContext || "MainPageContext",
      storeContainer: this.props.viewContainer || []
    };
  }

  public render() {
    return (
      <React.Suspense key={this.props.viewContext} fallback="Loading">
        <BrowserRouter>
          <>
            <Route
              exact={true}
              path="/"
              render={() => <MainPage viewContext="PageHomeContext" />}
            />

            <Route
              path="/stuff"
              render={() => <MainPage viewContext="PageStuffContext" />}
            />

            <Route
              path="/latestarticles"
              render={() => <MainPage viewContext="PageArticlesContext" />}
            />

            <Route
              path="/contact"
              render={() => <MainPage viewContext="PageContactContext" />}
            />

            <Route
              path="/adminoverviewboxes"
              render={() => (
                <MainPage viewContext="PageAdminOverviewBoxesContext" />
              )}
            />
          </>
        </BrowserRouter>
      </React.Suspense>
    );
  }
}

export default MainApplication;
