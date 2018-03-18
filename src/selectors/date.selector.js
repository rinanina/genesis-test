import { createSelector } from 'reselect';

export const getPageNumber = (state, props) => state.pageReducer.page;

export const getArticleIdsByPageNumber = (state) => state.articlesReducer.articles.byPageNumber;

export const getArticles = (state) => state.articlesReducer.articles.byId;

export const getDatesByPageNumber = (page, byPageNumber, byId) => {
    return byPageNumber[page] ? byPageNumber[page].map(id => new Date(Date.parse(byId[id].pub_date))) : [];
};

export const getLastDate = (page, byPageNumber, byId) => {
    const dates = getDatesByPageNumber(page, byPageNumber, byId);

    return dates.length ? new Date(Math.max.apply(null, dates)).toDateString() : false;
};

export default createSelector(
    [
        getPageNumber,
        getArticleIdsByPageNumber,
        getArticles
    ],
    getLastDate
)
