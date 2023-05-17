import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
`;

const ChoiceRadio = styled.input`
    cursor: pointer;
    margin-right: 5px;
`;

const ChoiceLabel = styled.label`
    cursor: pointer;
`;

export function Choices({ openItem, choice, changeChoices }) {
    return (
        <>
            <h3>Варианты</h3>
            <ChoiceWrap>
                    { openItem.choices.map((item, i) => (
                        <ChoiceLabel key={i}>
                            <ChoiceRadio
                                type="radio" 
                                name="choices"
                                checked={choice === item }
                                value={item}
                                onChange={changeChoices}
                            />
                            {item}
                         </ChoiceLabel>
                    ))}
            </ChoiceWrap>
        </>
    )
}