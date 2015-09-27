import React from 'react';
import styles from 'scss/components/_about';
import TopicActions from 'actions/TopicActions';
// import MainSection from 'components/MainSection';

export default class Confirm extends React.Component {
	componentDidMount() {
		TopicActions.confirmcreate(this.props.params.caseId);
	}

  render() {
    return (
      <div className={styles.about}>
        <h1 className={styles.about__header}>感謝!</h1>
        <p className={styles.about__description}> 我們已經收到您的通報, 經過管理員認證後會儘速處理！</p>
      </div>
    );
  }
}

Confirm.propTypes = {
	params: React.PropTypes.object,
	TopicStore: React.PropTypes.object
};
