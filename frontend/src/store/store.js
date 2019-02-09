import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import
todoReducer
    from '../reducers/reducer';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(todoReducer, composeEnhancers(applyMiddleware(thunk)));
    return store
}