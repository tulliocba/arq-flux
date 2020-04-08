import React from 'react';

import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ totalCart }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="RocketSeat" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{totalCart} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

const mapStateToProps = state => ({
    totalCart: state.cart.length,
});

export default connect(mapStateToProps)(Header);
