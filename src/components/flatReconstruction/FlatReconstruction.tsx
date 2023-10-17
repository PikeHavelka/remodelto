import "./flatReconstruction.scss"
import flatImage from "../../assets/images/papers2.jpg"

export const FlatReconstruction = () => {
  return (
    <section className="flat-reconstruction">
      <article className="flat-reconstruction-container container">
        <div className="flat-reconstruction-img-container">
          <img src={flatImage} alt="" />
        </div>

        <div className="flat-flex-wrapper">
          <div className="flat-reconstruction-title">
            <h3>Rekonstrukce bytu</h3>
          </div>

          <div className="flat-reconstruction-text">
            <p>Naše společnost se specializuje na rekonstrukce bytu s vizí a kreativitou. Proměňte své obydlí v místo, které zrcadlí vaši osobnost a styl. S námi můžete očekávat špičkovou kvalitu, péči o detaily a dokonalý výsledek. Naši zkušení řemeslníci a designéři vám pomohou dosáhnout toho, co jste si vždy přáli.</p>

            <br />

            <p>Zvýšte hodnotu svého bytu a zároveň vytvořte funkční a esteticky příjemné prostředí pro vaše každodenní životy. Rekonstrukce bytu s námi znamená bezstarostný proces, kde se o vše postaráme my. Od nápadu po realizaci vám stojíme po boku.</p>
          </div>
        </div>
      </article>
    </section>
  )
}
