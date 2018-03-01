import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
import Result from '../components/Result'
import { changeActive } from "../actions";
import { connect } from 'react-redux'

let Question = ({question, active, match, dispatch}) => {

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
          <div className="item_title">{question.topic_name}{active}</div>
          <ul>
            {
              question.topic_answer.map((option, index) => {
                return <li className="item_list" onClick={() => dispatch(changeActive(index))} key={index}>
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

Question = connect()(Question);

export default Question