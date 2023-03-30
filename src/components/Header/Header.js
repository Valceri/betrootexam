import Link from 'next/link';
import { useState } from 'react';
import Logo from '../Logo/Logo';

const navigation = [
    {
        id: 1,
        title: 'Home',
        path: '/'
    },
    {
        id: 2,
        title: 'Blog',
        path: '/blog'
    },

    {
        id: 3,
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        id: 4,
        title: 'Products',
        path: '/good'
    }
]

const Header = () => {
    const [isClicked, setIsClicked] = useState(false)
    return (
        <div className='header'>
            <div className='container header__container'>
                <div className='header__block'>
                <Logo/>
                    <nav className='nav'>
                        <ul className={`nav__menu ${isClicked && 'active'}`}>
                            {navigation.map(({id, title, path}) => (
                                <li className={`nav__menu-item ${isClicked && 'active'}`} key={id}><Link href={path}>{title}</Link></li>
                            ))}
                        </ul>
                        <div className={`nav__burger ${isClicked && 'active'}`} onClick={() => setIsClicked(!isClicked)} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </nav>
                </div>
                <a href='pricing' className='header__button-link'>
                <span className={`header__button`}>
                    Sign Up
                </span>
                </a>
            </div>
            <hr />
        </div>
    );
}
export default Header;