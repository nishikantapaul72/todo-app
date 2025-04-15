import React from 'react'
import './index.css'
import { Provider } from 'react-redux';
import store from './features/store';
import Todo from './components/Todo';
const App = () => {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  )
}

export default App 