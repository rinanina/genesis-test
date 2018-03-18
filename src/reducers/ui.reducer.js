import {
    REQUEST_ARTICLES,
    REQUEST_ARTICLES_SUCCESS,
    REQUEST_ARTICLES_FAIL
} from '../actionTypes';

const initialState = {
    ui: {
        loading: false,
        error: null
    }
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    loading: true,
                    error: null
                }
            };

        case REQUEST_ARTICLES_SUCCESS:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    loading: false,
                    error: null
                }
            };
        case REQUEST_ARTICLES_FAIL:
            return {
                ...state,
                ui: {
                    ...state.ui,
                    loading: false,
                    error: action.message
                }
            };

        default:
            return state;
    }
};

export default uiReducer;
