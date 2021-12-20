import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Teaser.css';
import { getTeaser } from "../../api/getData";

const Teaser = () => {
    const [teaser, setTeaser] = useState([]);

    useEffect(() => {
        getTeaser().then((res) => {
            const { data } = res;
            const result = data.map((item) => item);
            setTeaser(result);
        })
    }, [])
    return (
        <section className='main__teaser teaser'>
            {teaser.map((item) =>

                <div key={item.objectID} className="teaser__item">
                    <Link to={item.link}>
                        <img className="teaser__image" src={item.url} alt={item.title} width={410} height={254} />
                    </Link>
                </div>
            )}
        </section>
    );
}

export default Teaser;
