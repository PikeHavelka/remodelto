import { Contact, OpeningHours } from "../../components"
import "./prefooter.scss"

export const Prefooter = () => {
  const listOfCompanyServices: string[] = [
    "Návrh staveb a inženýringové služby",
    "Rekonstrukce bytů a domů na klíč",
    "Zemní práce a terénní úpravy",
    "Stavební a demoliční práce",
    "Betonářské práce",
    "Zdivo a zednické práce",
    "Instalace střech",
    "Vodoinstalace a kanalizace",
    "Topení, větrání a klimatizace",
    "Elektrické instalace a vedení",
    "Zprostředkování koupě či prodeje nemovitosti"
  ]

  const listOfCompanyServices2: string[] = [
    "Montáž oken a dveří",
    "Izolace budov a zateplování",
    "Malířské a natěračské práce",
    "Instalace podlahových krytin",
    "Výstavba garáží, skladů a dalších budov",
    "Montáž interiérových a exteriérových obkladů",
    "Údržba a renovace stávajících budov",
    "Stavební konzultační služby",
    "Rozvody voda, topení, plyn",
    "Interiérové řešení",
    "Pronájem lešení"
  ]

  const companyServices = () => {
    return (
      <>
        <ul className="company-services">
          {listOfCompanyServices.map((oneService, index) => {
            return (
              <li className="one-company-service" key={index}>{oneService}</li>
            )
          })}
        </ul>

        <ul className="company-services">
          {listOfCompanyServices2.map((oneService, index) => {
            return (
              <li className="one-company-service" key={index}>{oneService}</li>
            )
          })}
        </ul>
      </>
    )
  }

  return (
    <section className="prefooter-section" id="kontakt">
      <div className="prefooter-contact-services-opening-hours container">
        <Contact />

        <div className="company-services-container">
          {companyServices()}
        </div>

        <OpeningHours />
      </div>
    </section>
  )
}
