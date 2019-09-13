import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    color:purple;
`;



const SWCard = props => {
   return (
    <Card>
        <h2>{props.name}</h2>
    </Card>
   );
};

export default SWCard;