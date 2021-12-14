import React from "react";
import { Link } from 'react-router-dom';

const Teaser = ( {list} ) => {
    return (
            list.map((item) => (
                <div className="teaser__item">
                <Link to={item.link} key={item.objectID}>
                    <img src={item.url} alt={item.title} width={410} height={254}/>
                </Link>
                </div>
            ))
    );
}

export default Teaser;