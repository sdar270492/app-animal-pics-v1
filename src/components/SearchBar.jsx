function SearchBar({ post, filterPost }) {
    return (
        <input
            className="form-control"
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            value={post}
            onChange={(e) => { filterPost(e.target.value) }}
        />
    );
}

export default SearchBar;