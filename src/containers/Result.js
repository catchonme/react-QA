import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ShowResult extends Component {
  static propTypes = {
    answer:PropTypes.array,
    right_answer:PropTypes.array,
    scoreTips:PropTypes.array
  }

  state = {
    score:0,
    score_tip:''
  }

  showCover = (e) => {
    e.stopPropagation();
  }

  componentWillMount() {
    const { answer, right_answer, scoreTips } = this.props
    var score=0,score_tip;
    answer.map((item, index) => {
      item == right_answer[index] ? score += 20 : ''
    })
    switch (score) {
      case 0  :
      case 10 :
      case 20 :  score_tip = scoreTips[0]; break;
      case 30 :
      case 40 :  score_tip = scoreTips[1];break;
      case 50 :
      case 60 :  score_tip = scoreTips[2];break;
      case 70 :
      case 80 :  score_tip = scoreTips[3];break;
      case 90 :
      case 100:  score_tip = scoreTips[4];break;
    }
    this.setState({score:score, score_tip:score_tip})
  }

  render() {
    const { score, score_tip } = this.state
    return (
      <div className="result_body">
        <div className="your_scores_container">
          <header className="your_scores"><span className="score_num">{score}</span><span className="fenshu">分！</span></header>
          <div className="result_tip">{score_tip}</div>
        </div>
        <div className="share_button" onClick={this.showCover}></div>
        <div className="share_code">
          <header className="share_header">关注葡萄之家，获取答案。</header>
          <img src={require('../images/4-4.png')} alt="qr_code" height="212" width="212" className="code_img"/>
          {/*<div className="share_img"></div>*/}
        </div>
        {/*<div className="share_cover" onClick={showCover}>
        <div className="share_img"></div>
      </div>*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  answer:state.questions.answer,
  right_answer:state.questions.right_answer,
  scoreTips:state.questions.scoreTips
})

const Result = connect(
  mapStateToProps
)(ShowResult)

export default Result