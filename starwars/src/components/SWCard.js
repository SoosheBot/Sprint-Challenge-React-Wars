import React from 'react';
import styled from 'styled-components';

const Card = `styled.div
font-size:2rem;
`;

const SWCard = props => {
    return (
        <Card name={props.name}/>
    );
};

export default SWCard;