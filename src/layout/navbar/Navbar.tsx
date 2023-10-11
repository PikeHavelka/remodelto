import "./navbar.scss"
import logo from "../../assets/images/remodelToLogo.jpg"
import { useState } from "react"

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const hamburgerMenuHandle = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="navbar-main">
      <div className="container flex-wrapper">
        <div className="navbar-logo">
          <a href="#">
            <img src={logo} alt="logo firmy RemodelTO" />
          </a>
        </div>

        <ul className={showMenu ? "show" : "hide"}>
          <li><a href="">Služby</a></li>
          <li><a href="">Reference</a></li>
          <li><a href="">O nás</a></li>
          <li><a href="">Kontakt</a></li>
        </ul>

        <div className="navbar-hamburger-menu" onClick={hamburgerMenuHandle}>
          <span className="top line"></span>
          <span className="mid line"></span>
          <span className="bot line"></span>
        </div>
      </div>
    </nav>
  )
}
