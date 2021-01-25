import React, { useState } from 'react';
// import axios from 'axios';
import { navigate } from '@reach/router';


// Build out "Home" functional component => Everything will be placed in here. This will also take in "props"
const Home = (props) => {
    // set state for searching for People and for the current ID of Character. 
    const [search, setSearch] = useState('people');
    const [id, setId] = useState('');
    // Build out function that handles the click of the button in the form. This will track and Navigate to the specified "ID"
    const handleClick = (e) => {
        e.preventDefault();
        // Navigate to search people for specific ID
        navigate(`/${search}/${id}`);
        console.log(search, id);
    }

    return (
        <div style={{ color: 'red', margin: "10px" }}>
            <h1 style={{ fontSize: '80px', margin: "20px", color: 'red' }}>Star Wars</h1>
            <form onSubmit={handleClick} style={{ color: 'red', margin: "10px" }}>
                <label style={{ fontSize: '25px', margin: "20px" }}>Search for:</label>
                {/* When selecting between Options => this needs to interact with the setSeach function => onChange capture the "event" and Target its set Value.   */}
                <select style={{ width: "100px", height: "34px", fontWeight: "bold" }} onChange={(e) => setSearch(e.target.value)} name="search">
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label htmlFor="id" style={{ fontSize: '25px', margin: "10px" }}>ID:</label>
                <input style={{ width: "100px", height: "27px", fontWeight: "bold" }} name="id" type="text" onChange={(e) => setId(e.target.value)} />
                <button type="submit" style={{ fontSize: '15px', margin: "10px" }}>search</button>
            </form>
        </div>
    );
}



export default Home;