import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {changeActive, chooseAnswer} from "../actions";
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import Result from '../components/Result'

class SingleQuestion extends Component {

  static propTypes = {
    questions: PropTypes.array.isRequired,
    changeQuestionActive: PropTypes.func.isRequired,
  }

  state = {
    question_index: 0,
    question:{}
  }

  incrementIndex = (question_index) => {
    const { questions } = this.props
    this.setState({question_index: question_index + 1, question:questions[question_index + 1]})
  }

  renderButton({question_index, length}) {
    if (question_index < (length-1)) {
      return (
        <div className='next_item button_style' onClick={() => this.incrementIndex(question_index)}></div>
      )
    } else {
      return (
        <div>
          <Link to='/result'><div className='submit_item button_style'></div></Link>
          <Route path='/result' component={Result}/>
        </div>
      )
    }
  }

  componentWillMount() {
    const { questions } = this.props;
    const {question_index} = this.state
    const length = questions.length;
    const temp_question_index = question_index > (length-1) ? (length-1) : question_index;
    const question = questions[temp_question_index];
    this.setState({question_index:temp_question_index, question:question})
  }

  render() {
    const { active, questions, changeQuestionActive } = this.props
    const length = questions.length;
    const { question, question_index } = this.state
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
          <div className='top_tips'><div className="num_tip">题目</div> </div>
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
          {this.renderButton({question_index, length})}
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

const Question = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleQuestion)

export default Question
