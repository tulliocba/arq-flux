import producer from 'immer';

export default function cart(currentProducts = [], action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return producer(currentProducts, draft => {
                const productIndex = draft.findIndex(
                    p => p.id === action.product.id
                );

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });
        default:
            return currentProducts;
    }
}
