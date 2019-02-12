/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable consistent-return */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';
import '../css/Display.css';
import { observer } from 'mobx-react';

//When you click on an entry then you get the readme
class Display extends React.Component {

//Runs the component 
  componentDidMount() {
    const { store } = this.props;
    store.databaseSearch();
  }

//Function for sending the entry to the store
  openInspect = (e, result) => {
    e.preventDefault();
    const { store } = this.props;
    store.inspectElement = result;
    store.inspectVisible = true;
  };


  render() {
    const { store } = this.props;
    const { results } = store;
    if (!results.length) {
      return null;
    }
  //Shows the display for the component that has been clicked on 
    return results.map(result => (
      <div id="displayDiv" className="result" key={result.id.toString()}>
        <h3>
          <a className={result.id} onClick={e => this.openInspect(e, result)}>
            {`${result.author}/${result.name}`}
          </a>
        </h3>
        <p className="info">
          By
          {' '}
          <a className="colored_url" href={`https://github.com/${result.author}`}>
            {`@${result.author}`}
          </a>
          {' added on '}
          {result.timestamp.substring(0, 10)}
        </p>

        {/* <p dangerouslySetInnerHTML={{ __html: result.content_html }} /> */}
        <a onClick={e => this.openInspect(e, result)}>
          <code>
            {result.content.substring(0, 300)}
            ...
          </code>
        </a>

        <p className="meta">
          <a className="colored_url" href={`https://github.com/${result.author}/${result.name}`}>
            <img className="resultFavicon" src="GitHub-logo.png" alt="GitHub" />
            {`https://github.com/${result.author}/${result.name}`}
          </a>
        </p>
      </div>
    ));
  }
}

observer(Display);
Display.propTypes = {
  store: PropTypes.any.isRequired
};

export default Display;
