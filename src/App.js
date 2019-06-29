import React from 'react';
import './App.css';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Quotes from './quotes.js';

const quotes = Quotes.quotes;

let index = 0,
    color = '',
    bgColor = '',
    tweetHref = 'https://twitter.com/intent/tweet?hashtags=quotes&text="';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idx: 0,
      quote: '',
      author: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.random_quote = this.random_quote.bind(this);
  }
  random_quote() {
    let random_number = Math.random();
    index = Math.floor(random_number * quotes.quote.length);
    if (this.state.idx === index) {
      this.random_quote();
    }
    const body = document.querySelector('body');
    this.setState({
      idx: index,
      quote: quotes.quote[index],
      author: quotes.author[index]
    });
    
    color = "hsl(" + Math.floor(random_number * 360) + ",100%,20%)";
    bgColor = "hsl(" + Math.floor(random_number * 360) + ",100%,97%)";
    console.log('color: ' + color);
    body.style.setProperty('background-color', color);
  }
  handleClick() {
    this.random_quote();
  }
  render() {
    if (this.state.quote === '') {
      this.random_quote();
    }
    return (
      <div id="quote-box" style={ { color: color, backgroundColor: bgColor } }>
        {/* <p id="text"><i className="fa fa-quote-left" /> {this.state.quote}</p> */}
        <p id="text"><FontAwesomeIcon icon={faQuoteLeft} /> {this.state.quote}</p>
        <p id="author">- {this.state.author}</p>
        <div className="buttons">
          <button id="new-quote" onClick={this.handleClick} style={ { color: bgColor, backgroundColor: color } }>New quote</button>
          <a id="tweet-quote" href={tweetHref + this.state.quote + '" ' + this.state.author} target="_blank" rel="noopener noreferrer" style={ { color: bgColor, backgroundColor: color } }>
            {/* <i className="fa fa-twitter fa-2x"></i> */}
            <FontAwesomeIcon icon={ faTwitter } size="2x" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
