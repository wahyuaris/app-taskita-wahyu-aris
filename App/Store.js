import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './reducer/CounterReducer'
import userReducer  from './reducer/UserReducer'

export default configureStore({
  reducer: {
    counter : counterReducer,
    user:userReducer
  },
})