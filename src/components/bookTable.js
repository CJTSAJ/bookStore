require('styles/bookTable.css');

import React from 'react';
import {Link} from 'react-router';
//import bookDetail from './bookDetail';
//let bookData = require('../data/bookData.json');

class BookTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchValue:'',
      selected:null,
      sortby:null,
      descending:false,
      edit:null,
      search:false,
      headers:['Book', 'Author', 'Language', 'Published', 'Sales'],
      bookList:[
        [
          'Dream of the Red Chamber',
          'Cao Xueqin',
          'Chinese',
          '1754-1791',
          '100 million'
        ],
        [
          'She:Adventure',
          'H. Rider Haggard',
          'English',
          '1887',
          '100 million'
        ],
        [
          'The Hobbit',
          'J.R.R Tolkien',
          'English',
          '1937',
          '100 million'
        ],
        [
          'And Then There Were None',
          'Agatha Christie',
          'English',
          '1939',
          '100 million'
        ],
        [
          'Le Petit Prince(The Little Prince)',
          'Antoine de Saint-Exupery',
          'French',
          '1943',
          '140 million'
        ],
        [
          'The Lord of Rings',
          'J.R.R Tolkien',
          'English',
          '1954-1955',
          '150 million'
        ],
        [
          'Harry Potter and the Philosopher\'s Stone',
          'J.K Rowling',
          'English',
          '1997',
          '107 million'
        ]]
    };
  }

  preSearchData: null

  toggleSearch(){
    if(this.state.search){
      this.setState({
        bookList:this.preSearchData,
        search:false
      });
      preSearchData = null;
    }else{
      this.preSearchData = this.state.bookList;
      this.setState({
        search: true
      });
    }
  }

  showEditer(e){
    this.setState({edit:{
      row: parseInt(e.target.dataset.row, 10),
      cell: e.target.cellIndex
    }});
  }

  save(e){
    e.preventDefault();
    var input = e.target.firstChild;
    var data = this.state.bookList.slice();
    data[this.state.edit.row][this.state.edit.cell] = input.value;
    this.setState({
      edit:null,
      bookList:data
    });
  }

  _sort(id){
    var column = document.getElementById(id).cellIndex;
    var data = this.state.bookList.slice();
    var descending = this.state.sortby === column && !this.state.descending;

    data.sort(function(a,b){
      return descending
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    });
    this.setState({
      bookList:data,
      sortby:column,
      descending:descending
    });
  }

 toggleSearch(){
   if(this.state.search){
     this.setState({
       bookList: this.preSearchData,
       search: false
     });
     this.preSearchData = null;
     return;
   }else{
     this.preSearchData = this.state.bookList;
     this.setState({
       search:true
     });
   }

   var needle = this.state.searchValue;
   needle = needle.toLowerCase();
   if(!needle){
     this.setState({bookList: this.preSearchData});
     return;
   }

   var idx = parseInt(this.state.selected);
   console.log({idx});
   var searchData = this.preSearchData.filter(
     function(row){
       return(
          row[idx].toString().toLowerCase().indexOf(needle) > -1);
     });
    this.setState({bookList: searchData});
 }

 handleInputChange(e){
   this.setState({
     searchValue:e.target.value
   });
 }

 handleSelectChange(e){
  this.setState({
    selected:e.target.value
  });
 }
 download(format, ev){
   var contents = format === 'json'
      ?JSON.stringify(this.state.bookList)
      :this.state.bookList.reduce(function(result, row){
        return result
          + row.reduce(function(rowresult, cell, idx){
            return rowresult
              + '"'
              + cell.replace(/"/g, '""')
              + '"'
              + (idx < row.length - 1 ? ',' : '');
          }, '')
        + '\n';
      }, '');
      var URL = window.URL || window.webkitURL;
      var blob = new Blob([contents],{type:'text/' + format});
      ev.target.href = URL.createObjectURL(blob);
      ev.target.download = 'data.' + format;
 }

  renderButton(){
    return(
      <div className="buttonBar">
        <div className="search_box">
          <input type="text" className="search_text fl" value={this.state.searchValue} onChange={this.handleInputChange.bind(this)} />
          <select id="selectSearch" onChange={this.handleSelectChange.bind(this)}>
            <option value="0">book</option>
            <option value="1">author</option>
            <option value="2">language</option>
            <option value="3">published</option>
            <option value="4">sales</option>
          </select>
          <button className="search buttonStyle" onClick={this.toggleSearch.bind(this)}><div className="shine"></div>Search</button>
        </div>
        <div className="export">
          <a className="exportJSON buttonStyle" onClick={this.download.bind(this,'json')} href="data.json"><div className="shine"></div>Export JSON</a>
          <a className="exportCSV buttonStyle" onClick={this.download.bind(this,'csv')} href="data.csv"><div className="shine"></div>Export CSV</a>
        </div>
      </div>
    )
  }

  renderTable(){
    return(
      <table className="relBookTable">
        <thead>
          <tr>{
            this.state.headers.map(function(title, idx){
              if(this.state.sortby === idx){
                title += this.state.descending ? '\u2191' : '\u2193';
              }
              return <th key={idx} id={idx} onClick={()=>{this._sort(idx);}}>{title}</th>;
            },this)
          }
          </tr>
        </thead>
        <tbody onDoubleClick={this.showEditer.bind(this)}>
          {this.state.bookList.map(function(row,rowidx){
            return(
              <tr key={rowidx}>{
                row.map(function(cell, idx){
                  var content = cell;
                  var edit = this.state.edit;
                  if(edit && edit.row === rowidx && edit.cell === idx){
                    content = (
                      <form onSubmit={this.save.bind(this)}>
                        <input type="text" defaultValue={cell}/>
                      </form>
                    );
                  }
                  return <td key={idx} data-row={rowidx}>{content}</td>;
                }, this)
              }
              </tr>
            );
          },this)}
        </tbody>
      </table>
    )
  }

  render(){
    return (
      <div className="bookTable">
        {this.renderButton()}
        {this.renderTable()}
      </div>
    );
  }
}

export default BookTable;

// <td>Book</td>
// <td>Author</td>
// <td>Language</td>
// <td>Published</td>
// <td>Sales</td>
// {
//   newArr
// }
/*var edit = this.state.edit;
if(edit && edit.row === rowidx && edit.cell === idx){
  content = (
    <form>
      <input type="text" defaultValue={cell} />
    </form>
  );
}*/

/*{
  row.map(function(cell,idx){
    var content = cell;
    return <td key={idx} data-row={rowidx}>{content}</td>;
  },this)}*/
  /*var newArr=[];
  this.state.bookList.forEach(function(value, index){
    newArr.push(<tbody key={index}>
                  <tr>
                    <td>{value.Book}</td>
                    <td>{value.Author}</td>
                    <td>{value.Language}</td>
                    <td>{value.Published}</td>
                    <td>{value.Sales}</td>
                  </tr>
                </tbody>)
  })*/
  /*<td key="0" data-row={rowidx}>{row[0]}</td>
  <td key="1" data-row={rowidx}>{row[1]}</td>
  <td key="2" data-row={rowidx}>{row[2]}</td>
  <td key="3" data-row={rowidx}>{row[3]}</td>
  <td key="4" data-row={rowidx}>{row[4]}</td>*/
  /*function(a,b){
    return descending
      ? (a[col] < b[col] ? 1 : -1)
      : (a[col] > b[col] ? 1 : -1);
  }*/
