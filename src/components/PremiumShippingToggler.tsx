import React from 'react';

const PremiumShippingToggler = ({ disabled, onChange }: any) => {
    return (
        <div className={'premium-shipping-toggler__text'}>
            <span>Premium shipping</span>
            <input type={'checkbox'} disabled={disabled} className={'premium-shipping-toggler__checkbox'} onChange={onChange} />
            {disabled && <span className={'premium-shipping-toggler__text'}>FREE FOR YOU!</span>}
        </div>
    )
};

export default PremiumShippingToggler;
