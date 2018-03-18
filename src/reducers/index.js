import { combineReducers } from 'redux';
import articlesReducer from './articles.reducer';
import uiReducer from './ui.reducer';
import pageReducer from './page.reducer';

export default combineReducers({
    articlesReducer,
    uiReducer,
    pageReducer
});