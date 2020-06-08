import React, {useState} from 'react';

const CHECKOUT_FORM_INITIAL_DATA = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetName: '',
    city: '',
    country: ''
};

const CheckoutForm = ({ onSubmit }: any) => {

    const [data, setData] = useState(CHECKOUT_FORM_INITIAL_DATA);

    const submitForm = (e: any) => {
        e.preventDefault();
        onSubmit(data);
        setData(CHECKOUT_FORM_INITIAL_DATA);
    };

    const onInputChange = (e: any) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    };

    return (
        <form className={'checkout-form'} onSubmit={onSubmit}>
            {Object.entries(data).map(([key, value]: any) => <input key={key} onChange={onInputChange} type={'text'} name={key} value={value} />)}
            <button type={'submit'} onClick={submitForm}>Purchase</button>
        </form>
    )
};

export default CheckoutForm;
