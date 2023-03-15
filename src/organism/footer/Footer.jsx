import FooterTop from "../../molecules/footerTop/FooterTop";
import FooterMiddle from "../../molecules/footerMiddle/FooterMiddle";
import FooterBottom from "../../molecules/footerBottom/FooterBottom";

const Footer =(props) => {
    return (
    <>
    <footer className="footer">
     <FooterTop />
     <FooterMiddle />
     <FooterBottom />
    </footer>
     
    </>)
 }
 
 export default Footer;