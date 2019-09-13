import React, { useState, useEffect } from 'react';
import SWCard from './SWCard';
import axios from "axios";


export default function SWData() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
                console.log("Power to the people", response);
                setPeople(response.data.results);
     
    })
        .catch(error => {
            console.log("Not the droids...people you seek", error);
        });

    },[]);

    return (
        <div className="sw-information">
            {people.map(swInfo => {
                return (
                    <SWCard key={swInfo.id}
                        name={swInfo.name}
                        films={swInfo.films.join('\r\n')}
                        birth_year={swInfo.birth_year}
                        height={swInfo.height}
                        mass={swInfo.mass}
                        hair={swInfo.hair}
                    />
                );
                })}       
        </div>
   
    );
}
