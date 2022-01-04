const SearchBar = () => {
    //return <div>Hello World!</div>

    return <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for users</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search users"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
}

export default SearchBar;