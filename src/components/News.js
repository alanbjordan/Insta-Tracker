import React, { Component } from 'react';
import '../App.css';
import './Component.css';

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
      'http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=3e5a4b43acad4e7485d9486c10fd4fc4'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          articles: data.articles,
        });
      });
  }

  render() {
    return (
      <div className='news'>
          {this.state.articles.map((item, index) => {
            return (
              <div className='container' key={index}>
                <h5 className='text'>{item.title}</h5>

                <a href={item.url} rel="noopener noreferrer" target='_blank'>
                  Read More
                </a>
                <p className='text'>{item.content}</p>
              </div>
            );
          })}
        ;
      </div>
    );
  }
}

export default News;
