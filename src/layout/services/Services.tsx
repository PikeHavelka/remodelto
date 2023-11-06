import "./services.scss"
import dataServiceCards from "../../data/dataServiceCards"
import { ServiceCard } from "../../components/cardsOfServices/ServiceCard"

export const Services = () => {
  return (
    <section className="services" id="sluzby">
      <article className="services-article container-second">
        <div className="services-title-text-top">
          <div className="services-subtitle">
            <h2>Služby</h2>
          </div>

          <div className="services-text">
            <p>
              Naše široké spektrum služeb <strong>přináší kvalitní</strong> a <strong>komplexní řešení</strong> pro <strong>všechny</strong> vaše <strong>stavební potřeby</strong>. Nezáleží na tom, zda plánujete <strong>stavbu nového domu, renovaci</strong> stávající <strong>budovy</strong>, nebo jakýkoliv jiný <strong>stavební projekt</strong>, jsme zde, abychom vám pomohli proměnit vaši vizi v realitu.
            </p>
          </div>
        </div>

        <div className="services-img-text-container">
          <ServiceCard {...dataServiceCards.interiery} />
          <ServiceCard {...dataServiceCards.renovace} />
          <ServiceCard {...dataServiceCards.stavebniPrace} />
          <ServiceCard {...dataServiceCards.vystavbaBudov} />
          <ServiceCard {...dataServiceCards.konzultace} />
          <ServiceCard {...dataServiceCards.ostatni} />
        </div>
      </article>
    </section >
  )
}
