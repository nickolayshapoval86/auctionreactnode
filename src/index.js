import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import axios from 'axios';

// axios.defaults.baseURL = 'http://andrey.us-3.evennode.com';
axios.defaults.baseURL = 'http://localhost:5000';

ReactDOM.render(<App />, document.getElementById('root'));

