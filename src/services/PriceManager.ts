const PREMIUM_SHIPPING_PRICE: number = 15;

class PriceManager {

    constructor() {
        this.calculateFinishPrice = this.calculateFinishPrice;
    }

    calculateDiscountPercent(unitsCount: number): number {
        return unitsCount > 1 ? (unitsCount - 1) * 5 : 0;
    }
    calculateTotalPrice(unitsCount: number, unitPrice: number) : number {
        return unitsCount * unitPrice;
    }
    applyDiscount(price: number, percent: number): number {
        return price - (price / 100 * percent);
    }
    applyPremiumShipping(price: number): number {
        return price + PREMIUM_SHIPPING_PRICE;
    }
    calculateFinishPrice(unitsCount: number, unitPrice: number, isPremiumShipping: boolean, isPremiumShippingFree: boolean): number {
        const totalPrice = this.calculateTotalPrice(unitsCount, unitPrice);
        const discountPercent = this.calculateDiscountPercent(unitsCount);
        let finishPrice = this.applyDiscount(totalPrice, discountPercent);

        if (isPremiumShipping && !isPremiumShippingFree) {
            finishPrice = this.applyPremiumShipping(finishPrice);
        }

        return this.roundPrice(finishPrice)
    }
    roundPrice(price: number): number {
        const integer = Math.trunc(price);
        const tail = .99;
        return integer + tail;
    }
}

export default new PriceManager();
