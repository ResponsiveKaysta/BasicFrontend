
import * as React from 'react';

import { NavLink } from "react-router-dom";

class Footer extends React.Component {
    
    public render() {
        return (
            <>
                <header id="header" className="remove">
                    <h1><NavLink to="/">basic frontend</NavLink></h1>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </>
        );
    }

}

export default Footer;