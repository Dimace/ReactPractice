import React, { Component } from 'react';
import './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <div className="MainHeader">
        <header className="MainHeader-header">
          <img src={this.props.logo} className="MainHeader-logo" alt="logo" />
          <h1 className="MainHeader-title">{this.props.title}</h1>
        </header>
      </div>
    );
  }
}

export default MainHeader;

