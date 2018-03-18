import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Article = ({ article }) => {
    const pubDate = new Date(Date.parse(article.pub_date)).toDateString();

    return (
        <li key={article._id} className='article'>
            <h3 className='article__title'>
                <Link to={`/post_${article._id}`}>{article.headline.main}</Link>
            </h3>
            <div className='article__content'>{article.snippet}</div>
            <div className='article__date'>{pubDate}</div>
        </li>
    )
};

Article.propTypes = {
    article: PropTypes.shape({
        pub_date: PropTypes.string.isRequired,
        headline: PropTypes.object.isRequired,
        lead_paragraph: PropTypes.string.isRequired,
        snippet: PropTypes.string.isRequired,
        web_url: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    })
};

export default Article;