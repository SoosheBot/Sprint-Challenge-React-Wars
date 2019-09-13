import React, { useState, useEffect } from 'react';
import SWCard from './SWCard';
import axios from "axios";
// import styled from 'styled-components';

export default function SWData() {
    const [people, setPeople] = useState("");
    
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
            console.log("Power to the people", response);
            setPeople(response.data);
    })
        .catch(error => {
            console.log("Not the droids...people you seek", error);
        });

    }, []);

    return (
        <div className="sw-info">
                return (
                    <SWCard
                    name={people.name}
                    />
                );

        </div>
    );
}