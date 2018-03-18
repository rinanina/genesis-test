import React  from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Articles from '../../containers/articles/articles';
import Article from '../../containers/article-details/article-details';
import Error from '../../components/error/error'

const Main = ({ location }) => (
    <main className='main'>
        <Switch>
            <Route exact path='/' render={() => { return (location.search === '?page=1')  ? (<Redirect to='/'/>) : (<Articles/>)} }/>
            <Route path='/:page' component={Article}/>
            <Route path='*' component={Error}/>
        </Switch>
    </main>
);

Main.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string.isRequired
    }).isRequired
};

export default Main;