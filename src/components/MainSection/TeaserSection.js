import React from 'react';
import teasers from '../../database/teasers.json';
import Teaser from './Teaser';
import './TeaserSection.css';

const TeaserSection = () => {
    return (
        <section className='main main__teaser'>
            <Teaser list={teasers} />
        </section>
    );
}

export default TeaserSection;