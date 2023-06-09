import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CountInput = styled.input`
    width: 50px;
    font-size: 20px;
`;

const ButtonCount = styled.button`
    background-color: transparent;
    border: 2px solid #299b01;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    color: #299b01;

    &:first-child {
        margin-right: 5px;
    }

    &:last-child {
        margin-left: 5px;
    }
`;

export function CountItem({count, setCount, onChange}) {

    return (
        <CountWrapper>
            <span>Количество</span>
            <div>
                <ButtonCount disabled={count <=1 } onClick={() => setCount(count - 1)} > - </ButtonCount>
                <CountInput type="number" min="1" max="100" value={count < 1 ? 1 : count} onChange={onChange}/>
                <ButtonCount onClick={() => setCount(count + 1)} > + </ButtonCount>
            </div>
        </CountWrapper>

    )
}