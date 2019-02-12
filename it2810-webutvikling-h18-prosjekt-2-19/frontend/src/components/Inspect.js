/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import '../css/Inspect.css';
import { observer } from 'mobx-react';
import Modal from '@material-ui/core/Modal';

// When a entry is clicked, this component is rendered with information on the selected README
class Inspect extends React.Component {
  // When the modal is closed
  handleClose = () => {
    const { store } = this.props;

    store.inspectVisible = false;
  };

  render() {
    const { store } = this.props;
    const element = store.inspectElement;

    return (
      <div>
        <Modal open={store.inspectVisible} onClose={this.handleClose}>
          <div className="paper container">
            <div className="content">
              <h2>
                <a href={`https://github.com/${element.author}`}>{`${element.author}`}</a>
                {' / '}
                <a href={`https://github.com/${element.author}/${element.name}`}>{element.name}</a>
              </h2>

              <p className="info">
                {`
                  Readme #${element.id}
                  added on ${element.timestamp}
                `}
              </p>

              <p className="readmeHeader">
                Readme.md [
                <a href={element.url}>view raw</a>
]
              </p>
              <div
                className="readmeHtml"
                dangerouslySetInnerHTML={{ __html: element.content_html }}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

observer(Inspect);

Inspect.propTypes = {
  store: PropTypes.any.isRequired
};

export default Inspect;
