import { combineReducers } from 'redux'
import themeReducer from './Reducers/themeReducer'
import counterReducer from './Reducers/counterReducer';

const reducers = combineReducers({
    themeReducer,
    counterReducer
})

export default reducers;