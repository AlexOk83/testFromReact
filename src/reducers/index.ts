import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer} from 'redux-form';
import cityReducer from "./cityReducer";

const rootReducer = combineReducers({
    form: formReducer,
    cities: cityReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));