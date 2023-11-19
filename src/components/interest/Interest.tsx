import "./interest.scss"
import HastalskaNovinky from "../../assets/images/interest/HastalskaNovinky.png"
import HastalskaWinner from "../../assets/images/interest/HastalskaWinner.png"

export const Interest = () => {
  return (
    <section className="interest-section">
      <article className="interest-article">
        <div className="interest-title-text-top">
          <div className="interest-subtitle">
            <h2>Zajímavosti</h2>
          </div>

          <div className="interest-text">
            <p>
              V ulici Haštalská na Starém Městě v Praze 1, naše stavební firma je hrdá na svou práci. Byt o velikosti 121 m² prošel nádhernou rekonstrukcí, kde jsme věnovali zvláštní pozornost výběru kvalitních materiálů s dlouhou životností a nízkou údržbou.
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
              Jsme přesvědčeni, že naše práce není pouze o stavbě stěn a pokládání podlah, ale o transformaci prostoru na místo, které sdílí vaše životní příběhy a sní o tom, co může být. Jsme hrdí na to, jak jsme dokázali vytvořit nejen prostor, ale také domov, který odráží krásu a kvalitu naší práce. <a className="interest-article-href-italic" href="https://www.novinky.cz/clanek/bydleni-promena-mezonetoveho-bytu-mela-vyresit-nevhodne-drivejsi-upravy-40361284">
                Novinky.cz
              </a>
            </p>
          </div>
        </div>

        <a href="https://www.novinky.cz/clanek/bydleni-promena-mezonetoveho-bytu-mela-vyresit-nevhodne-drivejsi-upravy-40361284">
          <img src={HastalskaNovinky} alt="Novinky.cz, rekonstrukce bytu Haštalská" />
        </a>
      </article>

      <article className="interest-article2">
        <div className="interest-title-text-top2">
          <div className="interest-subtitle2">
            <h2>Výhra interiéeru roku, Haštalská Praha</h2>
          </div>

          <div className="interest-text2">
            <p>
              Vítězným interiérem roku se stal náš ohromující mezonetový byt v Haštalské ulici v Praze. Naše rekonstrukce nebyla jen o technických aspektech, byla to proměna srdce tohoto bytu.
            </p>

            <br />

            <p>
              Otevřeli jsme dveře do nového světa designu. Odstranili jsme překážky, které bránily proudění světla a energie, a odhalili jsme krásu dřeva krovů, aby každý pohled byl jako malba přírody.
            </p>

            <br />

            <p>
              Bílé stěny oživené pastelovými odstíny vytvářejí harmonii a klid, zatímco do tmy nasáklá černá dodává eleganci a kontrast. Tento taneček barev a kontrastů otevírá dveře do nového světa estetiky.
            </p>

            <br />

            <p>
              Tento mezonetový byt se nestal jen obydlím. Stal se symbolem transformace a odvahy. Jsme hrdí, že jsme vytvořili místo, které není jen prostředím pro život, ale je to náš příběh o láskyplném spojení architektury a duše. Vítězný interiér roku, který je inspirací pro všechny, kteří hledají krásu v každém rohu svého domova. <a className="interest-article-href-italic2" href="https://www.interierroku.cz/cs/interier/1161/#vice">
                Interiérroku.cz
              </a>
            </p>
          </div>
        </div>

        <a href="https://www.interierroku.cz/cs/interier/1161/#vice">
          <img src={HastalskaWinner} alt="Interier roku, výhra interiéru roku" />
        </a>
      </article>
    </section>
  )
}
