import Icon from "../../atoms/icon/Icon";
import Image from "../../atoms/image/Image";
import parse from "html-react-parser";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishList,
  removefromWishList,
  addToCart,
} from "../../store/CartSlice";
import { setCompareItems } from "../../store/CompareSlice";
import Button from "../../atoms/button/Button";
import { Link } from "react-router-dom";

function Card({ data, altText }) {
  //child component
  // const {modelName, ratings} = props;  //destructuring object
  const [counter, setCounter] = useState(false);

  const dispatch = useDispatch();
  const { cartArray } = useSelector((state) => state.cart);
  var ratingsGiven = "";
  for (var i = 0; i < 5; i++) {
    if (i < data.starRating) {
      ratingsGiven += `<i class="bx bxs-star"></i>`;
    } else {
      ratingsGiven += `<i class="bx bxs-star" style="color:#b7bdc1"></i>`;
    }
  }
  const ToastMsg = ({ message, setIcon }) => (
    <div className="toast-container">
      <img
        className="toast-img"
        src="/Images/productImages/samsung.png"
        alt="phone"
      />
      {message}
      {setIcon ? <i className="bx bxs-check-circle circle-icon"></i> : null}
    </div>
  );

  const wishListHandler = (product) => {
    const notify = (msg, seticon) =>
      toast(<ToastMsg message={msg} setIcon={seticon} />);

    if (!counter) {
      dispatch(addToWishList(product));
      notify("Added To Wishlist", true);
      setCounter(true);
    } else {
      dispatch(removefromWishList(product.id));
      notify("Removed from Wishlist", false);
      setCounter(false);
    }
  };

  const addToCartHandler = (prod) => {
    dispatch(addToCart(prod));
  };

  return (
    <div className="card">
      <Icon
        classText={counter ? "bx bxs-heart" : "bx bx-heart"}
        clickHandler={() => wishListHandler(data)}
      />
      <Image classText="card_image" src={data.imageSrc} altText="phone"></Image>
      {data.new ? <span className="new-label">new</span> : null}
      <div className="card-content">
        <p className="prod-name">{data.productName}</p>
        <div className="rating">
          {/* converts html strings to react components */}
          {parse(ratingsGiven)}
        </div>
        <div className="price">
          <span className="price-new">{data.discountedPrice}</span>
          <span className="price-orignal">{data.originalPrice}</span>
          <span className="discount">{data.discountPercent}</span>
        </div>
        <div className="btns">
          <Button
            classText="add-to-cart btn"
            value="add-to-cart"
            buttonText={
              cartArray.filter((item) => item.id === data.id).length > 0
                ? "Added"
                : "Add To Cart"
            }
            handleClick={() => addToCartHandler(data)}
            isDisabled={
              cartArray.filter((item) => item.id === data.id).length > 0
                ? true
                : false
            }
          />
          <Link to="/cart">
            <Button
              classText="buy-now"
              value="buy-now"
              buttonText="Buy Now"
              handleClick={() => {
                var index = true;
                if (cartArray) {
                  index =
                  cartArray.findIndex((item) => item.id === data.id) < 0
                      ? true
                      : false;
                }
                if (index) {
                  addToCartHandler(data);
                }
              }}
            />
          </Link>
        </div>
        <Button
          classText="add-to-compare"
          value="add-to-compare"
          buttonText="+ ADD TO COMPARE"
          handleClick={() => {
            dispatch(setCompareItems(data))
          }}
        />
      </div>  
    </div>
  );
}

export default Card;
