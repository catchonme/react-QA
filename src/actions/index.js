export const chooseAnswer = (id, answer) => ({
  type:'CHOOSE_ANSWER',
  itemNum:id,
  answer:answer
})

export const getCurrentQuestion = (index) => ({
  type:'GET_CURRENT_QUESTION',
  index:index
})

export const changeActive = (active) => ({
  type:'CHANGE_ACTIVE',
  active: active
})