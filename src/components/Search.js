import React, { useContext } from 'react'
import MainContext from '../MainContext'
import { GrSearch } from 'react-icons/gr'

const Search = () => {
    const { search, setSearch} = useContext(MainContext)
    return (
        <div className="search">
            <div className="icon">
                <GrSearch />
            </div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Brands"/>            
        </div>
    )
}

export default Search
