import { combineReducers } from 'redux'
import themeReducer from './Reducers/themeReducer'
// import userReducer from './Reducers/userReducers'

const reducers = combineReducers({
    themeReducer,
    // userReducer
})

export default reducers;