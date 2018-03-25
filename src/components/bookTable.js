require('styles/bookTable.css');

import React from 'react';
import {Link} from 'react-router';
//import bookDetail from './bookDetail';
//let bookData = require('../data/bookData.json');

class BookTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      bookList:[
        {
          'Book':'Dream of the Red Chamber',
          'Author':'Cao Xueqin',
          'Language':'Chinese',
          'Published':'1754-1791',
          'Sales':'100 millon'
        },
        {
          'Book':'She:Adventure',
          'Author':'H. Rider Haggard',
          'Language':'English',
          'Published':'1887',
          'Sales':'100 million'
        },
        {
          'Book':'The Hobbit',
          'Author':'J.R.R Tolkien',
          'Language':'English',
          'Published':'1937',
          'Sales':'100 million'
        },
        {
          'Book':'And Then There Were None',
          'Author':'Agatha Christie',
          'Language':'English',
          'Published':'1939',
          'Sales':'100 million'
        },
        {
          'Book':'Le Petit Prince(The Little Prince)',
          'Author':'Antoine de Saint-Exupery',
          'Language':'French',
          'Published':'1943',
          'Sales':'140 million'
        },
        {
          'Book':'The Lord of Rings',
          'Author':'J.R.R Tolkien',
          'Language':'English',
          'Published':'1954-1955',
          'Sales':'150 million'
        },
        {
          'Book':'Harry Potter and the Philosopher\'s Stone',
          'Author':'J.K Rowling',
          'Language':'English',
          'Published':'1997',
          'Sales':'107 million'
        }]
    };

  }

  render(){
    var newArr=[];
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
    })
    return (
      <div className="bookTable">
        <table>
          <tbody>
          <tr>
            <td>Book</td>
            <td>Author</td>
            <td>Language</td>
            <td>Published</td>
            <td>Sales</td>
          </tr>
          </tbody>
          {
            newArr
          }
        </table>
      </div>
    );
  }
}

export default BookTable;
