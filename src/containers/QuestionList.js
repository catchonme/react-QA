import Question from "../containers/Question";
import { connect } from "react-redux";
import { chooseAnswer } from "../actions";

const getCurrentQuestion = (questions, id) => {
  return questions.itemDetail[id]
}

const mapStateToProps = (state) => ({
  active: state.questions.active,
  question: getCurrentQuestion(state.questions, 1)
})

const mapDispatchToProps = {
  onClick: chooseAnswer,
}

const QuestionList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

export default QuestionList
