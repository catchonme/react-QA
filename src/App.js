import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { chooseAnswer } from './actions'
import Question from './components/Question'

const Home = () => (
  <Router>
    <div className="home_body">
      <div className='top_tips'><div className="num_tip">第一周</div> </div>
      <div className='home_logo item_container_style'></div>
      <Link to="/question/1"><div className="start button_style"></div></Link>
      <Route path="/question-list/:id" component={QuestionList}/>
    </div>
  </Router>
)

const QuestionList = ({ match }) => {

  const getCurrentQuestion = (questions, id) => {
    return questions.itemDetail[id];
  }

  const mapStateToProps = (state) => ({
    question: getCurrentQuestion(state.questions, match.params.id)
  })

  const mapDispatchToProps = {
    onClick: chooseAnswer
  }

  const questionList = connect({
    mapStateToProps,
    mapDispatchToProps
  })(Question)

  // export default questionList;

  return (
    <Router>
      <div className="question_body">
        <div className='top_tips'><div className="num_tip">题目{match.params.id}</div> </div>
        <div className='item_back item_container_style'></div>
        <div className='item_list_container'>
          <header className='item_title'>题目</header>
          <ul>

          </ul>
        </div>
        <Link to="/result"><div className="submit_item button_style"></div></Link>
        <Route path="/result" component={Result}/>
      </div>
    </Router>
  )
}


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
