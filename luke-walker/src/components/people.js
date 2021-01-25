
// Import React along with anything specifically for the people Component => axios, useEffect, useState, ect
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './home'

// I guess this is a way to import photos
import Error from './error.jpg';



// Initialize "People" Functional Component (this takes in "props" ) => all code will be dropped into here. 
const People = (props) => {

    // const the States we will need for the people component => (People) & (Error)
    const [people, setPeople] = useState([]);
    // Set "Error" to NULL until tripped otherewise
    const [error, setError] = useState(null);

    // Set UseEffect and run Axios API call here. C/P the syntax cause you're never going to remember it. 
    useEffect(() => {
        // in the "Axios.get" direct the API to get by the props "ID" 
        axios.get(`https://swapi.dev/api/people/${props.id}`)
            .then(response => {
                setPeople(response.data);
            })
            .catch((err) => {
                setError("These aren't the droids you're looking for")
            })
    }, [props.id]);


    // Initialize the showPerson FC => this with be the way we display the Axios get request in our UI
    const showPerson = () => {
        return (
            <div style={{ fontSize: '20px', margin: "20px", color: 'white' }}>
                <Home />
                {/*  set API results to "people.______" this is in conjunction with the "people" state variable =>   line: 16  */}
                <h1>{people.name}</h1>
                <h3>Height: <span>{people.height} cm</span> </h3>
                <h3>Mass: <span>{people.mass} kg</span> </h3>
                <h3>Hair Color: <span>{people.hair_color}</span> </h3>
                <h3>Skin Color: <span>{people.skin_color}</span> </h3>
                <h3>Eye Color: <span>{people.eye_color}</span> </h3>
            </div>
        )

    }
    const showError = () => {
        return (
            <div>
                <h1>{error}</h1>
                <img src={Error} alt="error" />
            </div>
        )
    }

    return (
        <div>
            { error == null ? showPerson() : showError()}
        </div>
    )
}



export default People; 