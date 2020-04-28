import React, { Component } from 'react';

const API = 'AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0'
const playlistId = 'PLvrp9iOILTQaJa78zFQ0QgvShQ2HEwHxP'
const maxResults = 10;
const whoChannelId = 'UC07-dOwgza1IguKA86jqxNA'
// CDC Playlist URL:
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLvrp9iOILTQaJa78zFQ0QgvShQ2HEwHxP&key=AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0
// WHO Playlist URL:
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyCF6-Gp5GftHubZ6danNcSYQATv47ZtDS0&channelId=UC07-dOwgza1IguKA86jqxNA&part=snippet,id&order=date&maxResults=5

const cdcURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${API}`
const whoURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${whoChannelId}&part=snippet,id&order=date&maxResults=${maxResults}`

class Youtube extends Component {

    state = {
        ytResults: []
    }

    cdcClick = async() => {
        const response = await fetch(cdcURL);
        const data = await response.json();
        const ytResults = data.items.map(vid => 'https://www.youtube.com/embed/' + vid.snippet.resourceId.videoId)
        this.setState({
            ytResults
        })
        console.log(this.state.ytResults);
        return ytResults;
    }

    whoClick = async() => {
        const response = await fetch(whoURL);
        const data = await response.json();
        const ytResults = data.items.map(vid => 'https://www.youtube.com/embed/' + vid.id.videoId)
        this.setState({
            ytResults
        })
        console.log(this.state.ytResults);
        return ytResults;
    }

    render() {
        // console.log(URL);
        const { ytResults } = this.state
        return (
            <div className="youtube">
                <div>
                    <button onClick={this.cdcClick} type="button" class="btn btn-outline-danger">
                        CDC Videos
                    </button>
                    <button onClick={this.whoClick} id="whoButton" class="btn btn-outline-danger">
                        WHO Videos
                    </button>
                </div>     
                {
                    ytResults.map((link, i) => {
                        var frame = <div key={i}><iframe title= "iframe" width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                        return frame;
                    })
                }
                {this.frame}
                                   
            </div>
        )
    }
}


export default Youtube;