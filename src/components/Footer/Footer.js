import Link from 'next/link';
import Logo from '../Logo/Logo';

const navigationFooter = [
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
        path: '/contact-us',
    },      
    {
        id: 4,
        title: 'Products',
        path: '/good'
    }
]

const Footer = () => (
    <div className='footer'>
        <div className="container footer__container">
            <Logo></Logo>
            <div className="footer__menu">
                {navigationFooter.map(item => {
                    const {id, title, path} = item;
                    return <li key={id}><Link href={path}>{title}</Link></li>
                })}
            </div>
            <div className="footer__copyright">
                © 2077 Dream-Home Office
            </div>
        </div>
    </div>
);

export default Footer;