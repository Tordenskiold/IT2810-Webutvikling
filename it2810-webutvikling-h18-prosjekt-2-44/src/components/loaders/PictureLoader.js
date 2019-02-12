import React from "react";

class PictureLoader extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            text: ""
        };
    }

    componentDidMount() {
        this.fetchText(this.selectRandom(this.props.category));
    }

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.fetchText(this.selectRandom(this.props.category));
        }
    }

    fetchText(url) {
        if (url) {
            fetch(url)
                .then(res => res.text())
                .then(
                    (result) => {
                      this.setState({
                            isLoaded: true,
                            text: result
                        });
                    }, (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }
    }

  selectRandom(category) {
    let book = [
      "/media/pics/book/2.svg",
      "/media/pics/book/4.svg"
    ];
    let iphone = [
      "/media/pics/iphone/2.svg",
      "/media/pics/iphone/3.svg",
      "/media/pics/iphone/4.svg"
    ];
    let mac = [
      "/media/pics/mac/2.svg",
      "/media/pics/mac/3.svg",
      "/media/pics/mac/4.svg"
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
    const {error, isLoaded, text} = this.state;
      if(error) {
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div>Loading...</div>
      } else {
          return (
              <div dangerouslySetInnerHTML={{__html: text}} />
          );
      }
  }
}
export default PictureLoader;
