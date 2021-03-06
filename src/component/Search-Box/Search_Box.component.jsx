import React from 'react';
import './Search_Box.styles.css';
export const SearchBox = ({placeholder,handleChange}) => (  
    <div className = "search">
        <input type="search"
            placeholder = {placeholder}
            onChange = {handleChange}
        />
    </div>
    );