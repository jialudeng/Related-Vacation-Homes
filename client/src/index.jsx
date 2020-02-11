import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App/>, document.getElementById("recommendations"));

/*
bundle
- code for app.
- get requests relative routes /gallery/32
- proxy needs to serve  the route, and goto http://13.57.225.193:3000/gallery/32
*/