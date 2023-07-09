import { useEffect, useState } from "react";
import { categoryService } from "../../../services/categoryService";
import data from '../../../data.json';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './Categories.css';

const Categories = () => {
    const [categories, setCategories] = useState(data.categories);
    const [activeCategoryId, setActiveCategoryId] = useState(3);

    // useEffect(() => {
    //     categoryService.getAll()
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }, []);

    return (
        <section className="categories-wrapper">
            <div className="categories">
                <div className="categories-text">
                    <h2 className="heading">Browse the category</h2>
                    <a className="more-link" href="#">See all category <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></a>
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