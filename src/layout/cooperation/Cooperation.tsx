import "./cooperation.scss"
import dataCooperationLogos from "../../data/dataCooperationLogos"

export const Cooperation = () => {
  return (
    <section className="cooperation">
      <h2 className="interest-subtitle">Naše spolupráce</h2>

      <div className="cooperation-logos-container container">
        {dataCooperationLogos.map((oneLogo, index) => {
          return (
            <a href={oneLogo.url} key={index} aria-label={oneLogo.ariaLabel}>
              <img src={oneLogo.img} alt="Logo firmy" className="logo" />
            </a>
          )
        })}
      </div>
    </section>
  )
}