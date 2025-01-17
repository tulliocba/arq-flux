import produce from 'immer';

export default function cart(currentProducts = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(currentProducts, draft => {
                const { product } = action;

                draft.push(product);
            });
        case '@cart/REMOVE':
            return produce(currentProducts, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) draft.splice(productIndex, 1);
            });
        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(currentProducts, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }
        default:
            return currentProducts;
    }
}
