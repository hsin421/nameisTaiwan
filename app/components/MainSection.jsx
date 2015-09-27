import React from 'react';
import Immutable from 'immutable';
import TopicItem from 'components/TopicItem';

import styles from 'scss/components/_vote';

export default class MainSection extends React.Component {
  render() {
    const topics = this.props.topics.toKeyedSeq().map((topic, key) => {
      if (topic.get('status') !== 'init') {
       return (<TopicItem id={key} key={key} imgUrl={topic.get('imgUrl')} status={topic.get('status')} url={topic.get('url') ? topic.get('url') : ''} userEmail={topic.get('userEmail')} situation={topic.get('situation')} org={topic.get('organization')} userName={topic.get('userName')} />);
      }
    }).toArray();
    return (
      <div>
        <div className={styles['main-section']}>
          <h3 className={styles['main-section__header']}>已知案件</h3>
          <div className={styles['main-section__list']}>{topics.reverse()}</div>
        </div>
        <section style={{fontSize: '25px'}}>
            <h1>我要幫忙</h1>
            <ul style={{listStyle: 'none', margin: '10px'}}>
              <li style={{marginTop: '15px'}}><a href="https://github.com/hsin421/nameisTaiwan"><i className="fa fa-github"></i> 寫寫code / 文案 </a></li>
              <li style={{marginTop: '15px'}}><a href="mailto:shinsonh@gmail.com"><i className="fa fa-dribbble"></i> 美工,畫Logo,icon, etc </a></li>
              <li style={{marginTop: '15px'}}><a href="mailto:shinsonh@gmail.com"><i className="fa fa-group"></i> 當管理員幫忙驗證案子</a></li>
              <li style={{marginTop: '15px'}}><a href="http://fapa.org/new/index.php?option=com_content&view=article&id=66&Itemid=30"><i className="fa fa-paypal"></i> 捐款, keep us online </a> </li>
            </ul>
        </section>
      </div>
    );
  }
}

MainSection.propTypes = { topics: React.PropTypes.instanceOf(Immutable.OrderedMap) };
