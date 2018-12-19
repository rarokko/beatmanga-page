import React, { Component } from 'react';
import './BeatButton.css';

class BeatButton extends Component {
    render() {
        return (
            <div>
                <button className="main-button" onClick={this.props.onClick}>
                    <span>{this.props.text}</span>
                </button>
            </div>
        );
    }
}

export default BeatButton;
