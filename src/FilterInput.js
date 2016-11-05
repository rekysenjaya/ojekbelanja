import React from 'react';

import './css/FilterInput.css';

export default function FilterInput(props) {
  return (
    <div className="l-filter-input">
      <input
        type="text"
        className="filter-input filter-input-txt"
        placeholder={props.placeholder}
        value={props.keyword}
        onChange={(e) => props.action(e.target.value)}
        />
      <button className="filter-input filter-input-btn">
        <i className="material-icons">search</i>
      </button>
    </div>
  )
}

FilterInput.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
}
