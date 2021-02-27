import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = ({onUserChange}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onUserChange(event.target.value)
        }
    }

    return (
        <div className={classes.SearchBarBox}>
            <input 
                type="search" 
                placeholder="Type username and press enter"
                onKeyDown={(e) => handleKeyDown(e)} />
        </div>
    );
}

export default SearchBar;