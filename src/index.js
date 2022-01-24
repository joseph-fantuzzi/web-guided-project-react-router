import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root')
)

/**
 * What does the <Router> wrapper do...?
 * Passes 3 props to our App.js component (and all children)
 * 
 * match -> contains all information about the url
 * history -> contains all information about where you've been
 * location -> contains all information about the current page
 * 
 * Route
 * Link
 */