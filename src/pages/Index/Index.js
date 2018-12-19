import React, { Component } from 'react';
import BeatButton from "../../components/BeatButton/BeatButton.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AndroidIcon from "../../images/android-icon.svg"
import './Index.css';

class Index extends Component {
    render() {
        return (
            <div className="div-wrapper">
                <div style={{ height: "calc(100vh - 50px)", backgroundColor: "#292929" }} className="div-container first-wrapper">
                    <div>
                        <span className="title-bold">Beatmanga</span>
                        <span className="subtitle">Read everything. Read everywhere.</span>
                    </div>
                    <div>
                        <Link to="/download">
                            <BeatButton text="Download now" onClick={this._downloadApk} />
                        </Link>
                        <span className="subtitle">Currently only for android <img className="android-icon" src={AndroidIcon} alt="android icon"/></span>
                    </div>
                </div>
            </div>
        );
    }

    _downloadApk() {};
}

export default Index;
