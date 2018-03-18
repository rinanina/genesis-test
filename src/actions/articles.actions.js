import axios from 'axios';
import getConfigs from '../config';
import {
    REQUEST_ARTICLES,
    REQUEST_ARTICLES_SUCCESS,
    REQUEST_ARTICLES_FAIL
} from './../actionTypes';

const __API__ = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const __PARAMS__ = {
    'api-key': 'a46bf7ceb9d7433d98bf219c563d4bdc',
    'fl': 'pub_date,headline,_id,snippet,lead_paragraph,web_url'
};
const __PAGES__ = getConfigs().pages;

export const requestArticles = () => ({
    type: REQUEST_ARTICLES
});

export const requestArticesSuccess = page => ({
    type: REQUEST_ARTICLES_SUCCESS,
    page
});

export const requestArticesFail = error => ({
    type: REQUEST_ARTICLES_FAIL,
    message: error.message || 'Something went wrong'
});

export const performRequestArticles = (pageNumber = 1) => (dispatch) => {
    dispatch(requestArticles());

    return axios.get(__API__, {
        params: {
            ...__PARAMS__,
            page: pageNumber
        }
    })
        .then((response) => {
        dispatch(requestArticesSuccess({
            pageNumber,
            articles: response.data.response.docs
        }))
    })
        .catch((error) => {
            dispatch(requestArticesFail(error))
        })
};

export const performRequestArticlesIfNeeded = page => (dispatch, getState) => {
    if (isNaN(Number(page)) || page > __PAGES__) {
        return dispatch(requestArticesFail({
            message: 'Not valid url'
        }));
    }

    if (getState().articlesReducer.articles.byPageNumber[page]) {
        return;
    }
    dispatch(performRequestArticles(page));
};
