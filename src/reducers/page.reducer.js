import {
    CHANGE_PAGE
} from '../actionTypes';

const initialState = {
    page: 1
};

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            };

        default:
            return state;
    }
};

export default pageReducer;
