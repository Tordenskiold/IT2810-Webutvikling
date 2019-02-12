import React from "react";

class PictureFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24"
    };
  }
  componentDidMount() {
    let request = new XMLHttpRequest();
    request.open("GET", this.props.src);
    request.setRequestHeader("Content-Type", "image/svg+xml");
    let that = this;
    request.addEventListener("load", function(event) {
      let response = event.target.responseText;
      let doc = new DOMParser();
      let xml = doc.parseFromString(response, "image/svg+xml");
      if (xml.firstChild.nodeName !== "svg") {
        console.error(that.props.src + " is not a valid svg file.");
        return false;
      }
      let viewBox = xml.firstChild.getAttribute("viewBox");
      viewBox = viewBox ? viewBox.split(" ") : "";
      let width = xml.firstChild.getAttribute("width") || viewBox[2] || 24;
      let height = xml.firstChild.getAttribute("height") || viewBox[3] || 24;
      viewBox = viewBox
        ? viewBox.join(" ")
        : ("0 0 " + width + " " + height).replace(/px/g, "");
      that.setState({
        content: xml.firstChild.innerHTML,
        width,
        height,
        viewBox
      });
    });
    console.log("hi");
    request.send();
    console.log("h4");
    console.log(request.readyState);
  }

  selectRandom(category) {
    let book = [
      "/pics/book/1.svg",
      "/pics/book/2.svg",
      "/pics/book/3.svg",
      "/pics/book/4.svg"
    ];
    let iphone = [
      "/pics/iphone/1.svg",
      "/pics/iphone/2.svg",
      "/pics/iphone/3.svg",
      "/pics/iphone/4.svg"
    ];
    let mac = [
      "/pics/mac/1.svg",
      "/pics/mac/2.svg",
      "/pics/mac/3.svg",
      "/pics/mac/4.svg"
    ];
    switch (category) {
      case "book":
        return book[Math.floor(Math.random() * book.length)];
      case "iphone":
        return iphone[Math.floor(Math.random() * iphone.length)];
      case "mac":
        return mac[Math.floor(Math.random() * mac.length)];
      default:
        return;
    }
  }

  render() {
    return React.createElement("svg", {
      className: this.props.className,
      viewBox: this.state.viewBox,
      width: this.state.width,
      height: this.state.height,
      dangerouslySetInnerHTML: { __html: this.state.content }
    });
  }
}
export default PictureFetch;
