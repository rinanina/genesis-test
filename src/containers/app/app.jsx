import React  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import getLastDate from '../../selectors/date.selector';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Main from '../../components/main/main';

const App = ({ date, page, location }) => (
    <div>
        <Header/>
        <Main location={location}/>
        <Footer date={date}/>
    </div>
);

const mapStateToProps = (state, props) => ({
    date: getLastDate(state, props)
});

export default withRouter(connect(mapStateToProps, null)(App));