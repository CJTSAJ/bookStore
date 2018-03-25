require('styles/header.css');

import React from 'react';


class Header extends React.Component{
  render() {
    return (
      <div className="header">
        <div className="topBar">
          <div className="comWidth">
            <div className="leftArea">
              <a href="#" className="collection">收藏商品</a>
            </div>
            <div className="rightArea">
              欢迎来到网上书城！<a href="#">[登录]</a><a href="#">[注册]</a>
            </div>
          </div>
        </div>
        <div className="logoBar">
          <div className="comWidth">
            <div className="logo fl">
              <a href="#"><img src="images/icon/logo.png" alt="商品"></img></a>
            </div>
            <div className="searchBox fl">
              <input type="text" className="search_text fl"></input>
              <input type="button" value="搜 索" className="search_btn fr"></input>
            </div>
            <div className="shopCar fr">
              <span className="shopText">购物车</span>
              <span className="shopNum">0</span>
            </div>
          </div>
        </div>
        <div className="navBox">
          <div className="comWidth">
            <div className="shopClass">
              <h3>全部商品分类</h3>
            </div>
            <ul>
              <li><a href="#"></a>科幻</li>
              <li><a href="#"></a>文学</li>
              <li><a href="#"></a>散文</li>
              <li><a href="#"></a>杂志</li>
              <li><a href="#"></a>教材</li>
            </ul>
          </div>
        </div>
        <button className="search buttonStyle"><div className="shine"></div>Search</button>
        <button className="exportJSON buttonStyle"><div className="shine"></div>Export JSON</button>
        <button className="exportCSV buttonStyle"><div className="shine"></div>Export CSV</button>
      </div>
    );
  }
}

export default Header;
