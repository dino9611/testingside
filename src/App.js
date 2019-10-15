import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Test from './redustes'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './redux/reducers'
import thunk from 'redux-thunk'
const store =createStore(Reducer,{},applyMiddleware(thunk))
// import {
//   WhatsappShareButton,
//   WhatsappIcon
// } from 'react-share';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      This is the home page!
      sh
      <a href={`https://api.whatsapp.com/send?text=http%3A%2F%2F139.162.9.11%3A5000%2F`} rel="noopener noreferrer" target="_blank">WA</a>
      <div class="fb-share-button" data-href="http://139.162.9.11:5000/" data-layout="button_count" data-size="small">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F139.162.9.11%3A5000%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
      </div>
      {/* <WhatsappShareButton className='ml-5'title='ayam'  url={`http%3A%2F%2F139.162.9.11%3A5000%2F`}>
          <WhatsappIcon size='30'/>
      </WhatsappShareButton> */}
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      This is the about page!
      {/* <WhatsappShareButton className='ml-5'title='ayam'  url={`http%3A%2F%2F139.162.9.11%3A5000%2Fabout%2F1`}>
          <WhatsappIcon size='30'/>
      </WhatsappShareButton> */}
      <a href={`https://api.whatsapp.com/send?text=http%3A%2F%2F139.162.9.11%3A5000%2Fabout%2F1`} rel="noopener noreferrer" target="_blank">WA</a>
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
  <Provider store={store}>
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
        <Route path='/test' component={Test}/>
      </div>
    </Router>
  </Provider>
)
export default App;