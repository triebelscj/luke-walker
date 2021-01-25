import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './home'
import Error from './error.jpg';


// Initialize PLANET functional component => build out logic goes inside here. 
const Planet = (props) => {



    // declate the useState shit right away. 
    const [planet, setPlanet] = useState([]);
    // build Error and initially set to NULL
    const [error, setError] = useState(null);




    // AXIOS API Call => Copy paste syntax
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
            .then(response => {
                setPlanet(response.data)
            })
            .catch((err) => {
                setError("These aren't the droids you're looking for")
            })
    }, [props.id])



    // Display Results Area => returns "Home" form and under that displays "Planet" results
    const showPlanet = () => {
        return (
            <div style={{ fontSize: '20px', margin: "20px", color: 'white' }}>
                <Home />
                <h1>{planet.name}</h1>
                <h3>Climate: <span>{planet.climate} </span> </h3>
                <h3>Terrain: <span>{planet.terrain} </span> </h3>
                <h3>Surface Water: <span>{planet.surface_water}</span> </h3>
                <h3>Population: <span>{planet.population}</span> </h3>
            </div>
        )

    }

    // Build out ERROR display => When logic runs and the Error function does NOT == Null it will return This Error page. 
    const showError = () => {
        return (
            <div>
                <h1>{error}</h1>
                <img src={Error} alt="error" />
            </div>
        )
    }

    // Logic for Error option. If Error ==  NOT Null return {showError}
    return (
        <div>
            { error == null ? showPlanet() : showError()}
        </div>
    )




}


export default Planet;