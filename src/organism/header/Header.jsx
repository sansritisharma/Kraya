import HeaderNav from "../../molecules/headerNav/HeaderNav";
import HeaderProfile from "../../molecules/headerProfile/HeaderProfile";

const Header =(props) => {
   return (
   <>
   <header className="header">
    <HeaderProfile quantity={props.quantity} />
    <HeaderNav />
   </header>
    
   </>)
}

export default Header;