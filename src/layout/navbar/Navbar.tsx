import "./navbar.scss"
import { useState } from "react"
import { useScroll, motion } from "framer-motion"

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { scrollYProgress } = useScroll()

  const hamburgerMenuHandle = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="navbar-main">
      <div className="container flex-wrapper">
        <div className="navbar-logo">
          <a href="/" className="navbar-logo-link">
            <span className="logo-remodel">Remodel<span className="logo-to">TO</span></span>
            <span className="logo-motto">Vy sníte, my stavíme</span>
          </a>
        </div>

        <ul className={showMenu ? "show" : "hide"}>
          <li>
            <a href="/#o-nas">O nás</a>
          </li>

          <li>
            <a href="/#sluzby">Služby</a>
          </li>

          <li>
            <a href="/#reference">Reference</a>
          </li>

          <li>
            <a href="/#spoluprace">Spolupráce</a>
          </li>

          <li>
            <a href="/#kontakt">Kontakt</a>
          </li>
        </ul>

        <button
          className="navbar-hamburger-menu-btn"
          onClick={hamburgerMenuHandle}
          aria-controls="primární navigace"
          aria-expanded={showMenu}
          aria-label="Tlačitko zobrazující hlavní navigaci stránky"
        >
          <svg
            className="navbar-hamburger-menu-svg"
            stroke="var(--button-color)"
            fill="none"
            viewBox="-10 -10 120 120"
            width="30"
            height="25"
          >
            <path
              className="line"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            >
            </path>
          </svg>
        </button>
      </div>

      {/* progress bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          background: "var(--decoration-color)",
          transformOrigin: "0",
          position: "fixed",
          minWidth: "100%",
          height: 15,
          top: "3.2rem",
          zIndex: "10"
        }}>
      </motion.div>
    </nav>
  )
}
