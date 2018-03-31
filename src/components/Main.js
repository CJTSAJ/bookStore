require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './header'
import BookTable from './bookTable';
import bookDetail from './bookDetail';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//let yeomanImage = require('../images/yeoman.png');

class App extends React.Component {
  render() {
    const Home = ()=> (
      <BookTable />
    );
    const Detail = ()=> (
      <bookDetail />
    )
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/detail" component={Detail}/>
        </div>
      </Router>
    );
  }
}

App.defaultProps = {
};


export default App;
// <img src={yeomanImage} alt="Yeoman Generator" />
// <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
/*<div className="index">
  <Header />
  <li><Link to="/">BookTable</Link></li>
  {this.props.children}
  <BookTable />
</div>*/
/*class Root extends react.Component{
    render(){
      return (

      )
    }
}*/
