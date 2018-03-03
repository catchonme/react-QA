const initialState =  {
    itemDetail: [{
      "topic_name": "题目一",
      "topic_answer": [{
        "topic_answer_id": 1,
        "answer_name": "答案A",
      }, {
        "topic_answer_id": 2,
        "answer_name": "答案B(正确答案)",
      }, {
        "topic_answer_id": 3,
        "answer_name": "答案C",
      }, {
        "topic_answer_id": 4,
        "answer_name": "答案D",
      }]
    }, {
      "topic_name": "题目二",
      "topic_answer": [{
        "topic_answer_id": 5,
        "answer_name": "答案A",
      }, {
        "topic_answer_id": 6,
        "answer_name": "答案B",
      }, {
        "topic_answer_id": 7,
        "answer_name": "答案C(正确答案)",
      }, {
        "topic_answer_id": 8,
        "answer_name": "答案D",
      }]
    }, {
      "topic_name": "题目三",
      "topic_answer": [{
        "topic_answer_id": 9,
        "answer_name": "答案A",
      }, {
        "topic_answer_id": 10,
        "answer_name": "答案B",
      }, {
        "topic_answer_id": 11,
        "answer_name": "答案C",
      }, {
        "topic_answer_id": 12,
        "answer_name": "答案D(正确答案)",
      }]
    }, {
      "topic_name": "题目四",
      "topic_answer": [{
        "topic_answer_id": 13,
        "answer_name": "答案A(正确答案)",
      }, {
        "topic_answer_id": 14,
        "answer_name": "答案B",
      }, {
        "topic_answer_id": 15,
        "answer_name": "答案C",
      }, {
        "topic_answer_id": 16,
        "answer_name": "答案D",
      }]
    }, {
      "topic_name": "题目五",
      "topic_answer": [{
        "topic_answer_id": 17,
        "answer_name": "答案A",
      }, {
        "topic_answer_id": 18,
        "answer_name": "答案B(正确答案)",
      }, {
        "topic_answer_id": 19,
        "answer_name": "答案C",
      }, {
        "topic_answer_id": 20,
        "answer_name": "答案D",
      }]
    }],
    answer: [], //答案id
    right_answer:[2, 7, 12, 13, 18], //正确答案
    scoreTips:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
  }

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_ANSWER' :
      return {
          ...state,
          answer:[...state.answer, state.itemDetail[action.question_index]['topic_answer'][action.option_index]['topic_answer_id']]
        }
    default :
      return state;
  }
}

export default questions