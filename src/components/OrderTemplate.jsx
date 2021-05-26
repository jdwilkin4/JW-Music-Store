import React, { useState } from 'react';

const OrderTemplate = () => {

    return (
        <div>
            <p className="order-msg">Most orders placed before noon ET ship same day (except weekends and holidays).</p>
            <div className="product-row">

                <select className="cart-input">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                </select>
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