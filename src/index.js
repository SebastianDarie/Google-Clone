import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import searchReducer, { initialState } from './reducers/searchReducer'
import { StateProvider } from './StateProvider'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={searchReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
