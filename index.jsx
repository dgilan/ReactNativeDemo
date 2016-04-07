import React from 'react';
import ReactDOM from 'react-dom';
import context from './src/utils/context';

import {Router, Route} from 'react-router';
import HashHistory from 'react-router/lib/HashHistory';

import Deck from './presentation/deck';
import config from './presentation/config';

require('normalize.css');
require('./themes/default/index.css');
require('highlight.js/styles/monokai_sublime.css');

class Presentation extends React.Component {
  render() {
    return <Deck />;
  }
}

Presentation.contextTypes = {
  router: React.PropTypes.object
};

Presentation = context(React, Presentation, {styles: config.theme});

ReactDOM.render(
  <Router history={new HashHistory()}>
    <Route path='/' component={Presentation} />
    <Route path='/:slide' component={Presentation} />
  </Router>
, document.getElementById('root'));
