import { decorate, observable, action } from 'mobx';
import axios from 'axios';

class Store {
  searchParams = {
    query: null,
    after: null,
    before: null,
    author: null,
    sortby: null,
    page: 0
  };

  authors = [];

  results = [];

  displayNext = true;

  inspectVisible = false;

  inspectElement = {};

  // The function saves data in the search parameters
  onSelect = (stateName, page, data) => {
    this.searchParams.page = page;
    this.searchParams[stateName] = data;
    this.databaseSearch();
  };

  // The function changes of the pages
  changePage(diff) {
    if (this.searchParams.page + diff >= 0) {
      this.searchParams.page = this.searchParams.page + diff;
      this.databaseSearch();
    }
  }

  // The function adds the data into results array
  pushData(data) {
    data.forEach((entry) => {
      this.results.push(entry);
    });
  }

  // The function replaces the data into results array
  setData(data) {
    this.results = data;
  }

  // The function asks the api and takes the results from the querry and saves the data into
  // results array
  databaseSearch = () => {
    // http://localhost:3000/api/entries/search?query=test&after=2000-09-21&before=2060-09-21&author=rosvik&sortby=author&page=1

    const {
      query, after, before, author, sortby, page
    } = this.searchParams;
    const urlWithParams = new URL('http://localhost:3000/api/entries/search');
    if (query) urlWithParams.searchParams.append('query', query);
    if (after) urlWithParams.searchParams.append('after', after);
    if (before) urlWithParams.searchParams.append('before', before);
    if (author) urlWithParams.searchParams.append('author', author);
    if (sortby) urlWithParams.searchParams.append('sortby', sortby);
    if (page) urlWithParams.searchParams.append('page', page);
    axios.get(urlWithParams.href).then((response) => {
      // this.setData(response.data);
      if (page === 0) {
        this.setData(response.data);
      } else {
        this.pushData(response.data);
      }
      // Show or hide the 'more results' button
      this.displayNext = response.data.length === 5;
    });
  };

  // Gets the authors from the API
  getAuthors = () => {
    const url = 'http://it2810-19.idi.ntnu.no:3000/api/authors';
    axios.get(url).then((response) => {
      const newAuthors = response.data.map(val => ({ value: val.author, label: val.author }));
      newAuthors.unshift({ value: '', label: 'All authors' });
      this.authors = newAuthors;
    });
  };
}

// Defines which variables will be available for different components
decorate(Store, {
  searchParams: observable,
  val: observable,
  results: observable,
  displayNext: observable,
  inspectVisible: observable,
  authors: observable,
  changePage: action,
  pushData: action,
  setData: action,
  onSelect: action
});

export default Store;
