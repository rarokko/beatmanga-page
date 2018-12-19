import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BeatHeader from "./components/BeatHeader/BeatHeader.js";
import './App.css';

import Index from "./pages/Index/Index.js";
import Download from "./pages/Download/Download.js";

class App extends Component {

  componentDidMount() { document.title = "Beatmanga" };

  render() {
    return (
      <Router>
        <div className="div-main">
          <nav>
            <BeatHeader title="Beatmanga" subtitle="Manga for everyone" />
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/download/" exact component={Download} />
        </div>
      </Router>
    );
  }
}

export default App;