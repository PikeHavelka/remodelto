import "./allServices.scss"

export const AllServices = () => {
  const listOfCompanyServices: string[] = [
    "Zemní práce a terénní úpravy",
    "Rekonstrukce bytů a domů na klíč",
    "Zprostředkování koupě či prodeje nemovitosti",
    "Údržba a renovace stávajících budov",
    "Elektrické instalace a vedení",
    "Stavební a demoliční práce"
  ]

  const listOfCompanyServices2: string[] = [
    "Izolace budov a zateplování",
    "Malířské a natěračské práce",
    "Pronájem lešení",
    "Interiérové řešení",
    "Rozvody voda, topení, plyn",
    "Stavební konzultační služby"
  ]

  return (
    <div className="company-services-container">
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
    </div>
  )
}
