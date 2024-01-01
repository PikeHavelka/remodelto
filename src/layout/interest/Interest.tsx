import "./interest.scss"
import HastalskaNovinky from "../../assets/images/interest/HastalskaNovinky.png"
import { Competition } from "../../components/competition/Competition"

export const Interest = () => {
  return (
    <section className="interest-section" id="zajimavosti">
      <article className="interest-article container">
        <div className="interest-title-text-top">
          <div className="interest-subtitle">
            <h2>Zajímavosti</h2>
          </div>

          <div className="interest-text">
            <p>
              Naše stavební firma je hrdá na svou práci v ulici Haštalská na Starém Městě v Praze 1. Byt o velikosti 121 m² prošel nádhernou rekonstrukcí, kde jsme věnovali zvláštní pozornost výběru kvalitních materiálů s dlouhou životností a nízkou údržbou.
            </p>

            <br />

            <p>
              Naším cílem bylo nejen přeměnit tento prostor, ale také mu dodat životnost a eleganci. Každý krok rekonstrukce byl pečlivě promyšlen tak, aby se prostor stal světlejším, vzdušnějším a zároveň prostornějším.
            </p>

            <br />

            <p>
              Díky širokému portfoliu zkušeností našich odborníků se nám podařilo zdůraznit každý detail, abychom vytvořili prostor plný harmonie a příjemného životního prostředí. Výsledkem je byt, který září novým světlem a nabízí komfort a pohodu.
            </p>

            <br />

            <p>
              Jsme přesvědčeni, že naše práce není pouze o stavbě stěn a pokládání podlah, ale o transformaci prostoru na místo, které sdílí vaše životní příběhy a sní o tom, co může být.
            </p>

            <br />

            <div className="interest-href-italic-container">
              <a className="interest-href-italic" href="https://www.novinky.cz/clanek/bydleni-promena-mezonetoveho-bytu-mela-vyresit-nevhodne-drivejsi-upravy-40361284">
                Novinky.cz
              </a>
            </div>
          </div>
        </div>

        <a href="https://www.novinky.cz/clanek/bydleni-promena-mezonetoveho-bytu-mela-vyresit-nevhodne-drivejsi-upravy-40361284">
          <img src={HastalskaNovinky} alt="Novinky.cz, rekonstrukce bytu Haštalská" />
        </a>
      </article>

      <Competition />
    </section>
  )
}
