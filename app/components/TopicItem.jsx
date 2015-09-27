import React from 'react';
// import TopicActions from 'actions/TopicActions';

import styles from 'scss/components/_vote';

export default class TopicItem extends React.Component {

  render() {
    return (
      <div className={styles['topic-item']} key={this.props.id}>
        <span className={styles['topic-item__header']}><a href={`http://${this.props.url}`}>{this.props.org}</a></span>
        <img src={this.props.imgUrl} style={{width: '90%', height: '30%', marginTop: '5px'}} />
        <span className={styles['topic-item__topic']}>{this.props.situation}</span>
        <span className={styles['topic-item__topic']}>狀態: {this.props.status}</span>
        <span className={styles['topic-item__topic']}>由 {this.props.userName} 提案</span>
      </div>
    );
  }
}

TopicItem.propTypes = {
  id: React.PropTypes.string,
  org: React.PropTypes.string,
  situation: React.PropTypes.string,
  status: React.PropTypes.string,
  userName: React.PropTypes.string,
  url: React.PropTypes.string,
  userEmail: React.PropTypes.string,
  imgUrl: React.PropTypes.string
};
