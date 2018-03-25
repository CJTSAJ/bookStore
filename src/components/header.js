require('styles/header.css');

import React from 'react';


class Header extends React.Component{
  render() {
    return (
      <div className="header">
        <button className="search"><div className="shine"></div>Search</button>
        <button className="exportJSON"><div className="shine"></div>Export JSON</button>
        <button className="exportCSV"><div className="shine"></div>Export CSV</button>
      </div>
    );
  }
}

export default Header;
