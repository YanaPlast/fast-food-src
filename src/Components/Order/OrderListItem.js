import React from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 15px;
    min-width: 65px;
    text-align: right;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 10px 0;
`;

export const OrderListItem = ({ order }) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>2</span>
        <ItemPrice>{order.price.toLocaleString('ru-RU',
            {style: 'currency',
            currency: 'RUB'}
            )}
        </ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
);
