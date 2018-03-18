import omit from 'lodash.omit';

const updateLocalStorage = (store) => {
    let state = store.getState();

    const data = omit(state, ['uiReducer']);

    localStorage.setItem('articles', JSON.stringify(data));
};

export default updateLocalStorage;
