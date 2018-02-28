import React from 'react'

const Question = ({onClick, question}) => (
  <div>
    <div className="title">{question.topic_name}</div>
    <ul>
      {question.topic_answer.map(option => (
        <li onClick={() => onClick(option.topic_answer_id)}>{option.answer_name}</li>
        )
      )}
    </ul>
  </div>
)

export default Question