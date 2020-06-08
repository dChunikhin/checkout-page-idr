import { ADD_ORDER } from '../actions/index';

export default function (state: any = { orders: [] }, action: any) {
    switch (action.type) {
        case ADD_ORDER:
            return { ...state, orders: [ ...state.orders, action.payload ] };
        default:
            return state;
    }
}
