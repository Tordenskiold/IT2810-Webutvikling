import React from 'react';

class Categories extends React.Component {
  render() {
    return(
      <div className="categories">
        <div>
          <div className="header">Image</div>
          <div><input defaultChecked type="radio" value="book" name="image" id="image1" onChange={this.props.imageRadioButtonChanged}></input>
          <label htmlFor="image1">Books</label>
          </div>
          <div>
            <input type="radio" value="iphone" name="image" id="image2" onChange={this.props.imageRadioButtonChanged}></input>
            <label htmlFor="image2">iPhones</label>
          </div>
          <div>
            <input type="radio" value="mac" name="image" id="image3" onChange={this.props.imageRadioButtonChanged}></input>
            <label htmlFor="image3">Macs</label>
          </div>
        </div>

        <div>
          <div className="header">Text</div>
          <div>
            <input defaultChecked type="radio" value="haiku" name="text" id="text1" onChange={this.props.textRadioButtonChanged}></input>
            <label htmlFor="text1">Haiku</label>
          </div>
          <div>
            <input type="radio" value="music" name="text" id="text2" onChange={this.props.textRadioButtonChanged}></input>
            <label htmlFor="text2">Music</label>
          </div>
          <div>
            <input type="radio" value="poem" name="text" id="text3" onChange={this.props.textRadioButtonChanged}></input>
            <label htmlFor="text3">Poems</label>
          </div>
        </div>

        <div>
          <div className="header">Audio</div>
          <div>
            <input defaultChecked type="radio" value="8-bit" name="audio" id="audio1" onChange={this.props.audioRadioButtonChanged}></input>
            <label htmlFor="audio1">8-bit</label>
          </div>
          <div>
            <input type="radio" value="drums" name="audio" id="audio2" onChange={this.props.audioRadioButtonChanged}></input>
            <label htmlFor="audio2">Drums</label>
          </div>
          <div>
            <input type="radio" value="party" name="audio" id="audio3" onChange={this.props.audioRadioButtonChanged}></input>
            <label htmlFor="audio3">Party</label>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
