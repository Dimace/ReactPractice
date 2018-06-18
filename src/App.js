import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import MainHeader from './Components/MainHeader/MainHeader.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Article from './Components/Article/Article.js';
import ArticleWithRemarks from './Components/ArticleWithRemarks/ArticleWithRemarks';
import ArticleWithTags from './Components/ArticleWithTags/ArticleWithTags';
import ArticleWithShortArticle from './Components/ArticleWithShortArticle/ArticleWithShortArticle';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <MainHeader logo = {logo} title = {'hi user!'} />
          <div className="main">
            <Sidebar />
            <Switch>
              <Route exact path="/" />
              <Route path="/article" component={Article} />
              <Route path="/withTags" component={ArticleWithTags} />
              <Route path="/withRemarks" component={ArticleWithRemarks} />
              <Route path="/withShortArticle" component={ArticleWithShortArticle} />
            </Switch>
          </div>
        </div>
    </Router>
    );
  }
}

export default App;
