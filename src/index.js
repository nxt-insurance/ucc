import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import store from './store'
import Provider from 'react-redux/es/components/Provider'
import { loadQuestions } from './actionCreators'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

fetch('/polish')
  .then(res => res.json())
  .then(result => {
    store.dispatch(loadQuestions(result))
  })

registerServiceWorker()
