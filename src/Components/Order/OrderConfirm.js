import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice} from './Order';
import { ButtonCheckout } from '../Styled/ButtonCheckout';
import { projection  } from '../Fuctions/secondaryFunction';
import { totalPriceItems } from '../Fuctions/secondaryFunction';
import { formatCurrency  } from '../Fuctions/secondaryFunction';

const Modal = styled.div`
    background-color: white;
    width: 600px;
    padding: 30px;
`;

const Text = styled.h3`
    text-align: center;
    margin-bottom: 30px;
`;

const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
        arr => arr.length ? arr : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choices'],
}

const sendOrder = (dataBase, orders, authentification) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
        nameClient: authentification.displayName,
        email: authentification.email,
        order: newOrder
    });
}

export const OrderConfirm = ({
    orders, setOrders,
    authentification,
    setOpenOrderConfirm,
    firebaseDatabase
}) => {
    const dataBase = firebaseDatabase();
    const total = orders.reduce((result, order) =>  totalPriceItems(order) + result , 0);

    return (
        <Overlay>
            <Modal>
                <OrderTitle>{authentification.displayName}</OrderTitle>
                <Text>Осталось только подтвердить ваш заказ</Text>
                <Total>
                    <span>Итого</span>
                    <TotalPrice>
                        {formatCurrency(total)}
                    </TotalPrice>
                </Total>
                <ButtonCheckout onClick={ ()=>{
                    sendOrder(dataBase, orders, authentification);
                    setOrders([]);
                    setOpenOrderConfirm(false)
                }}>
                    Подтвердить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )

}