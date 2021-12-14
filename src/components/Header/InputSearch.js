import React from 'react';

const InputSearch = () => {
    const [amount, setAmount] = React.useState('');
    function handleChange(event) {
      setAmount(event.target.value);
    }
    return (
        <div className='header__search search'>
            <label htmlFor='search'></label>
            <input className='search__input' 
            id="search" 
            type="text" 
            placeholder='Поиск по товарам' 
            value={amount} 
            onChange={handleChange} />
        </div>
    );
  };

export default InputSearch;