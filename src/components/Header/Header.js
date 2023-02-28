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
        title: 'Products',
        path: '/products'
    },
    {
        id: 3,
        title: 'Resources',
        path: '/resources'
    },
    {
        id: 4,
        title: 'Pricing',
        path: '/pricing'
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

                <span className={`header__button`}>
                    <a href='/resources' className='header__button-link'>Sign Up</a>
                </span>
            </div>
            <hr />
        </div>
    );
}
export default Header;