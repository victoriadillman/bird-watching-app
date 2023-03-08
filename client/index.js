import React from 'react'
import ReactDOM from 'react-dom'
// import our App component here:
import App from './framework/App.jsx'
// import css here:
import styles from './styles.css';
// import the store and redux provider here:
import { store } from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  // Passing store as prop to our app component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('contents')
)