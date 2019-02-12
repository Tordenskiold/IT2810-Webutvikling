import React from 'react';

class TextLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            text: [],
            author: ""
        };
    }

    componentDidMount() {
        this.fetchText(this.selectRandomText(this.props.category));
    }

    componentDidUpdate(prevProps) {
        if (this.props.category !== prevProps.category) {
            this.fetchText(this.selectRandomText(this.props.category));
        }
    }

    fetchText(url) {
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            text: result.text,
                            author: result.author
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

    selectRandomText(category) {
        let haiku = [
            "/media/text/haiku/buson.json",
            "/media/text/haiku/matsuo.json",
            "/media/text/haiku/shiki.json",
            "/media/text/haiku/soseki.json"
        ];
        let music = [
            "/media/text/music/macarena.json",
            "/media/text/music/safety_dance.json",
            "/media/text/music/stupid_hoe.json",
            "/media/text/music/we_built_this_city.json"
        ];
        let poems = [
            "/media/text/poems/garborg.json",
            "/media/text/poems/hagerup.json",
            "/media/text/poems/overland.json",
            "/media/text/poems/vinje.json"
        ];
        switch (category) {
            case "haiku":
                return haiku[Math.floor(Math.random() * haiku.length)];
            case "music":
                return music[Math.floor(Math.random() * music.length)];
            case "poem":
                return poems[Math.floor(Math.random() * poems.length)];
            default:
                return;
        }

    }

    render() {
        const {error, isLoaded, text, author} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <p>Author: {author}</p>
                    <pre>
                        {text.join("\n")}
                    </pre>
                </div>
            );
        }
    }
}
export default TextLoader;
