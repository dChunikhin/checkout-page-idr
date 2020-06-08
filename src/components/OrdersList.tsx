import React from 'react';
import OrderItem from './OrderItem';

const OrdersList = ({ orders }: any) => {
    return (
        <ul className={'orders-list'}>
            {orders.map((order: any, idx: number) => <OrderItem key={idx} data={order} />)}
        </ul>
    );
};


export default OrdersList;
