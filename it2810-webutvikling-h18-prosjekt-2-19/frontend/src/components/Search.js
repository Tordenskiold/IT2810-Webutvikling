/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'simple-flexbox';
import { observer } from 'mobx-react';
import SearchBar from './Searchbar';
import Dropdown from './Dropdown';
import Calendar from './Calendar';
import '../css/App.css';

// Search function for the website
class Search extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.getAuthors();
  }

  // Searches for specific querry, takes in the input form the user and saves it to the store
  onQuerySearch = query => this.props.store.onSelect('query', 0, query);

  // Searches for specific users, takes in the input form the user and saves it to the store
  // Drop Down menu parameter
  onSelectUser = user => this.props.store.onSelect('author', 0, user);

  // Searches for specific sorting parameters, takes in the input form the user and saves it to
  // the store
  // Drop Down menu parameter
  onSelectOrder = order => this.props.store.onSelect('sortby', 0, order);

  // Search parameter for the date
  onSelectBefore = timestamp => this.props.store.onSelect('before', 0, timestamp);

  // Search parameter for the date
  onSelectAfter = timestamp => this.props.store.onSelect('after', 0, timestamp);

  // Search parameter for the page
  onSelectPage = page => this.props.store.onSelect('page', this.props.store.searchParams.page + page, 'none');

  render() {
    const { store } = this.props;
    const { authors } = store;

    let authorOptions = [];
    if (authors) authorOptions = authors;

    // Drop Down menu parameters
    const orderBy = [
      { value: 'timestamp', label: 'Date' },
      { value: 'author', label: 'User' },
      { value: 'name', label: 'Title' }
    ];

    // renders the searchbar
    return (
      <div className="App">
        <SearchBar onSearch={this.onQuerySearch} />
        <Row horizontal="center" className="Row">
          <div className="firstDiv">
            <label>From </label>
            <Calendar onSelect={this.onSelectAfter} />
          </div>
          <div className="myDiv">
            <label>to </label>
            <Calendar onSelect={this.onSelectBefore} />
          </div>
          <label className="myLabel">User</label>
          <div id="dropdown1" className="myDivDropdown">
            <Dropdown options={authorOptions} onSelect={this.onSelectUser} />
          </div>
          <label className="myLabel">Sort by</label>
          <div id="dropdown2" className="myDivDropdown">
            <Dropdown options={orderBy} onSelect={this.onSelectOrder} />
          </div>
        </Row>
      </div>
    );
  }
}

observer(Search);
Search.propTypes = {
  store: PropTypes.any.isRequired
};

export default Search;
