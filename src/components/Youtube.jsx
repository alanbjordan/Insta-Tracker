import React, { Component } from 'react';
import './Component.css';

let apiKey;
let playlistIdKey;
if (process.env.NODE_ENV !== 'build') {
  apiKey = process.env.REACT_APP_API_KEY;
  playlistIdKey = process.env.REACT_APP_PLAYLISTID_KEY;
} else {
  apiKey = process.env.API_KEY;
  playlistIdKey = process.env.PLAYLISTID_KEY;
}

const maxResults = 10;
const cdcURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistIdKey}&key=${apiKey}`

class Youtube extends Component {

    state = {
        ytResults: []
    }

    componentDidMount = async() => {
        const response = await fetch(cdcURL);
        const data = await response.json();
        const ytResults = data.items.map(vid => 'https://www.youtube.com/embed/' + vid.snippet.resourceId.videoId)
        this.setState({
            ytResults
        })
        return ytResults;
    }

    render() {
        const { ytResults } = this.state
        return (
            <div>   
                <div className="youtube">
                    {ytResults.map((link, i) => {
                            var frame = <div key={i}><iframe title= "iframe" width="360" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><hr /><hr /></div>
                            return frame;
                        })}
                    {this.frame}               
                </div>
            </div>              
        )
    }
}

export default Youtube;