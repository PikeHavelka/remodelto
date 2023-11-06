import "./headerInfoCards.scss"
import logo from "../../assets/images/remodelToLogo.jpg"
import { FlatIcon, HouseIcon } from "../../assets/svgIcons/index"

export const HeaderInfoCards = () => {
  return (
    <section className="header-cards-section container-second">
      <div className="header-flat-reconstruction-card">
        <div className="header-card-subtitle">
          <FlatIcon />
          <h2>Rekonstrukce bytu</h2>
        </div>

        <div className="header-card-text">
          <p><strong>Rekonstrukce bytu</strong> od <strong>jádra</strong> až po <strong>zařízení interiéru</strong>. Jsme <strong>stavební firma</strong>, která nemá limity.</p>
        </div>
      </div>

      <div className="header-about-us-info-card">
        <div className="header-card-subtitle">
          <img className="header-card-company-logo" src={logo} alt="logo firmy RemodelTO" />
          <h2>Stavební firma
            <span className="header-card-logo-remodelTO"> RemodelTO</span>
          </h2>
        </div>

        <div className="header-card-text">
          <p>Jsme <strong>renomovanou stavební firmou</strong> s dlouholetou zkušeností v oboru. Působíme převážně <strong>v Praze</strong> a <strong>okolí</strong>. Po domluvě s klientem není problém provést stavební práce i mimo náš region.</p>
        </div>
      </div>

      <div className="header-house-reconstruction-card">
        <div className="header-card-subtitle">
          <HouseIcon />
          <h2>Rekonstrukce domu</h2>
        </div>

        <div className="header-card-text">
          <p><strong>Rekonstrukce rodinného domu</strong> od <strong>základů</strong> až po <strong>střešní práce</strong> pro nás není problém.</p>
        </div>
      </div>
    </section>
  )
}
