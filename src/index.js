import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './components/app/App';
import {Links} from './components/links/Links';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Routes = () => (
    <Router>
      <div>
        <App />
        <Route exact path='/' component={Links} />
      </div>
    </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
