import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      This is the home page!
      <div class="fb-share-button" data-href="http://139.162.9.11:5000/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F139.162.9.11%3A5000%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      This is the about page!
      <div class="fb-share-button" data-href="http://139.162.9.11:5000/about/1" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F139.162.9.11%3A5000%2Fabout%2F1&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
    </p>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <h2>Contact</h2>
    <p>
      This is the contact us page!
    </p>
  </div>
)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about/1">About</a></li>
        <li><a href="/about/2">Contact</a></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </div>
  </Router>
)
export default App;