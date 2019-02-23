
import * as React from 'react';
import { NavLink } from "react-router-dom";

import IToggleMenuState from 'src/application/interfaces/page/IToggleMenuState';

class ToggleMenu extends React.Component<any, IToggleMenuState> {

    constructor(props: any, state: IToggleMenuState) {
        super(props);
        this.state = { isRight: false }
        this.showRight = this.showRight.bind(this);
    }

    public showRight = () => {
        this.setState({ isRight: !this.state.isRight })
    }

    public render() {
        return (
            <>
                <button onClick={this.showRight}>Show Right Menu!</button>
                <ul className={this.state.isRight ? "displayBlock" : "displayNone"} ref={right => right = right} >
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </>
        );
    }
}

export default ToggleMenu;
