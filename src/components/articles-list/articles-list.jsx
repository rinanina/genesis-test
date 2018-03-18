import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/article';

const ArticlesList = ({ articles }) => (
    <ul className='articles-list'>
        {articles.map(article =>
            <Article key={article._id} article={article}/>
        )}
    </ul>
);

ArticlesList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
            pub_date: PropTypes.string.isRequired,
            headline: PropTypes.object.isRequired,
            lead_paragraph: PropTypes.string.isRequired,
            snippet: PropTypes.string.isRequired,
            web_url: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired
        })).isRequired
};

export default ArticlesList;