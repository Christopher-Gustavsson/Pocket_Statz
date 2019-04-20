import React, { Component } from 'react';

class NavFooter extends Component {

    render() {
       const margin = {"marginBottom":"0px"};
       const padding = {"paddingLeft": "0px", "paddingRight": "0px"};
        return (
            <footer className="page-footer" id="foot">
                <div className="row" id="frow" style={margin}>
                    <div className="col s12" style={padding}>
                        <ul className="tabs tabs-fixed-width transparent white-text">
                            <li className="tab col s4 white-text"><a href="#test1" className="active white-text"><i className="material-icons">home</i></a></li>
                            <li className="tab col s4"><a href="#test2" className="white-text"><i className="material-icons">search</i></a></li>
                            <li className="tab col s4"><a href="#test4" className="white-text"><i className="material-icons">account_circle</i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}

export default NavFooter;