import {
    REQUEST_ARTICLES_SUCCESS
} from '../actionTypes';

const initialState = {
    articles: {
        byId: {},
        byPageNumber: {},
        ids: []
    }
};

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES_SUCCESS:
            const articlesMap = action.page.articles.reduce((prev, article) => {
                prev.byId[article._id] = article;
                prev.ids.push(article._id);
                prev.byPageNumber[action.page.pageNumber] = prev.byPageNumber[action.page.pageNumber] || [];
                prev.byPageNumber[action.page.pageNumber].push(article._id);

                return prev;
            }, {
                byId: {},
                byPageNumber: {},
                ids: []
            });

            return {
                ...state,
                articles: {
                    ...state.articles,
                    ids: [...state.articles.ids, ...articlesMap.ids],
                    byId: {
                        ...state.articles.byId,
                        ...articlesMap.byId
                    },
                    byPageNumber: {
                        ...state.articles.byPageNumber,
                        ...articlesMap.byPageNumber
                    }
                }
            };

        default:
            return state;
    }
};

export default articlesReducer;
