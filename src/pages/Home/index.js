import React, { useState, useEffect } from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/module/cart/actions';

export default function Home() {
    const [products, setProducts] = useState([]);

    const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
            sumAmount[product.id] = product.amount;
            return sumAmount;
        }, {})
    );

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
            }));

            setProducts(data);
        }

        loadProducts();
    }, []);

    const dispatch = useDispatch();

    function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
    }
    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />

                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>

                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                            {amount[product.id] || 0}
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}
