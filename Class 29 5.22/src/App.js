import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from 'axios';

// PAGES
import Home from './pages/home/home.js';
import Pokemon from './pages/pokemon/pokemon';
import History from './pages/history/history';
import Help from './pages/help/help';

// COMPONENTS
import Header from './components/header/header.js';
import NavBar from './components/nav/nav';
import Form from './components/body/body.js';
import Footer from './components/footer/footer.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlInput: '',
      method: '',
      search: '',
      headers: '',
      results: ''
    };
  }

  getInput = async (e) => {
    e.preventDefault();
    if (this.state.method === 'get' && this.state.urlInput) {
      this.setState(
        { ...this.state, search: `${this.state.method} ${this.state.urlInput}` }
      );
      await axios.get(this.state.urlInput)
        .then(res => {
          this.setState(
            { ...this.state, headers: res.headers, results: res.data.results }
          );
        });
    }
  }

  handleChangeInput = (e) => {
    this.setState(
      { ...this.state, [e.target.name]: e.target.value }
    );
  }

  render() {
    return (
      <>
        <div className="my-app">
          <Header />
          <Router>
            <NavBar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/pokemon">
              <Pokemon />
              <Form
                handleChange={this.handleChangeInput}
                goInput={this.goInput}
                headers={this.state.headers}
                search={this.state.search}
                results={this.state.results}
              />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
            <Route exact path="/help">
              <Help />
            </Route>
            <Footer />
          </Router>
        </div>
      </>
    );
  }

}

export default App;