import React, { useState } from 'react';

const FilterBar = ({ onFilter, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex items-center gap-4 py-4">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearch}
        className="border rounded-md px-4 py-2"
      />
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="border rounded-md px-4 py-2"
      >
        <option value="">All Types</option>
        <option value="Italian">Italian</option>
        <option value="Vietnamese">Vietnamese</option>
      </select>
    </div>
  );
};

export default FilterBar;
