import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Missing from './components/Missing';
import { Router, Route, hasHistory } from 'react-router';

window.React = React;

ReactDOM.render(
    <Router history={hasHistory}>
        <Route path="/" component={App} />
        <Route path="Home" component={App} />
        <Route path="About" component={App} />
        <Route path="*" component={Missing} />
    </Router>, document.getElementById('app')
);