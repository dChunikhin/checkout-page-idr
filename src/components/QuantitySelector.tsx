import React, {useState} from 'react';

// most likely, count of available products will be passed from above,
// so it's quite handy to get it from external world
const MAX_PRODUCT_QUANTITY: number = 12;

const QuantitySelector = ({ onChange, quantity }: any) => {

    const handleIncrement = () => {
        onChange(quantity + 1);
    };

    const handleDecrement = () => {
        onChange(quantity - 1);
    };

    return (
        <div className={'quantity-selector'}>
            <button disabled={quantity === 1} onClick={handleDecrement} className={'quantity-selector__button'}>-</button>
            <span className={'quantity-selector__number'}>{quantity}</span>
            <button disabled={quantity === MAX_PRODUCT_QUANTITY} onClick={handleIncrement} className={'quantity-selector__button'}>+</button>
        </div>
    );
};

export default QuantitySelector;
