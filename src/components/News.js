import React, { Component } from 'react';
import '../App.css';
import './Component.css';

let newsapiKey;
if (process.env.NODE_ENV !== 'build') {
  newsapiKey = process.env.REACT_APP_NEWS_API_KEY;
} else {
  newsapiKey = process.env.NEWS_API_KEY;
}

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${newsapiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles
        });
      });
  }

  render() {
    console.log(this.state.articles)
    return (
      <div>
        {/* <div className='cdcyttext'><h1>News Updates</h1></div> */}
        <div className='news'>       
            {this.state.articles.map((item, index) => {
              return (
                <div className='container' key={index}>
                  <h5 className='text'>{item.title}</h5>
                  <img src={item.urlToImage} className='newsImage'/>
                  <a href={item.url} rel="noopener noreferrer" target='_blank'>
                    Read More
                  </a>
                  <p className='text'>{item.content}</p>
                </div>
              );
            })}
          ;
        </div>
     </div> 
    );
  }
}

export default News;
