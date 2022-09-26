import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h4>Order summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>See changes</p>
        </div>



    );
};

export default Cart;