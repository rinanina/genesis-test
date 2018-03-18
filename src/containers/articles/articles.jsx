import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { parse } from 'query-string';
import getArticlesByPageNumber from '../../selectors/articles.selector';
import { performRequestArticlesIfNeeded } from './../../actions/articles.actions';
import { changePage } from './../../actions/page.actions';
import Error from '../../components/error/error';
import Loading from '../../components/loading/loading';
import ArticlesList from '../../components/articles-list/articles-list';

class Articles extends PureComponent {

    componentDidMount() {
        const { changePage, performRequestArticlesIfNeeded } = this.props;
        const page = parse(this.props.location.search).page || 1;

        changePage(page);

        performRequestArticlesIfNeeded(page);
    }

    render() {
        const { articles, loading, error } = this.props;

        return (
            (loading && !articles.length) ? <Loading/> :
                    (error && !articles.length) ? <Error error={error}/> :
                        <ArticlesList articles={articles}/>
        )
    }
}

const mapStateToProps = (state, props) => ({
    articles: getArticlesByPageNumber(state, props),
    loading: state.uiReducer.ui.loading,
    error: state.uiReducer.ui.error
});

const mapDispatchToProps = dispatch => bindActionCreators({
    performRequestArticlesIfNeeded,
    changePage
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Articles));
