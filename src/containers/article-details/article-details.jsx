import React  from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import getArticleById from '../../selectors/article.selector';
import Error from '../../components/error/error';

const Article = ({ article }) => {

    if (article) {
        return (
            <div className="article-details">
                <h2 className="article-details__title">{article.headline.main}</h2>
                <article className="article-details__content">
                    <span>{article.lead_paragraph} </span>
                    <a href={article.web_url} className="article-details__link">read full text here</a>
                </article>
            </div>
        )
    }

    return <Error error='There is no article with such id'/>

};

const mapStateToProps = (state, props) => ({
    article: getArticleById(state, props)
});

export default withRouter(connect(mapStateToProps, null)(Article));