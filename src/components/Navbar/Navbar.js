import CartWidget from "../CartWidget/CartWidget"
import Logo from "../../images/logo_large.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navTop">
            <div className="div_logo">
                {/* <img src={Logo} alt="Logotipo" /> */}
                <Link to="/"><img src={Logo} alt="Logotipo"  className="home_button"/></Link>
            </div>
            <div className="navList">
                <Link to="category/nacionales" className="nav_buttons">Nacionales</Link>
                <Link to="category/internacionales" className="nav_buttons">Internacionales</Link>
                <Link to="category/paises" className="nav_buttons">Paises</Link>
                <Link to="category/retro" className="nav_buttons">Retro</Link>
                <Link to="category/nosotros" className="nav_buttons">Nosotros</Link>
            </div>  
            <CartWidget />        
        </nav>
    )
}

export default Navbar