
import * as React from 'react';

import { HashRouter, Route } from "react-router-dom";

import Header from "./viewParts/Header"

import Contact from "./views/contact/Contact";
import Home from "./views/home/Home";
import Stuff from "./views/stuff/Stuff";

class MainApplication extends React.Component {
  public render() {
    return (
      <HashRouter>
          <>
          <Header />
          
          <article id="main">
            <Route exact={true} path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </article>

          <footer id="footer">
            <ul className="icons">
              <li>
                <a href="https://www.xing.com/profile/Kay_Stuckenschmidt/cv?sc_o=mxb_p" className="fab fa-xing" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/responsivekaysta/" className="fab fa-linkedin" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/responsive-kaysta" className="fab fa-github" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
              <li>
                <a href="https://www.nuget.org/profiles/kaysta" className="fas fa-archive" target="_blank">
                  <span className="label">&nbsp;</span>
                </a>
              </li>
            </ul>
            <div className="copyright">
              <span>&copy; 2019 responsive kaysta</span>
            </div>
          </footer>
          </>
      </HashRouter>
    );
  }
}

export default MainApplication;
