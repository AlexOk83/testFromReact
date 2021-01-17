import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));