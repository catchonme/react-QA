import React, { Component } from 'react'
import { connect } from "react-redux";
import {changeActive, chooseAnswer} from "../actions";
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import Result from '../components/Result'

class Question extends Component {

  render() {
    const { match, active, changeQuestionActive} = this.props;
    const question = this.props.questions[match.params.id];
    const chooseType = (index) => {
      switch(index) {
        case 0 : return 'A';break;
        case 1 : return 'B';break;
        case 2 : return 'C';break;
        case 3 : return 'D';break;
        default : return '';
      }
    }

    return (
      <Router>
        <div className="question_body">
          <div className='top_tips'><div className="num_tip">题目{match.params.id}</div> </div>
          <div className='item_back item_container_style'></div>
          <div className='item_list_container'>
            <div className="item_title">{question.topic_name}</div>
            <ul>
              {
                question.topic_answer.map((option, index) => {
                  return <li className="item_list" onClick={() => changeQuestionActive(index)} key={index}>
                    <span className={active === index ? 'has_choosed option_style' : 'option_style'}>{chooseType(index)}</span>
                    <span className="option_detail">{option.answer_name}</span>
                  </li>
                })
              }
            </ul>
          </div>
          <Link to="/result"><div className="submit_item button_style"></div></Link>
          <Route path="/result" component={Result}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  active: state.questions.active,
  questions: state.questions.itemDetail
})

const mapDispatchToProps = {
  onClick: chooseAnswer,
  changeQuestionActive : changeActive
}

const QuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default QuestionList
