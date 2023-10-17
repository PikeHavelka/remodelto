import "./header.scss"
import logo from "../../assets/images/remodelToLogo.jpg"
import { FlatIcon, HouseIcon } from "../../assets/svgIcons/index"

export const Header = () => {
  return (
    <header>
      <div className="overlay">
        <div className="header-text-container">
          <h1>stavby & rekonstrukce</h1>
          <p>Stavební firma Remodel TO, stavba podle vašich představ</p>
        </div>
      </div>

      <div className="header-info">
        <div className="header-flat-reconstruction-info">
          <div className="header-svg-container">
            <FlatIcon />
            <h1 className="header-title">Rekonstrukce bytu</h1>
          </div>

          <div className="header-text">
            <p>Rekonstrukce bytu je proces, při kterém se mění a modernizuje interiér bytu, včetně obnovy povrchů, instalace nového vybavení.</p>
          </div>
        </div>

        <div className="header-about-us-info">
          <div className="header-logo-container">
            <img src={logo} alt="logo firmy RemodelTO" />

            <h1 className="header-title">Stavební firma
              <span className="header-logo-remodelTO"> Remodel TO</span>
            </h1>
          </div>

          <div className="header-text">
            <p>Jsme renomovanou stavební firmou s dlouholetou zkušeností v oboru.</p>
          </div>
        </div>

        <div className="header-house-reconstruction-info">
          <div className="header-svg-container">
            <HouseIcon />
            <h1 className="header-title">Rekonstrukce domu</h1>
          </div>

          <div className="header-text">
            <p>Rekonstrukce rodinného domu je komplexní proces, při kterém dochází k opravě a modernizaci celého domu.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
