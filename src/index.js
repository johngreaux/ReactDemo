import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Missing from './components/Missing';

window.React = React;

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route path="/" component={App} />
            <Route path="Home" component={App} />
            <Route path="About" component={App} />
        </div>
    </BrowserRouter>), document.getElementById('app')
);