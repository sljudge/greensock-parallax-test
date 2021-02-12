import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const init = () => {
   ReactDOM.render(<App />, document.getElementById('root'))
}

if (document.readyState === "complete") {
   // already fired, so run logic right away
   init();
} else {
   // not fired yet, so let's listen for the event
   window.addEventListener("DOMContentLoaded", init);
}