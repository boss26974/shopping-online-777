import React, {useState, useEffect} from "react";
import "../assets/Cart.css"
const Cart = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")))
    const [sumCost, setSumCost] = useState(0)

    useEffect(() => {
        if(cart != null){
        let sum = 0
        cart.map((x) => {
            sum = sum + (x.Quantity*x.ProductPrice)
        })
        setSumCost(sum)
        }
    }, [cart])

    const decreaseQuantity = (productId) => {
        let newCart = cart.map((x) => {
            if(x.ProductID == productId && x.Quantity == 1){
            x.Quantity = 1
            }
            else if(x.ProductID == productId && x.Quantity > 1){
            x.Quantity--
            }
            return x
        })
        setCart(newCart)
    }

    const increaseQuantity = (productId) => {
        let newCart = cart.map((x) => {
        let quantityNow = x.Quantity +  1
        if(x.ProductID == productId && quantityNow <= x.ProductStock){
            x.Quantity++
        }
        return x
        })
        setCart(newCart)
    }
    return (
        <div>
            <div className="CartWrapper">
                <h1 className="CartTitle">YOUR PRODUCT CART</h1>
                <div className="CartTop">
                    <button className="CartTopButton">CONTINUE SHOPPING</button>
                    <span className="CartTopText">Shopping Bag({cart.length})</span>
                    <button className="CartTopButton">CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;