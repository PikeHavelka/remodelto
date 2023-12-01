import "./aboutUs.scss"
import aboutUsKitchenInterior from "../../assets/images/aboutUs/aboutUsKitchenInterior kopie.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"

export const AboutUs = () => {
  return (
    <section className="about-us-section" id="o-nas">
      <article className="about-us-article container">
        <div className="about-us-container">
          <div className="about-us-subtitle">
            <h2>O nás</h2>
          </div>

          <div className="about-us-text">
            <p>
              Vítejte u stavební firmy <strong>RemodelTO</strong>. Naše firma působí převážně <strong>v Praze</strong> a <strong>okolí</strong>. Po domluvě s klientem je možné provést stavební práce i mimo náš region.
            </p>

            <br />

            <p>
              S více než <strong>osmi lety zkušeností</strong> na trhu se stavebnictvím jsme se stali jedním z předních hráčů v oboru.
            </p>

            <br />

            <p>
              Náš tým zahrnuje <strong>zkušené stavební inženýry, architekty</strong> a <strong>řemeslníky</strong>. Sledujeme nejnovější trendy v <strong>oblasti stavebnictví</strong> a neustále se vzděláváme, abychom našim klientům poskytli ty <strong>nejlepší stavební řešení</strong>.
            </p>

            <br />

            <p>
              Naše hodnoty zahrnují <strong>transparentnost, komunikaci</strong> a <strong>spolupráci s klienty</strong>. Věříme, že efektivní komunikace je klíčem k úspěšnému projektu. Jsme tu, abychom vám pomohli.
            </p>
          </div>

          <a className="about-us-btn-contact" href="#kontakt">dejte nám vědět</a>
        </div>


        <div className="about-us-img-container">
          <LazyLoadImage
            src={aboutUsKitchenInterior}
            alt="kuchyň po rekonstrukci"
            placeholderSrc={remodelToPlaceHolder}
          />
        </div>
      </article>
    </section>
  )
}
