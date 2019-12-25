import * as React from "react";
import { NavLink } from "react-router-dom";
import { iMenuState, iPageProps } from "./spec";

class Menu extends React.Component<iPageProps, iMenuState> {
  constructor(props: iPageProps, state: iMenuState) {
    super(props, state);
    this.state = { isRight: false };
    this.showRight = this.showRight.bind(this);
  }

  private showRight = () => {
    this.setState({ isRight: !this.state.isRight });
  };

  public render() {
    return (
      <>
        <span
          onClick={this.showRight}
          className={this.state.isRight ? "menuClose" : "menuToggle"}
        >
          <span className={!this.state.isRight ? "" : "displayNone"}>menu</span>
        </span>

        <div
          className={this.state.isRight ? "menu displayBlock" : "displayNone"}
          id="menu"
        >
          <ul onClick={this.showRight}>
            <li>
              <NavLink to="/" activeClassName="menu-active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/sources" activeClassName="menu-active">
                Quellen
              </NavLink>
            </li>
            <li>
              <NavLink to="/search" activeClassName="menu-active">
                Suche
              </NavLink>
            </li>
            <li>
              <NavLink to="/facet" activeClassName="menu-active">
                Facet
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="menu-active">
                Über
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="menu-active">
                Hilfe ...
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Menu;
