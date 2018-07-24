import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root')); // we mount App component on root id element
registerServiceWorker();
