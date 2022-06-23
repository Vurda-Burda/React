import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import buttonNameReducer from './reducers/buttonName';
import generalCountReducer from './reducers/generalСount';

const rootReducer = combineReducers({
   buttonNameReducer,
   generalCountReducer
});

export const store = createStore(
   rootReducer,
   compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
         ? window.__REDUX_DEVTOOLS_EXTENSION__()
         : f => f
   )
);