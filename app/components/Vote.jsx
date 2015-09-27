import React from 'react';

import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
// import Scoreboard from 'components/Scoreboard';

import styles from 'scss/components/_vote';

export default class Vote extends React.Component {

  render() {
    return (
      <div className={styles.vote}>
        <div style={{display: 'flex', marginLeft: '10%'}}>
          <div style={{width: '50%', fontSize: '24px'}}>
            <p>
          你也曾遇過以下國籍被誤認的困擾嗎？
          <br />
          <br />

          留學生申請簽證或學校，海外開戶，申請工作，填寫申請各式文件時，國籍找不到台灣 (Taiwan/ROC) 而被迫選擇 PRC or Taiwan, Province of China?
          <br />
          <img src="http://www.ucarecdn.com/29ac4191-9ba7-4cd0-b7d7-75a91ad153ba/screenshot.jpg" style={{width: '80%', marginTop: '10px', marginLeft: '20px'}}/>
          <br />

          這些狀況都是多年來海外遊子不斷遇到的困擾與心酸，甚至造成許多不便之處．
          要改善這個狀況，需要大家站出來出聲反應，讓這些海外機關及更多人知道，我們來自台灣．
          <br />
          <br />
          本網站設置的目的，是提供海外台人一個通報的平台，來改善這個狀況，集結群眾的力量為台灣正名
          <br />
          我們收到通報之後，經過查證屬實，將以北美FAPA(Formosa Association for Public Affairs)名義向該機關提出正名要求，並追蹤該機構是否回應我方訴求．這些年北美FAPA致力於正名活動，已向許多官方及民間機構提出訴求並成功正名，其中包含：移民署，FDA，Apple…等等．
          <br />
          <br />

          不要再讓海外台灣人被吃豆腐了，一起動起來為台灣正名！
          <br />
          <br />


         </p>
          </div>
          <a href="http://www.ucarecdn.com/08b8e6bd-f02c-463a-9e0f-2f8efc937216/getPart.jpg" target="_blank" ><img style={{width: '80%', marginTop: '200px', marginLeft: '40px', boxShadow: '0 4px 8px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.23)'}} src="http://www.ucarecdn.com/e89fb62e-feb3-4bf7-af98-2aa44948daae/getPart2.png" /></a>
        </div>
        <EntryBox topic={this.props.TopicStore.newTopic} />
        <MainSection topics={this.props.TopicStore.topics} />
      </div>
    );
  }
}

Vote.propTypes = {
  TopicStore: React.PropTypes.object
};
