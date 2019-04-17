import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';
import './nav.scss';

class Nav extends Component {
    renderLinks(){
        return (
            <Fragment>
                <button className="sidenav-close right hide-on-med-and-up">
                    <i className="material-icons">close</i>
                </button>
                <li className="first-li">
                    <Link to="/">Home</Link>
                </li>
                <li><div className="divider red"></div></li>
                <li>
                    <Link to="/browse">Browse</Link>
                </li>
                <li><div className="divider red"></div></li>
                <li>
                    <Link to="/log-in">Log In</Link>
                </li>
                <li><div className="divider red"></div></li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
            </Fragment>
        )
    }

    render(){
        const links = this.renderLinks();

        return (
            <Fragment>
                <nav className="nav-head">
                    <div className="nav-wrapper">
                        <p className="header-text brand-logo center">Recharge</p>
                        <a href="#" data-target="sidenav" className="sidenav-trigger">
                            <i className="material-icons">menu</i>
                        </a>
                        <ul className="right hide-on-med-and-down desktop-nav">
                            {links}
                        </ul>
                    </div>
                    <Sidenav links={links} />
                </nav>
            </Fragment>
        )
    }
}

export default Nav;