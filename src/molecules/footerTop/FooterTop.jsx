import Icon from "../../atoms/icon/Icon";
import Button from "../../atoms/button/Button";

const FooterTop = (props) => {
    return(
        <div className="footer__top">
            <div className="stay-in-touch">
                <h3>LET'S STAY IN TOUCH</h3>
                <p>Get updates on sales special and more</p>
            </div>
            <div className="subscribe-mail-btn">Email address 
                <Button classText="subscribe" buttonText="SUBSCRIBE"/>
            </div>
            <div className="follow-kraya">
                <h3>FOLLOW KRAYA</h3>
                <p>We want to hear from you</p>
            </div>
            <ul className="socials">
            <Icon classText="bx bxl-facebook-square" />
            <Icon classText="bx bxl-twitter" />
            <Icon classText="bx bxl-youtube" />
            <Icon classText="bx bxl-instagram" />
            </ul>
        </div>
    );
}

export default FooterTop;