import React from "react";
import { BsFillTelephoneFill, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi"
import { MdEmail } from "react-icons/md";
import LocaleContext from "../contexts/LocaleContext";

const Footer = () => {
  const { locale } = React.useContext(LocaleContext);

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>{locale === 'id' ? 'Tentang' : 'About'}</h4>
                        <ul>
                            <li><a href="/">{locale === 'id' ? 'Tentang Breath' : 'About Breath'}</a></li>
                            <li><a href="/shop">{locale === 'id' ? 'Belanja' : 'Shop'}</a></li>
                            <li><a href="/plant-care">{locale === 'id' ? 'Perawatan Tanaman' : 'Plant Care'}</a></li>
                            <li><a href="/services">{locale === 'id' ? 'Layanan' : 'Services'}</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{locale === 'id' ? 'Ketentuan' : 'Terms'}</h4>
                        <ul>
                            <li><a href="/">{locale === 'id' ? 'Ketentuan Layanan' : 'Terms of Service'}</a></li>
                            <li><a href="/">{locale === 'id' ? 'Kebijakan Privasi' : 'Privacy Policy'}</a></li>
                            <li><a href="/">{locale === 'id' ? 'Pengembalian dan Pengiriman' : 'Return and Delivery'}</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{locale === 'id' ? 'Kontak' : 'Contacts'}</h4>
                        <ul>
                            <li><a><HiLocationMarker/> Jakarta, Soekarno Hatta No. 13</a></li>
                            <li><a><BsFillTelephoneFill/> 082050123458</a></li>
                            <li><a><BiTime/>{locale === 'id' ? ' Jam Buka' : ' Business Hours:'} 08:00 - 24:00</a></li>
                            <li><a><MdEmail/> breath@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>{locale === 'id' ? 'Ikuti Kami' : 'Follow us'}</h4>
                        <div className="social-links">
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