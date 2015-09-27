import React from 'react';

import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
// import Scoreboard from 'components/Scoreboard';

import styles from 'scss/components/_vote';

export default class Vote extends React.Component {

  render() {
    return (
      <div className={styles.vote}>
        <div style={{width: '80%', fontSize: '24px'}}>
          <p>
        各位台灣朋友們，您曾經遇過以下國籍被誤認的困擾嗎？
        <br />
        <br />

        留學生申請簽證或學校，海外開戶，申請工作，填寫申請各式文件時，國籍找不到台灣 (Taiwan/ROC) 而被迫選擇中華人民共和國 (PRC)?
        <br />
        <br />

        這些狀況都是多年來海外遊子不斷遇到的困擾與心酸，甚至造成許多不便之處．
        要改善這個狀況，需要大家站出來出聲反應，讓這些海外機關及更多人知道，我們來自台灣．
        <br />
        <br />

        本網站設置的目的，是提供海外台人一個通報的平台，來通報並改善這個狀況，集結群眾的力量來為台灣正名．我們在收到通報之後，經過查證若屬實，將以北美FAPA名義向該機關提出正名要求，並追蹤該機構是否回應我們的訴求．這些年北美FAPA致力於正名活動，已成功向許多官方及民間機構提出訴求並成功正名，其中包含：移民署，FDA，Apple…等等．
        <br />
        <br />

        由過去的經驗知道，只要我們願意站出來為台灣發聲，即使一個人只有小小的力量，集結十個人，一百個人，我們是可以讓現狀改變的．
        <br />
        <br />


      </p>
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
