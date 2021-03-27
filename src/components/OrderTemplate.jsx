import React from 'react';

const OrderTemplate = () => {
    return (
        <div>
            <p className="order-msg">Most orders placed before noon ET ship same day (except weekends and holidays).</p>
            <div className="product-row">
                <input type="number" placeholder="1" min="1" max="100" className="cart-input" />
                <button className="btn btn-primary">Add to cart</button>
            </div>
            <div className="product-icon-col">
                <p className="product-icon-text"><i class="fa product-icons fa-truck" aria-hidden="true"></i>Fast Shipping</p>
                <p className="product-icon-text"> <i class="fa product-icons fa-credit-card" aria-hidden="true"></i>Flexible payment options</p>
                <p className="product-icon-text"><i class="fa product-icons fa-usd" aria-hidden="true"></i>Lowest price</p>
            </div>
        </div>
    )

}
export default OrderTemplate