import Button from "../../atoms/button/Button";
import Image from "../../atoms/image/Image";

const FooterMiddle = (props) => {
  return (
    <div className="footer__middle">
      <ul className="footer__middle_about">
        <li className="specific">ABOUT</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Blog</li>
        <li>News</li>
      </ul>

      <ul className="footer__middle_support">
        <li className="specific">SUPPORT</li>
        <li>Payment</li>
        <li>Shipping</li>
        <li>Cancellation & returns</li>
        <li>FAQs</li>
      </ul>

      <ul className="footer__middle_policy">
        <li className="specific">POLICY</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Intellectual Property</li>
        <li> Sitemap</li>
        <li>Security</li>
      </ul>

      <div className="footer__middle_mail-us">
        <span className="specific">MAIL US</span>
        <p className="mail-para">17187 N. Laurel Park Dr., Ste. 110 <br></br>Livonia, MI 48152 USA</p>
      </div>

      <div className="services">
        <p className="number">1800 123 4567</p>
        <p className="services-txt">Service hours: 09:00-21:00</p>
        <Button classText="chat-support-btn" buttonText="CHAT SUPPORT"/>
        <div className="payment">
          <p className="payment-methods">PAYMENT METHODS</p>
          <Image classText="credit-cards" src={"/Images/cards.png"} altText="payment methods"/>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
