import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/app/app';
import configureStore from './helpers/configureStore';
import updateLocalStorage from './helpers/updateLocalStorage';

let preloadedState;
const initialState = {
    articlesReducer: {
        articles: {
            byId: {},
            byPageNumber: {},
            ids: []
        }
    },
    uiReducer: {
        ui: {
            error: null,
            loading: false
        }
    }
};

try {
    preloadedState = JSON.parse(localStorage.getItem('articles')) || initialState;
} catch(error) {
    preloadedState = initialState;
}

const store = configureStore(preloadedState);

store.subscribe(() => {
    updateLocalStorage(store);
});

updateLocalStorage(store);

const Root = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

export default Root;
