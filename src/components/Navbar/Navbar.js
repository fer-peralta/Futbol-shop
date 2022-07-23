import CartWidget from "../CartWidget/CartWidget"
import Logo from "../../images/logo_large.png"

const Navbar = () => {
    return (
        <nav className="navTop">
            <div>
                <img src={Logo} alt="Logotipo" />
            </div>
            <div className="navList">
                <button>Nacionales</button>
                <button>Internacionales</button>
                <button>Paises</button>
                <button>Retro</button>
                <button>Nosotros</button>
            </div>  
            <CartWidget />        
        </nav>
    )
}

export default Navbar