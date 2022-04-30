import React, {useState, useEffect} from "react";
import "../assets/Cart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus ,faMinus} from "@fortawesome/free-solid-svg-icons"

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

    const productList = 
        cart.map((x) => {
            return(
                <div className="CartProduct" key={"myCart" + x.ProductID}>
                    <div className="CartProductDetail">
                        <img className="CartImage" src={x.ProductImage}/>
                        <div className="CartDetails">
                            <span>
                                <b>Product:</b> {x.ProductName}
                            </span>
                            <span>
                                <b>Product:</b> {x.ProductCartDesc}
                            </span>
                        </div>
                    </div>
                    <div className="CartPriceDetail">
                        <div className="CartProductAmountContainer">
                            <FontAwesomeIcon icon={faMinus} onClick={() => decreaseQuantity(x.ProductID)}></FontAwesomeIcon>
                            <div className="CartProductAmount">{x.Quantity}</div>
                            <FontAwesomeIcon icon={faPlus} onClick={() => increaseQuantity(x.ProductID)}></FontAwesomeIcon>
                        </div>
                        <div className="CartProductPrice">$ {x.ProductPrice}</div>
                    </div>
                </div>
            )
        })
    return (
        <div>
            <div className="CartWrapper">
                <h1 className="CartTitle">YOUR PRODUCT CART</h1>
                <div className="CartTop">
                    <button className="CartTopButton">CONTINUE SHOPPING</button>
                    <span className="CartTopText">Shopping Bag({cart.length})</span>
                    <button className="CartTopButton">CHECKOUT NOW</button>
                </div>
                <div className="CartBottom">
                    <div className="CartInfo">
                        {productList}
                    </div>
                    <div className="CartSummary">
                        <h1 className="CartSummaryTitle">ORDER SUMMARY</h1>
                        <div className="CartSummaryItem">
                            <span>Subtotal</span>
                            <span>$ {sumCost}</span>
                        </div>
                        <div className="CartSummaryItem">
                            <span>Estimated Shipping</span>
                            <span>$ 5.90</span>
                        </div>
                        <div className="CartSummaryItem">
                            <span>Shipping Discount</span>
                            <span>$ -5.90</span>
                        </div>
                        <div className="CartSummaryItem">
                            <span>Total</span>
                            <span>$ {sumCost}</span>
                        </div>
                        <button className="CartButton">CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const checkCart = () => {

    if(JSON.parse(localStorage.getItem("cart")) == null){
      return (
        <div>
          <h1 className="CartTitle">Don't have something in your Cart</h1>
          <button className="CartTopButton">CONTINUE SHOPPING</button>
        </div>
      )
    }
    else{
      return <Cart />
    }
  }

export default checkCart;