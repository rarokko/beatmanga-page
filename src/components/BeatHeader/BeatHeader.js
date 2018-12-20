import React, { Component } from 'react';
import './BeatHeader.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class BeatHeader extends Component {
    render() {
        return (
            <div className="header-main">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="header-title">{this.props.title}
                        {this.props.subtitle &&
                            <span className="header-subtitle">{this.props.subtitle}</span>
                        }</div>
                </Link>
            </div>
        );
    }
}

export default BeatHeader;
