import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../atoms/button/Button';
import Icon from '../../atoms/icon/Icon';
import parse from 'html-react-parser';
import { removefromCart, addToCart,reducefromCart } from '../../store/CartSlice';

const Cart = () => {

const dispatch = useDispatch();


function ratings(product){
  var ratingsGiven='';
  for(var i = 0 ; i < 5; i++){
        if(i<product.starRating){
            ratingsGiven+= `<i class="bx bxs-star"></i>`
        }
        else {
            ratingsGiven+=`<i class="bx bxs-star" style="color:#b7bdc1"></i>`
        }
  }
  return ratingsGiven;
}
  
  const products = useSelector((state) =>state.cart.cartArray);

  
  const handle = (prod, str) => {
    switch(str) {
      case "add" :
         dispatch(addToCart(prod));
         break;
      case "reduce" :
          dispatch(reducefromCart(prod));
          break;
      case "remove" :
            dispatch(removefromCart(prod));
            break;
      default:
     
    }

    
  }

  return (
    <div className='cartPage'>
      <div className='cartWrapper'>
        <ul className='basket-labels'>
          <li className='label-prods'>PRODUCTS</li>
          <li className='label-price'>PRICE</li>
          <li className='label-quantity'>QUANTITY</li>
          <li className='label-total-price'>TOTAL PRICE</li>
        </ul>

        <div className='prod-list'>
          {products.map((product)=>(            
            <div className='cart_card' key={product.id}>
              <img src={product.imageSrc} alt=''></img>
              <div className='cart_card-details'>
                <h4 className='cart_card-title'>{product.productName}</h4>
                <div>(6GB RAM)</div>
                <div className='cart_card-rating'>{parse(ratings(product))}</div>
              </div>
              <div className='cart_card-price'>{product.discountedPrice}</div>
              {/* "$"+(productprice.toString())" */}
              <div className='cart_card-quantity'>
                <Button classText='add-btn' value='add' buttonText='+' handleClick={()=>{
              handle(product,"add")}}></Button>
                <div className='count'>{product.quantity}</div>
                <Button classText='subtract-btn' value='subtract' buttonText='-' handleClick={()=>handle(product.id,"reduce")}></Button>
              </div>
              <div className='cart_card-total'>{'$'+(product.quantity*( parseInt((product.discountedPrice).replace('$','')))).toString()}</div>
              <Icon classText='bx bx-trash' clickHandler={() => handle(product.id,"remove")}/>
            </div>
          ))}
      </div>    

        <div className='price-checkout'>
          <div className='promo-code'>
            <span className='promo-text'>Promocode</span>
            <form className='input-box'>
              <input type='text' placeholder='Apply Coupon Code' ></input>
            </form>
          </div>
          <div className='checkout-discount'>Discount: $99</div>
          <div className='checkout-price'>Total price: $99</div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
