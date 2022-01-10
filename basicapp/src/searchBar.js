import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    //return <div>Hello World!</div>

    /*const navigate = useNavigate();
    const onSubmit = e => {
        e.preventDefault()
        navigate.push(`?s=${searchQuery}`)
    };*/

    //  autoComplete="off" onSubmit={onSubmit}

    const handleSubmit = (e) => {
        
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