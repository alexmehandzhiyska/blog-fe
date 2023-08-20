import { useState } from 'react';
import { Link } from 'react-router-dom';

import data from '../../../data.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState(data.categories);

    return (
        <section className="categories-wrapper">
            <div className="categories">
                <div className="heading-wrapper">
                    <h2 className="heading">Browse the category</h2>
                    <Link className="more-link" to="#">See all category <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></Link>
                </div>

                <div className="categories-content">
                    {categories.length > 0 && categories.map((c) => 
                        <div className="category" key={c.id}>
                            <img className="category-img" src={`./images/${c.img}`} alt="Logo" />
                            <h3 className="category-name">{c.name}</h3>
                        </div>    
                    )}
                </div>
            </div>
        </section>
    );
};

export default Categories;