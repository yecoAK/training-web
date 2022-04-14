import './Search.scss'

function Search() {
    return (
        <div>
            <input type="text" className="form-control iconSearchInput"
                   placeholder="Search Characters, Islands or Objects"
                   aria-label="Search"
                   aria-describedby="addon-wrapping"></input>
        </div>
    )
}

export default Search;