import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import data from '../../data.json';

import './Articles.css';

const Articles = () => {
    const [articles, setArticles] = useState(data.articles);

    return (
        <section className="articles-wrapper">
            <div className="articles">
                <div className="heading-wrapper">
                    <h2 className="heading">Articles</h2>
                    <a className="more-link" href="#">See all article <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
                </div>

                <div className="articles-content">
                    {articles.length > 0 && articles.map(a => 
                        <article className="article" key={a.id}>
                            <img src={`./images/${a.img}`} alt="Article cover" />
                            <h3 className="subheading">{a.title}</h3>

                            <div className="author">
                                <img src={`./images/${a.author.img}`} alt="Article author" />
                                <div className="author-info">
                                    <p className="author-name">{a.author.name}</p>
                                    <p className="text-date">{a.date}</p>
                                </div>
                            </div>
                        </article>    
                    )}
                </div>

                <Link to="#" className="btn btn-primary">All articles</Link>
            </div>
        </section>
    );
};

export default Articles;