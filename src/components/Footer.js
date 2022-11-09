import React from "react";
import { BsFillTelephoneFill, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi"
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="/">About Breath</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/plant-care">Plant Care</a></li>
                            <li><a href="/services">Services</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Terms</h4>
                        <ul>
                            <li><a href="/">Terms of Service</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Return and Delivery</a></li>
                            <li><a href="/">Cookies</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Contacts</h4>
                        <ul>
                            <li><a href="/"><HiLocationMarker/> Jakarta, Soekarno Hatta No. 13</a></li>
                            <li><a href="/"><BsFillTelephoneFill/> 082050123458</a></li>
                            <li><a href="/"><BiTime/> Business Hours: 08:00 - 24:00</a></li>
                            <li><a href="/"><MdEmail/> breath@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="/"><BsFacebook/></a>
                            <a href="/"><BsTwitter/></a>
                            <a href="/"><BsInstagram/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer