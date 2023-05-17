import React, { useRef, useContext }  from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems } from '../Fuctions/secondaryFunction';
import { formatCurrency  } from '../Fuctions/secondaryFunction';
import { Context } from '../Fuctions/context';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    background-image: url(${trashImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const ItemName = styled.span`
    flex: 1 1 auto;
    max-height: 50%;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 15px;
    min-width: 65px;
    text-align: right;
    flex: 0 0 50px;
`;

const OrderItemStyled = styled.li`
    display: flex;
    flex-wrap: no-wrap;
    margin: 10px 0;
    flex-wrap: nowrap;
    cursor: pointer;
`;

const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 13px;
    width: 100%;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {

    const { openItem: { setOpenItem } } = useContext(Context);

    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(", ");

        const refDeleteButton = useRef(null);

    return (
        <OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span>{order.count}</span>
            <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
            <TrashButton ref={refDeleteButton} onClick={() => deleteItem(index)}/>
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemStyled>
    )
};
