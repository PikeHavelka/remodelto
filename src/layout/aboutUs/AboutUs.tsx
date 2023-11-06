import "./aboutUs.scss"
import aboutUsKitchenInterior from "../../assets/images/aboutUsKitchenInterior.jpg"

export const AboutUs = () => {
  return (
    <section className="about-us-section" id="o-nas">
      <article className="about-us-article container">
        <div className="about-us-container">
          <div className="about-us-subtitle">
            <h2>O nás</h2>
          </div>

          <div className="about-us-text">
            <p>Vítejte u stavební firmy <strong>RemodelTO</strong>. Naše firma působíme převážně <strong>v Praze</strong> a <strong>okolí</strong>. Po domluvě s klientem je možné provést stavební práce i mimo náš region. S více než <strong>osmi lety zkušeností</strong> na trhu se stavebnictvím jsme se stali jedním z předních hráčů v oboru.</p>

            <br />

            <p><span className="about-us-span-italic">Naše společnost byla založena s jediným cílem:</span> poskytovat <strong>kvalitní stavební služby</strong> a <strong>dodržovat</strong> naše <strong>závazky</strong> vůči zákazníkům.</p>

            <br />

            <p><span className="about-us-span-italic">Co nás odlišuje od ostatních?</span> Náš tým složený z <strong>kvalifikovaných stavebních inženýrů, architektů</strong> a <strong>řemeslníků</strong> má bohaté zkušenosti a <strong>know-how</strong> v oboru.</p>

            <br />

            <p>Naše hodnoty zahrnují <strong>transparentnost, komunikaci</strong> a <strong>spolupráci s klienty</strong>. Věříme, že efektivní komunikace je klíčem k úspěšnému projektu. Jsme tu, abychom vám pomohli.</p>
          </div>
        </div>

        <div className="about-us-img-container">
          <img src={aboutUsKitchenInterior} alt="nákresy stavebních projektů" />
        </div>
      </article>
    </section>
  )
}
