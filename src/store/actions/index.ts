export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (newOrder: any) => {
    return {
        type: ADD_ORDER,
        payload: newOrder
    }
};
