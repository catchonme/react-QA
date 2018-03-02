export const saveAnswer = (question_index, option_index) => ({
  type:'SAVE_ANSWER',
  question_index:question_index,
  option_index:option_index
})