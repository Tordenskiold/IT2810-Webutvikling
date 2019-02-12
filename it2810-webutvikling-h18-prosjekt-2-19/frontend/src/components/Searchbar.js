import React from 'react';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

//renders the searchbar in the website 
  render() {
    const { onSearch } = this.props;
    const { value } = this.state;
    return (
      <MuiThemeProvider>
        <SearchBar
        id="1"
          className="MainSearch"
          onChange={value => this.setState({ value })}
          onRequestSearch={() => onSearch(value)}
          style={{
            margin: '0 auto',
            marginTop: '40px',
            maxWidth: 800
          }}
        />
      </MuiThemeProvider>
    );
  }
}
Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Searchbar;
