import React from 'react';

function FilterBar({ filters, setFilters, categories }) {
    const handlePriceChange = (e) => {
        setFilters(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="filter-bar p-3 mb-4 bg-white rounded shadow-sm">
            <h5 className="mb-3">Filters</h5>
            <div className="row">
                <div className="col-md-3">
                    <label className="form-label">Category</label>
                    <select
                        className="form-select"
                        value={filters.category}
                        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Price Range</label>
                    <div className="d-flex gap-2">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Min"
                            name="minPrice"
                            value={filters.minPrice}
                            onChange={handlePriceChange}
                        />
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Max"
                            name="maxPrice"
                            value={filters.maxPrice}
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Sort By</label>
                    <select
                        className="form-select"
                        value={filters.sort}
                        onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
                    >
                        <option value="">Default</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select>
                </div>

                <div className="col-md-3">
                    <label className="form-label">Items per page</label>
                    <select
                        className="form-select"
                        value={filters.limit}
                        onChange={(e) => setFilters(prev => ({ ...prev, limit: e.target.value }))}
                    >
                        <option value="">All</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;