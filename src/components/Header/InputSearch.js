import React from 'react';

const InputSearch = () => {
    return (
        <div className='header__search search'>
            <label htmlFor='search'></label>
            <input className='search__input'
                id="search"
                type="text"
                placeholder='Поиск по товарам' />
        </div>
    );
}

export default InputSearch;