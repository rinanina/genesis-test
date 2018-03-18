import { createSelector } from 'reselect';

export const getPageNumber = (state, props) => state.pageReducer.page;

export const getArticleIdsByPageNumber = (state) => state.articlesReducer.articles.byPageNumber;

export const getArticles = (state) => state.articlesReducer.articles.byId;

export const getArticlesByPageNumber = (page, byPageNumber, byId) => {
    if (!byPageNumber[page]) {
        return [];
    }

    return byPageNumber[page].map(id => byId[id]);
};

export default createSelector(
    [
        getPageNumber,
        getArticleIdsByPageNumber,
        getArticles
    ],
    getArticlesByPageNumber
)
