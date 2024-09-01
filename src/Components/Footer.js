import React from 'react'
import './Footer.css';
const Footer = () => {
    return (


        <footer>
            <div class="footer-container">
                <div class="footer-section subscribe">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettä muse.</p>
                    <form>
                        <input type="email" placeholder="Enter your e-mail..." required />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div class="footer-section contact">
                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h3>CURRENCY</h3>
                    <p><img height={20} width={20} src="/assets/usa.png" alt="USD" /> - USD</p>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>


            </div>
            <div class="footer-bottom">
                <div class="footer-containers">
                    <div class="footer-section links">
                        <h3>mettā muse</h3>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Stories</a></li>
                            <li><a href="#">Artisans</a></li>
                            <li><a href="#">Boutiques</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">EU Compliances Docs</a></li>
                        </ul>
                    </div>

                    <div class="footer-section quick-links">
                        <h3>QUICK LINKS</h3>
                        <ul>
                            <li><a href="#">Orders & Shipping</a></li>
                            <li><a href="#">Join/Login as a Seller</a></li>
                            <li><a href="#">Payment & Pricing</a></li>
                            <li><a href="#">Return & Refunds</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div class="footer-section follow-us">
                        <h3>FOLLOW US</h3>
                        <div class="social-icons">
                            <a href="#"><img height={20} width={20} src="/assets/instagram.png " alt="Instagram" /></a>
                            <a href="#"><img height={20} width={20} src="/assets/linkedin.png " alt="LinkedIn" /></a>
                        </div>
                        <h3>mettā muse ACCEPTS</h3>
                        <div class="payment-icons">
                            <img height={30} width={40} src="/assets/apple.png" alt="Apple Pay" />
                            <img height={30} width={40} src="/assets/google-pay.png" alt="Google Pay" />
                            <img height={30} width={40} src="/assets/american-express.png" alt="American Express" />
                            <img height={30} width={40} src="/assets/card.png" alt="Mastercard" />
                            <img height={30} width={40} src="/assets/paypal.png" alt="PayPal" />
                            {/* <img src="/assets/paypal.png" alt="PayPal" /> */}
                        </div>
                    </div>
                </div>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>



    )
}

export default Footer