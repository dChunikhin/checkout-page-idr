import React, { useState } from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import ProductImage from './ProductImage';
import QuantitySelector from './QuantitySelector';
import PriceManager from '../services/PriceManager';
import PremiumShippingToggler from './PremiumShippingToggler';
import CheckoutForm from './CheckoutForm';
import OrdersList from './OrdersList';
import { addOrder } from '../store/actions/index';

// most likely, price of a single product and amount of units to make premium shipping free will be passed from above,
// so it's quite handy to get it from external world
const UNIT_PRICE: number = 27.49;
const FREE_SHIPPING_PREMIUM_THRESHOLD: number = 12;

const App = () => {

    // PRICE
    const getPrice = () => {
        return PriceManager.calculateFinishPrice(quantity, UNIT_PRICE, isPremiumShipping, isPremiumShippingFree);
    };

    // PREMIUM SHIPPING
    const [isPremiumShipping, setPremiumShipping] = useState(false);
    const [isPremiumShippingFree, setPremiumShippingFree] = useState(false);
    const onChangePremiumShipping = (e: any) => {
        setPremiumShipping(e.target.checked)
    };

    // QUANTITY
    const [quantity, setQuantity] = useState(1);
    const onChangeQuantity = (quantity2: number) => {
        setQuantity(quantity2);

        if (quantity === FREE_SHIPPING_PREMIUM_THRESHOLD) {
            setPremiumShippingFree(true)
        } else {
            setPremiumShippingFree(false)
        }

    };

    // ORDERS
    const orders = useSelector((state: any) => state.orders);
    const dispatch = useDispatch();

    // PURCHASING
    const onPurchase = (data: any) => {
        console.log(data);
        // there's gotta be some logic to "store" the order like calling an API etc.
        // but we just put them to store for showing in the order-list
        const newOrder = {
            ...data,
            date: new Date().getTime(),
            price: getPrice(),
            units: quantity,
            isPremiumShipping: isPremiumShipping ? 'YES' : 'NO' };
        dispatch(addOrder(newOrder))
    };

    return (
        <div>
            <ProductImage />
            <QuantitySelector onChange={onChangeQuantity} quantity={quantity} />
            <PremiumShippingToggler disabled={isPremiumShippingFree} onChange={onChangePremiumShipping} />
            <p className={'quantity'}>Units: {quantity}</p>
            <p className={'price'}>Price: {getPrice()}</p>
            <CheckoutForm onSubmit={onPurchase} />
            <OrdersList orders={orders} />
        </div>
  );
};

export default connect()(App)
