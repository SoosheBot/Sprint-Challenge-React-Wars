import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    margin-bottom:25px;

    h1,h2{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        font-size:1rem;
        color:red;
        text-shadow: 1px 1px 5px #fff;
    }
    h2{
        margin-left:30%;
        margin-right:30%;

    }

    h3, p{
        text-align:center;
        font-size:0.75rem;
        font-weight:bold;
        color:orangered;
        text-shadow: 1px 1px 5px #fff;
    }

`;



const SWCard = props => {
   return (
    <Card key={props.id}>
        <h1>Name: {props.name}</h1>
        <h2>Films: {props.films}</h2>
        <h3>Birth Year: {props.birth_year}</h3>
        <h3>Height: {props.height}</h3>
        <p>Mass: {props.mass}</p>
        <p>Hair Color: {props.hair}</p> 
    </Card>
   );
};

export default SWCard;