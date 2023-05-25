import { createStore } from "redux";
import reducer from "./Reducers/themeReducer";

const store = createStore(reducer);

export default store;

/*
Configuration
=============
1. npm i redux react-redux
2. create folders:
    i) src/store/index.js
    ii) src/store/actions/themeActions/index.js
    iii) src/store/reducers/themeReducers/index.js
3. Write initial store configuration code
4. Import store and Provider (from react-redux) in App.js
and wrap the code with it.

Implementation
==============
1. Write action code, each action function will return { type, data }
2. Write reduce code, reducer function will have a switch statement depending
on action.type and we will save action.data with the store
3. Call the action from component using dispatch (useDispatch)
4. In order to get the values from redux into component, use useSelector.
*/