import React, { Component } from 'react';
import BeatButton from "../../components/BeatButton/BeatButton.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AndroidIcon from "../../images/android-icon.svg"
import IosIcon from "../../images/ios-icon.svg"
import './Download.css';
import QRCode from 'qrcode.react';

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
                        <BeatButton text="Join iOS beta" onClick={this._jumpToIos} />
                        <span className="subtitle">Supported iOS Version: 9.0+</span>
                    </div>
                </div>
                <div style={{ backgroundColor: "#ffffff" }} id="iosBeta" className="div-container">
                    <div>
                    <span className="title-bold-download">Join iOS beta</span>
                        <span className="subtitle-download">
                            Since we cannot distribute our app on official stores, we are trying an alternative solution to distribute our app for iOS users. You can try it now doing the follow:
                            <br/><br/>
                            <span className="number-index">1</span> Download the app <b>Expo Client</b><br/>
                            <span className="number-index">2</span> Open the iOS camera<br/>
                            <span className="number-index">3</span> Scan the QRCode below
                        </span>
                    </div>
                    <div>
                        <QRCode value="exp://67-zjj.rarokko.beatmanga.exp.direct" size="256" />
                    </div>
                </div>
            </div>
        );
    }

    _downloadApk() {
        window.location = "https://expo.io/artifacts/8f517d2a-3c3d-4afe-9f5b-a6c04bb004e6";
     };

    _jumpToIos() { 
        document.querySelector('#iosBeta').scrollIntoView({
            behavior: 'smooth'
        });
    };
}

export default Download;
