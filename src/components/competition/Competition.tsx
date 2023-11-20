import "./competition.scss"
import HastalskaWinner from "../../assets/images/competition/HastalskaWinner.png"

export const Competition = () => {
  return (
    <section className="competition-section">
      <article className="competition-article">
        <div className="competition-title-text-top">
          <div className="competition-subtitle">
            <h2>Výhra interiéru roku, Haštalská Praha</h2>
          </div>

          <div className="competition-text">
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
              Tento mezonetový byt se nestal jen obydlím. Stal se symbolem transformace a odvahy. Jsme hrdí, že jsme vytvořili místo, které není jen prostředím pro život, ale je to náš příběh o láskyplném spojení architektury a duše. Vítězný interiér roku, který je inspirací pro všechny, kteří hledají krásu v každém rohu svého domova. <a className="competition-href-italic" href="https://www.interierroku.cz/cs/interier/1161/#vice">
                Interiérroku.cz
              </a>
            </p>
          </div>
        </div>

        <div className="competition-container-img">
          <a href="https://www.interierroku.cz/cs/interier/1161/#vice">
            <img src={HastalskaWinner} alt="Interier roku, výhra interiéru roku" />
          </a>
        </div>
      </article>
    </section>
  )
}
