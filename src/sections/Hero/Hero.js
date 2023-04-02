import Link from "next/link";
import heroImage from '../../../public/images/hero/massage.png'
import Image from 'next/image';

const Hero = () => (
    <div className='hero container'>
            <div className="hero__info page-title">
                <h1 className="hero__info-title page-title">
                Smart business credit cards
                </h1>
                <div className="hero__info-description">
                    Untitled is a next-gen financial technology 
                    <br>
                    </br>
                     company in the process of reinventing banking.
                </div>
                <a href='contact-us' className='hero__button-link header__button-link'>
                <span className={`hero-button`}>
                    Contact Us
                </span>
                </a>
            </div>
            <div className='hero__image-container'>
                <Image
                    className="hero__image-container--img"
                    src={heroImage}
                    alt='Home page'
                    placeholde='blur'
                />
            </div>
        </div> 
);

export default Hero;