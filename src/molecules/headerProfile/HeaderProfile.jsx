import Button from "../../atoms/button/Button";
import Icon from "../../atoms/icon/Icon";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


const HeaderProfile = (props) => {
  const items = useSelector(state => state.cart.wishlist);
  const cartItems = useSelector(state => state.cart.cartArray)
  console.log(items);
  return (
    <>
      <div className="header__profile">
        <Button
          classText="btn-top_nav"
          buttonText="WISHLIST"
          element2={<Icon classText="bx bx-heart wish-fix" count={items.length} />}
        />

        <ToastContainer hideProgressBar={true} autoClose={1000} closeButton={false}  theme="dark" />


        <Link to='/cart'>
          <Button
            classText="btn-top_nav"
            buttonText="CART"
            element2={<Icon classText="bx  bx-shopping-bag cart-count" count={cartItems.length}/>}
          />
        </Link>
        
        <Button
          classText="btn-top_nav"
          element1={<Icon classText="bx bx-user" />}
          buttonText="SANSRITI SHARMA"
          element2={<Icon classText="bx bx-down-arrow" />}
        />
      </div>
    </>
  );
};

export default HeaderProfile;
