import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Display from './components/Display';
import Search from './components/Search';
import Store from './Store';
import URLMenu from './components/URLMenu';
import Inspect from './components/Inspect';
import './css/App.css';

const appStore = new Store();

class App extends Component {
  state = {
    data: {}
  };

  onSearch = (data_) => {
    this.setState({
      data: data_
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div id="div1" className="App">
        <a id="url" href="/">
          <img className="logo" src="logo.svg" alt="CrocCrocGo" />
        </a>
        <h1>CrocCrocGo</h1>

        {/* Search section */}
        <Search onSearch={this.onSearch} store={appStore} />

        {/* Results */}
        <Display data={data} store={appStore} />

        {/* Pagination */}
        {appStore.displayNext ? (
          <button
            id="next"
            type="submit"
            onClick={() => appStore.changePage(1)}
            disabled={appStore.searchParams.maxpage >= 0}
          >
            More Results
          </button>
        ) : (
          <p>That&apos;s all the results</p>
        )}
        <p id="p" className="pageLabel">
          Page
          {` ${appStore.searchParams.page + 1}`}
        </p>

        {/* Modals */}
        <URLMenu store={appStore} />
        <Inspect store={appStore} />
      </div>
    );
  }
}

observer(App);

export default App;
