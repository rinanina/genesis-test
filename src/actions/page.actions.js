import {
    CHANGE_PAGE
} from './../actionTypes';

export const changePage = (page = 1) => ({
    type: CHANGE_PAGE,
    page
});
