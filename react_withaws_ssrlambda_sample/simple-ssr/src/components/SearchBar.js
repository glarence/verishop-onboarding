const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form action="/" method="get" onSubmit={handleSubmit}>
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search for users
                </span>
            </label>
            <input 
                type="text"
                id="header-search"
                placeholder="Search users"
                name="s"
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}>
            </input>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;