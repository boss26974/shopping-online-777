import React, { useState } from "react";
import "../assets/ShopDetail.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [quantity, setQuantity] = useState(0)
  const [selector, setSelector] = useState("")
  const [product, setProduct] = useState({
    ProductID: 3,
    ProductSKU: "",
    ProductName: "Phone",
    ProductPrice: 2000.0,
    ProductWeight: 59.0,
    ProductCartDesc: "Cart",
    ProductShortDesc: "Short",
    ProductLongDesc: "LONGLONGLONGLONGLONG",
    ProductThumb: "",
    ProductImage: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
    ProductCategoryID: 2,
    ProductUpdateDate: "",
    ProductStock: 20,
    ProductLive: 1,
    ProductUnlimited: 1,
    ProductLocation: "there"
  })

  const navigate = useNavigate()

  const addToCart = () => {
    let path = "/home"
    let newCart = []
    let cart = JSON.parse(localStorage.getItem("cart"))
    product.Quantity = quantity
    if(quantity == 0){
        return
    }
    else if(cart == null){
      newCart.push(product)
      alert("new cart")
      localStorage.setItem("cart", JSON.stringify(newCart))
      navigate(path)
      return
    }
    let check = cart.filter(x => x.ProductID != product.ProductID)
    if(check.length < cart.length){
      newCart = cart.map(x => x)
      newCart = cart.map((x) => {
        let plus = x.ProductStock
        if(x.ProductID == product.ProductID){
          x.Quantity = x.Quantity + product.Quantity
        }
        return x
      })
      alert("plus cart")
    }
    else{
      newCart = cart.map(x => x)
      newCart.push(product)
      alert("add to cart")
    }
    localStorage.setItem("cart", JSON.stringify(newCart))
    navigate(path)
  }

  const decreaseQuantity = () => {
    if(quantity == 0){
        setQuantity(0)
    }
    else if(quantity > 0){
        setQuantity(Number(quantity) - 1)
    }
  }

  const increaseQuantity = () => {
    let quantityNow = 0
    if(JSON.parse(localStorage.getItem("cart")) == null){
        quantityNow = quantity
    }
    else{
        quantityNow = JSON.parse(localStorage.getItem("cart")).filter((x) => {
            return x.ProductID == product.ProductID
        })[0].Quantity + quantity
    }

    if(Number(quantityNow) == Number(product.ProductStock)){
        setQuantity(quantity)
    }
    else if(quantityNow < product.ProductStock){
        setQuantity(Number(quantity) + 1)
    }
  }

  const checkStock = () => {
    if(product.ProductStock == 0){
      return "red"
    }
    else{
      return "green"
    }
  }

    return (
        <div>
            <div className="Wrapper">
                <div className="ImgContainer">
                    <img className="Image" src={product.ProductImage}></img>
                </div>
                <div className="InfoContainer">
                    <h1 className="Title">{product.ProductName}</h1>
                    <p className="Desc" style={{color: checkStock()}}>
                        สินค้าคงเหลือ {product.ProductStock} ชิ้น
                    </p>
                    <p className="Desc">
                        {product.ProductLongDesc}
                    </p>
                    <span className="Price">$ {product.ProductPrice}</span>
                    <div className="FilterContainer">
                        <div className="Filter">
                            <span className="FilterTitle">Color</span>
                            <div className="FilterColor" style={{backgroundColor: "black"}}></div>
                            <div className="FilterColor" style={{backgroundColor: "darkblue"}}></div>
                            <div className="FilterColor" style={{backgroundColor: "gray"}}></div>
                        </div>
                        <div className="Filter">
                            <span className="FilterTitle">Size</span>
                            <select className="FilterSize">
                                <option>s</option>
                                <option>m</option>
                                <option>L</option>
                                <option>xl</option>
                            </select>
                        </div>
                    </div>
                    <div className="AddContainer">
                        <div className="AmountContainer">
                            <FontAwesomeIcon onClick={decreaseQuantity} icon={faMinusCircle} />
                            <span className="Amount">{quantity}</span>
                            <FontAwesomeIcon onClick={increaseQuantity} icon={faPlusCircle} />
                        </div>
                        <button className="Button" onClick={addToCart}>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;