import React, { Component } from 'react';
import BeatButton from "../../components/BeatButton/BeatButton.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AndroidIcon from "../../images/android-icon.svg"
import IosIcon from "../../images/ios-icon.svg"
import './Download.css';

class Download extends Component {
    render() {
        return (
            <div className="div-wrapper">
                <div style={{ height: "calc(100vh - 50px)", backgroundColor: "#292929" }} className="div-container first-wrapper">
                    <div>
                        <img className="so-icon" src={AndroidIcon} alt="android icon" />
                        <BeatButton text="Download APK" onClick={this._downloadApk} />
                        <span className="subtitle">Supported Android Version: 4.0.0+</span>
                    </div>
                    <div>
                        <img className="so-icon" src={IosIcon} alt="ios icon" />
                        <BeatButton text="Join beta" onClick={this._jumpToIos} />
                        <span className="subtitle">Supported iOS Version: 9.0+</span>
                    </div>
                </div>
                <div style={{ backgroundColor: "#b7b7b7" }} id="iosBeta" className="div-container">
                    <div>
                        <img className="so-icon" src={AndroidIcon} alt="android icon" />
                        <BeatButton text="Download APK" onClick={this._downloadApk} />
                        <span className="subtitle">Supported Android Version: 4.0.0+</span>
                    </div>
                    <div>
                        <img className="so-icon" src={IosIcon} alt="ios icon" />
                        <BeatButton text="Join beta" onClick={this._downloadApk} />
                        <span className="subtitle">Supported iOS Version: 9.0+</span>
                    </div>
                </div>
            </div>
        );
    }

    _downloadApk() { };

    _jumpToIos() { 
        document.querySelector('#iosBeta').scrollIntoView({
            behavior: 'smooth'
        });
    };
}

export default Download;
