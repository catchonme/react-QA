import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import QuestionList from '../containers/QuestionList'

const Home = () => (
  <Router>
    <div className="home_body">
      <div className='top_tips'><div className="num_tip">第一周</div> </div>
      <div className='home_logo item_container_style'></div>
      <Link to="/question-list/1"><div className="start button_style"></div></Link>
      <Route path="/question-list/:id" component={QuestionList}/>
    </div>
  </Router>
)

export default Home;
