import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <h2 className='search-header' >Find Your Next Car</h2>
            <div className="search-options">
                <select>
                    {/* Year options */}
                    <option value="">Year</option>
                </select>
                <select name="" id="">
                    <option value="">Make</option>
                </select>
                <select name="" id="">
                    <option value="">Model</option>
                </select>
                <select name="" id="">
                    <option value="">Price</option>
                </select>
                {/* Add year options dynamically */}

                <input className='text-field' type="text" placeholder="VIN or Keyword" />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
