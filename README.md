# Front End Libraries Projects - Build a Random Quote Machine

Objective: Build a CodePen.io app that is functionally similar to this: [https://codepen.io/freeCodeCamp/full/qRZeGZ](https://codepen.io/freeCodeCamp/full/qRZeGZ).

Fulfill the below user stories and get all of the tests to pass. Give it your own personal style.

You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

User Story

>1. I can see a wrapper element with a corresponding id="quote-box".
>
>2. Within #quote-box, I can see an element with a corresponding id="text".
>
>3. Within #quote-box, I can see an element with a corresponding id="author".
>
>4. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
>
>5. Within #quote-box, I can see a clickable element with a corresponding id="tweet-quote".
>
>6. On first load, my quote machine displays a random quote in the element with id="text".
>
>7. On first load, my quote machine displays the random quote's author in the element with id="author".
>
>8. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
>
>9. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
>
>10. I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in it's href attribute to tweet the current quote.
>
>11. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

**Notes:**

Using CDN of freeCodeCamp to test

- On public/index.html

  ```html
  <body>
    <div id=”root”></div>
    <script src=https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js></script>
  ```

Using Font Awesome

- Method 1:

  `npm i --save font-awesome`

  On src/App.js,

  ```jsx
  import ‘font-awesome/css/font-awesome.min.css’;

  <i className=”fa fa-quote-left” />
  <i className=”fa fa-twitter fa-2x” />
  ```

- Method 2:

  `npm i --save @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons`

  On src/App.js,

  ```jsx
  import { FontAwesomeIcon } from ‘@fortawesome/react-fontawesome’;
  import { faQuoteLeft } from ‘@fortawesome/free-solid-svg-icons’;
  import { faTwitter } from ‘@fortawesome/free-brands-svg-icons’;

  <FontAwesomeIcon icon={faQuoteLeft} />
  <FontAwesomeIcon icon-{faTwitter} size=”2x” {/* color=”#fff” */} />
  ```

Importing object from external JS file to bring data

- On src/quotes.js

  ```jsx
  export const quotes = {
  quote: [“sentence”, …],
  author: [“name”, …]
  }
  export default { quotes }
  ```

- On src/App.js

  ```jsx
  import Quotes from ‘./quotes.js;
  const quotes = Quotes.quotes;
  ```

Applying random font-color and background-color

- On src/App.js

  ```jsx
  let color = ‘’, bgColor = ‘’;
  class App extends React.Component {

    random_quote() {
      let random_num = Math.random();
      color = “hsl(“ + Math.floor(random_num * 360) + “,100%,20%)”;
      bgColor = “hsl(“ + Math.floor(random_num * 360) + “,100%,97%)”;

      const body = document.querySelector(‘body’);
      body.style.setProperty(‘background-color’, color);
    }

    render() {
      <div id=”quote-box” style={{ color: color, backgroundColor: bgColor }}>
  ```
