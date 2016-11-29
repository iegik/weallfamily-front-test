import { combineReducers } from 'redux'
import userReducer from '../slides/Login/reducers/userReducer'

const appReducers = combineReducers({
    userReducer
})

export default appReducers
