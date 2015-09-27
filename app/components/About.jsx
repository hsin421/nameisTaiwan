import React from 'react';

import styles from 'scss/components/_about';

export default class About extends React.Component {
  render() {
    return (
      <div className={styles.about}>
        <h1 className={styles.about__header}>About TW != PRC</h1>
        <p className={styles.about__description}> Taiwan is simply not part of China.</p>
      </div>
    );
  }
}
