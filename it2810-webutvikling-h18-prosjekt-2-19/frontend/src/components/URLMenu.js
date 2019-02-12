import React from 'react';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import '../css/URLMenu.css';

class URLMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { URL: ' ', open: false };
  }

  handleChange = (event) => {
    this.setState({ URL: event.target.value }, () => {});
  };

  //function for adding the url to the database
  handleClick = () => {
    const { URL } = this.state;
    const { store } = this.props;
    if (!this.validateURL(URL)) {
      alert('The url you provided is not valid');
      this.handleClose();
    } else {
      axios
        .post('http://localhost:3000/api/entries/', {
          url: `https://${URL}`
        })
        .then((response) => {
          console.log('response');
          console.log(response);
        })
        .catch((error) => {
          console.log(error.response);

          store.getAuthors();
          store.databaseSearch();
          this.handleClose();
        });
      // alert(`URL SUBMITTED: ${URL}`);
    }
  };

//Closes pop-up form
  handleClose = () => {
    this.setState({ open: false });
  };
//Opens pop-up form
  handleOpen = () => {
    this.setState({ open: true });
  };

// valIdates the URL entered in the form
  validateURL = (inputUrl) => {
    if (
      inputUrl.split('/')[0] !== 'raw.githubusercontent.com'
      || !inputUrl.split('/')[1]
      || !inputUrl.split('/')[2]
      || !inputUrl.split('/')[3]
      || inputUrl.split('/')[3] !== 'master'
      || !inputUrl.split('/')[4]
      || inputUrl.split('/')[4] !== 'README.md'
    ) {
      return false;
    }
    return true;
  };

//Renders the add button
//Creats the form for adding new urls to the database
  render() {
    const { open } = this.state;
    return (
      <div id="urldiv">
        <button type="button" onClick={this.handleOpen} className="submitButton">
          {open ? '-' : '+'}
        </button>
        <Modal id="modal" open={open} onClose={this.handleClose}>
          <div className="paper">
            <div className="test">
              <h1>Add new URL</h1>
            </div>
            <label className="label" id="2">
              URL:
              <input className="modalInput" type="text" name="name" onChange={this.handleChange} />
            </label>
            <div className="format">
              <label>Format: raw.githubusercontent.com/user/projectName/master/README.md</label>
            </div>
            <div className="buttonDiv">
              <input
                className="modalButton"
                type="submit"
                name="Submit"
                onClick={this.handleClick}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default URLMenu;
