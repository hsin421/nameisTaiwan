import React from 'react';
// import { Link } from 'react-router';

import UserActions from 'actions/UserActions';

import styles from 'scss/components/_navigation';

export default class Navigation extends React.Component {

  _onLogout = () => {
    UserActions.logout();
  }

  render() {
    return (
      <nav className={styles.navigation} role="navigation">
          <a className={styles.navigation__item + ' ' + styles['navigation__item--logo']} activeClassName={styles['navigation__item--active']}>台灣正名器</a>
      </nav>
    );
  }

}

Navigation.propTypes = { UserStore: React.PropTypes.object };
