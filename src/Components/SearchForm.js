import React,{useState} from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import {Link,useHistory} from 'react-router-dom';


const SearchForm = (props) => {

    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

    const querySubmit = (e) =>{
        e.preventDefault();
        history.push(`/search/${searchInput}`)
        if(searchInput !== '') props.onSearch(searchInput);
        setSearchInput('');
    }

    return (
        <>
            <form onSubmit={querySubmit} className="form_search">
                <input
                    onChange={e=>setSearchInput(e.target.value)}
                    value={searchInput}
                    placeholder="Search" 
                    type="text"
                />
                {/* <SearchIcon  to={`/search/${searchInput}`} className="searchBtn" onClick = {querySubmit}/> */}
                <Link >
                    <SearchIcon  className="searchBtn" type="submit"/>
                </Link>
            </form>
        </>
    )
}

export default SearchForm
