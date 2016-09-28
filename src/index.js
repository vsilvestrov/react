console.log("index.js");
import React from 'react';
import {render} from 'react-dom'; // this is allow to render into our DOM an html
import App from 'components/app';

render(<App />, document.getElementById('app'));