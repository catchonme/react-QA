import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'

const Home = () => (
  <Router>
    <div className="home_body">
      <div className='top_tips'><div className="num_tip">第一周</div> </div>
      <div className='home_logo item_container_style'></div>
      <Link to="/question"><div className="start button_style"></div></Link>
      <Route path="/question" component={Question}/>
    </div>
  </Router>
)

const Question = () => (
  <Router>
    <div className="question_body">
      <div className='top_tips'><div className="num_tip">题目</div> </div>
      <div className='item_back item_container_style'></div>
      <Link to="/result"><div className="submit_item button_style"></div></Link>
      <Route path="/result" component={Result}/>
    </div>
  </Router>
)

const Result = () => {
  const showCover = (e) => {
    e.stopPropagation();
  }

  return (
    <div className="result_body">
      <div className="your_scores_container">
        <header class="your_scores"><span className="score_num">20</span><span className="fenshu">分！</span></header>
        <div class="result_tip">这里是提示</div>
      </div>
      <div className="share_button" onClick={showCover}></div>
      <div className="share_code">
        <header className="share_header">关注葡萄之家，获取答案。</header>
        <img src={require('./images/4-4.png')} height="212" width="212" className="code_img"/>
        {/*<div className="share_img"></div>*/}
      </div>
      {/*<div className="share_cover" onClick={showCover}>
        <div className="share_img"></div>
      </div>*/}
    </div>
  )
}

export default Home;
