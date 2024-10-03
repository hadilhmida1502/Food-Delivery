import React, { useState } from 'react'
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {

    const [menu, setMenu] = useState("home"); //creat a state var and initialize it to "home"

    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Choose from a diverse menu featuring a delectable array of dishes. Our<br />mission is to satisfy your carvings and elevate your dinning experience, one<br />delicious meal at a time.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    {/* <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul> */}
                    <ul>
                        {/* <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link> */}
                        <li><a href='/' onClick={() => setMenu("home")}>Home</a></li>
                        <li><a href='#explore-menu' onClick={() => setMenu("menu")}>Menu</a></li>
                        <li><a href='/cart' onClick={() => setMenu("cart")}>Cart</a></li>
                        <li><a href='/cart' onClick={() => setMenu("email")}>Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+216 58 054 515</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright © 2024 Tomato.com - All Right Reserved.</p>
        </div>
    );
};

export default Footer;
