import React from 'react';
import Helmet from 'react-helmet';

import config from 'helmconfig.js';

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="Name is Taiwan"
        meta={config.meta}
        link={config.link}
      />
    );
  }
}

React.renderToString(<Header />);
let header = Helmet.rewind();

export default header;
