import React, { useState, useEffect } from 'react';
import SWCard from './SWCard';
import axios from "axios";
// import styled from 'styled-components';

export default function SWData() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
            const peopleInfo = response.results.data;
            console.log("Power to the people", peopleInfo);
            setPeople(peopleInfo);
    })
        .catch(error => {
            console.log("Not the droids...people you seek", error);
        });

    }, []);

    return (
        <div className="sw-people-list">
            {people.map(item => {
                return (
                    <SWCard
                    name={people.name}
                    />
                );
            })}
        </div>
    );
}