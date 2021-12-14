import React from "react";
import { Link } from 'react-router-dom';

const Teaser = ( {list} ) => {
    return (
            list.map((item) => (
                <div key={item.objectID} className="teaser__item">
                <Link to={item.link}>
                    <img src={item.url} alt={item.title} width={410} height={254}/>
                </Link>
                </div>
            ))
    );
}

export default Teaser;