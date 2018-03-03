import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { saveAnswer } from "../actions";
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import Result from '../containers/Result'

class SingleQuestion extends Component {

  static propTypes = {
    questions: PropTypes.array.isRequired,
    saveAnswer: PropTypes.func.isRequired,
  }

  state = {
    question_index: 0,
    question:{},
    option_index:''
  }

  incrementIndex = (question_index, option_index, bool) => {
    if (bool) {
      if (typeof(option_index) != 'number') {
        alert('请选择答案!');
        return;
      } else {
        const { questions, saveAnswer } = this.props
        this.setState({question_index: question_index + 1, question:questions[question_index + 1], option_index:''})
        saveAnswer(question_index, option_index)
      }
    } else {
      const { saveAnswer } = this.props
      this.setState({option_index:''})
      saveAnswer(question_index, option_index)
    }
  }

  chooseItem = (index) => {
    this.setState({option_index:index})
  }

  renderButton({question_index, length, option_index}) {
    if (question_index < (length-1)) {
      return (
        <div className='next_item button_style' onClick={() => this.incrementIndex(question_index, option_index, true)}></div>
      )
    } else {
      return (
        <div>
          <Link to='/result'><div className='submit_item button_style' onClick={() => this.incrementIndex(question_index, option_index, false)}></div></Link>
          <Route path='/result' component={Result}/>
        </div>
      )
    }
  }

  componentWillMount() {
    const { questions } = this.props;
    const { question_index } = this.state
    const question = questions[question_index];
    this.setState({ question:question })
  }

  render() {
    const { questions } = this.props
    const length = questions.length;
    const { question, question_index, option_index } = this.state
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
          <div className='top_tips'><div className="num_tip">题目{question_index+1}</div> </div>
          <div className='item_back item_container_style'></div>
          <div className='item_list_container'>
            <div className="item_title">{question.topic_name}</div>
            <ul>
              {
                question.topic_answer.map((option, index) => {
                  return <li className="item_list" onClick={() => this.chooseItem(index)} key={index}>
                    <span className={option_index === index ? 'has_choosed option_style' : 'option_style'}>{chooseType(index)}</span>
                    <span className="option_detail">{option.answer_name}</span>
                  </li>
                })
              }
            </ul>
          </div>
          {this.renderButton({question_index, length, option_index})}
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions.itemDetail
})

const mapDispatchToProps = {
  saveAnswer : saveAnswer
}

const Question = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleQuestion)

export default Question
