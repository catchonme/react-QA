import React from 'react'

const Result = () => {
  const showCover = (e) => {
    e.stopPropagation();
  }

  return (
    <div className="result_body">
      <div className="your_scores_container">
        <header class="your_scores"><span className="score_num">20</span><span className="fenshu">分！</span></header>
        <div class="result_tip">这里是提示</div>
      </div>
      <div className="share_button" onClick={showCover}></div>
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

export default Result