import Header from './../../../alpina-ui/src/components/Header/Header'
import Blog from '../../../alpina-ui/src/components/Blog/Blog'
// import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../Nav/Navbar';



const Layout = ({children}) => (
    <div>
        <Navbar/>
        {/*<Header/>*/}
        {children}
        <Footer/>
    </div>
);

export default Layout;