import React from 'react';

class Tabs extends React.Component {
  render() {
    return(
      <div className="tabs">
        <button onClick={() => this.props.onClick(0)} className={this.props.tabClass0}>Tab 1</button>
        <button onClick={() => this.props.onClick(1)} className={this.props.tabClass1}>Tab 2</button>
        <button onClick={() => this.props.onClick(2)} className={this.props.tabClass2}>Tab 3</button>
        <button onClick={() => this.props.onClick(3)} className={this.props.tabClass3}>Tab 4</button>
      </div>
    );
  }
}

export default Tabs;
