const initialState =   {
    active:null,
    level: '第一周', //活动周数
    itemNum: 1, //第几题
    allTime: 0,  //总共用时
    timer: '', //定时器
    itemDetail: [{
      "topic_id": 20,
      "active_topic_id": 4,
      "type": "ONE",
      "topic_name": "题目一",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 1,
        "topic_id": 20,
        "answer_name": "答案aaaa",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 2,
        "topic_id": 20,
        "answer_name": "正确答案",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 3,
        "topic_id": 20,
        "answer_name": "答案cccc",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 4,
        "topic_id": 20,
        "answer_name": "答案dddd",
        "is_standard_answer": 1
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "题目二",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 5,
        "topic_id": 21,
        "answer_name": "答案A",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 6,
        "topic_id": 21,
        "answer_name": "答案B",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 7,
        "topic_id": 21,
        "answer_name": "正确答案",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 8,
        "topic_id": 21,
        "answer_name": "答案D",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "题目三",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 9,
        "topic_id": 21,
        "answer_name": "测试A",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 10,
        "topic_id": 21,
        "answer_name": "BBBBBB",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 11,
        "topic_id": 21,
        "answer_name": "CCCCCC",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 12,
        "topic_id": 21,
        "answer_name": "正确答案",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "题目四",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 13,
        "topic_id": 21,
        "answer_name": "正确答案",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 14,
        "topic_id": 21,
        "answer_name": "A是错的",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 15,
        "topic_id": 21,
        "answer_name": "D是对的",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 16,
        "topic_id": 21,
        "answer_name": "C说的不对",
        "is_standard_answer": 0
      }]
    }, {
      "topic_id": 21,
      "active_topic_id": 4,
      "type": "MORE",
      "topic_name": "题目五",
      "active_id": 1,
      "active_title": "欢乐星期五标题",
      "active_topic_phase": "第一周",
      "active_start_time": "1479139200",
      "active_end_time": "1482163200",
      "topic_answer": [{
        "topic_answer_id": 17,
        "topic_id": 21,
        "answer_name": "错误答案",
        "is_standard_answer": 1
      }, {
        "topic_answer_id": 18,
        "topic_id": 21,
        "answer_name": "正确答案",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 19,
        "topic_id": 21,
        "answer_name": "错误答案",
        "is_standard_answer": 0
      }, {
        "topic_answer_id": 20,
        "topic_id": 21,
        "answer_name": "错误答案",
        "is_standard_answer": 0
      }]
    }],
    answer: [], //答案id
    right_answer:[2, 7, 12, 13, 18], //正确答案
    scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
  }

const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE' :
        return {
          ...state,
          active:action.active,
          answer:[...state.answer,action.active]
        }
    case 'GET_CURRENT_QUESTION' :
      return state.itemDetail[action.index];
    case 'CHOOSE_ANSWER' :
      return {
          ...state,
          itemNum: action.itemNum,
          answer:[...state.answer, action.answer]
        }
    case 'GET_ANSWER' :
      return {
        answer:state.answer,
        right_answer:state.right_answer
      }
    default :
      return state;
  }
}

export default questions