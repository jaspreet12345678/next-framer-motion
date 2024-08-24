// components/Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Portfolio Title */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">PORTFOLIO</h1>
                </div>

                {/* Navigation Links */}
                <div className="text-center mb-6">
                    <nav className="flex justify-center space-x-6">
                        <a href="#home" className="text-white hover:text-yellow-400">HOME</a>
                        <a href="#shop" className="text-white hover:text-yellow-400">SHOP</a>
                        <a href="#about-us" className="text-white hover:text-yellow-400">ABOUT US</a>
                        <a href="#contact" className="text-white hover:text-yellow-400">CONTACT</a>
                    </nav>
                </div>

                {/* Social Media Icons */}
                <div style={{display: 'flex'}} className="flex justify-center space-x-6 text-center">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FontAwesomeIcon style={{width: '30px', height: '15px'}} icon={faInstagram} />
                    </a>
                    <a href="https://facebook.com"  target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FontAwesomeIcon style={{width: '30px', height: '15px'}} icon={faFacebookF} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <FontAwesomeIcon style={{width: '30px', height: '15px'}} icon={faTwitter} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
