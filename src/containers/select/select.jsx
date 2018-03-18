import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import getConfigs from '../../config';
import { performRequestArticlesIfNeeded } from './../../actions/articles.actions';
import { changePage } from './../../actions/page.actions';

class Select extends PureComponent {

    handleChange = (event) => {
        const { changePage, performRequestArticlesIfNeeded } = this.props;
        const page = event.target.value;

        this.props.history.push(`${this.props.history.location.pathname}?page=${page}`);

        changePage(page);

        performRequestArticlesIfNeeded(page);
    };

    getOptions() {
        const options = [];
        const __PAGES__ = getConfigs().pages;

        for (let i = 1; i <= __PAGES__; i++) {
            options.push(<option value={i} key={i} className='select__option'>{i}</option>)
        }

        return options;
    }

    render() {
        return this.props.location.pathname === '/' && <select value={this.props.page} onChange={this.handleChange} className='select'>{this.getOptions()}</select>
    }
}

const mapStateToProps = (state, props) => ({
    page: state.pageReducer.page
});

const mapDispatchToProps = dispatch => bindActionCreators({
    performRequestArticlesIfNeeded,
    changePage
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Select));
