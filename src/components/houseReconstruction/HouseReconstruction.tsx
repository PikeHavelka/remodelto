import "./houseReconstruction.scss"
import houseImage from "../../assets/images/papers4.jpg"

export const HouseReconstruction = () => {
  return (
    <section className="house-reconstruction">
      <article className="house-reconstruction-container container">
        <div className="house-reconstruction-img-container">
          <img src={houseImage} alt="" />
        </div>

        <div className="house-flex-wrapper">
          <div className="house-reconstruction-title">
            <h3>Rekonstrukce rodinného domku</h3>
          </div>

          <div className="house-reconstruction-text">
            <p>Umožněte nám přeměnit váš rodinný dům na oázu pohodlí a elegance. Naše týmy řemeslníků a designérů jsou zde, aby vám pomohli dosáhnout dokonalé harmonie mezi funkcionalitou a estetikou. S námi můžete očekávat prvotřídní kvalitu, ať už plánujete renovaci kuchyně, koupelny nebo celého domu.</p>

            <br />

            <p>Oživte svůj rodinný dům. Umožněte nám vám ukázat, co dokážeme. Kontaktujte nás hned dnes a začněme společně budovat váš nový domov.</p>
          </div>
        </div>
      </article>
    </section>
  )
}

