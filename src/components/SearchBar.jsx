function SearchBar({ search, doSearch }) {
    return (
        <input
            className="form-control"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e) => { doSearch(e.target.value) }}
        />
    );
}

export default SearchBar;