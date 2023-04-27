import React from 'react';

function SearchBar(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Buscar..."
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
