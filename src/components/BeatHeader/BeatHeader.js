import React, { Component } from 'react';
import './BeatHeader.css';

class BeatHeader extends Component {
    render() {
        return (
            <div className="header-main">
                <div className="header-title">{this.props.title} 
                {this.props.subtitle &&
                    <span className="header-subtitle">{this.props.subtitle}</span>
                }</div>
            </div>
        );
    }
}

export default BeatHeader;
