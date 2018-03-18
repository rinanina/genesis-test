import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers/index';

const configureStore = (preloadedState) => {
    const enhancer = compose(
        applyMiddleware(thunkMiddleware, logger)
    );

    return createStore(reducer, preloadedState, enhancer);
};

export default configureStore;
