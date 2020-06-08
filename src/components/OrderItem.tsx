import React from 'react';

const OrderItem = ({ data }: any) => {
    return (
        <div className={'order-item'}>
            <span className={'order-item__date'}>Date: {data.date}</span>
            <span className={'order-item__name'}>Name: {data.name}</span>
            <span className={'order-item__units'}>Units: {data.units}</span>
            <span className={'order-item__price'}>Price: {data.price}</span>
            <span className={'order-item__premium'}>Premium Shipping: {data.isPremiumShipping}</span>
        </div>
    );
};

export default OrderItem;
