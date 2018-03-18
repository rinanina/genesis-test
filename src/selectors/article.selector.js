import { createSelector } from 'reselect';

export const getArticleId = (state, props) => props.location.pathname.split('_')[1];

export const getArticles = (state) => state.articlesReducer.articles.byId;

export const getArticleById = (id, byId) => byId[id];

export default createSelector(
    [
        getArticleId,
        getArticles
    ],
    getArticleById
)