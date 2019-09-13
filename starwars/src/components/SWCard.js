import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    color:purple;
`;



const SWCard = props => {
   return (
    <Card key={props.id}>
        <h2>{props.name}</h2>
        <h3>{props.height}</h3>
    </Card>
   );
};

export default SWCard;