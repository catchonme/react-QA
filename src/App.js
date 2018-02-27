import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

const Home = () => (
  <Router>
    <div>
      <div className='top_tips'><div className="num_tip">第一周</div> </div>
      <div className='home_logo item_container_style'></div>
      <div className="start button_style"></div>
    </div>
  </Router>
)

const Question = () => (
  <div>
    <h3>question</h3>
  </div>
)

const Result = () => (
  <div>
    <h3>result</h3>
  </div>
)

export default Home;
