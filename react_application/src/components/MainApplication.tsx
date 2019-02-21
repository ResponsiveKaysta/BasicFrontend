
import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import IStoreState from 'src/application/interfaces/core/IStoreState';
import IViewState from 'src/application/interfaces/core/IViewState';

import Footer from "src/components/viewParts/Footer";
import Header from "src/components/viewParts/Header";
import Contact from "src/components/views/Contact";
import Home from "src/components/views/Home";
import Stuff from "src/components/views/Stuff";

class MainApplication extends React.Component<IViewState, IStoreState>  {

  constructor(props: IViewState, state: IStoreState) {
    super(props, state);
    this.state = { storeContext: this.props.viewContext || "MainApplicationContext", storeContainer: this.props.viewContainer || [] };
  }

  public render() {
    return (
        <BrowserRouter>
          <>
            <Header />
            <article id="main">

              <Route exact={true} path="/" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <Home viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

              <Route path="/stuff" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <Stuff viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

              <Route path="/contact" render={() => (
                // tslint:disable-next-line: jsx-no-lambda
                <Contact viewContainer={this.state.storeContainer} viewContext={this.state.storeContext} />
              )} />

            </article>
            <Footer />
          </>
        </BrowserRouter>
    );
  }
}

export default MainApplication;
