import "./interiors.scss"
import { useRef, useEffect } from "react"
import { Interest } from "../../components"
import { Competition } from "../../components/competition/Competition"
import { Helmet } from "react-helmet-async"

export const Interiors = () => {
  const interiorsRef = useRef(null)

  useEffect(() => {
    const interiorsCurrent = interiorsRef.current as HTMLDivElement | null

    if (interiorsCurrent) interiorsCurrent.scrollIntoView({ block: "center" })

    return () => {
      if (interiorsCurrent) interiorsCurrent.scrollIntoView(false)
    }
  })

  return (
    <section className="interiors-section container">
      <div className="interiors-title-text">

        <Helmet>
          <title>Interiéry | RemodelTO</title>
          <meta name="description" content="Jsme vaším partnerem pro interiérové řešení vašeho domova nebo komerčního prostoru. Naše stavební dovednosti a kreativita spolu s vášmi představami přemění každý interiér na místo, které odráží vaši jedinečnou osobnost a styl." />
        </Helmet>

        <div className="interiors-title" ref={interiorsRef}>
          <h1>Vítáme Vás ve Světě Interiérů!</h1>
        </div>

        <div className="interiors-text">
          <p>
            Interiéry jsou srdcem každého domova, obchodu nebo kanceláře. Jsou to ty magické prostory, které odrážejí vaši osobnost, váš styl a váš příběh. Zkrátka - je to místo, které je zcela vaše.
          </p>
        </div>
      </div>

      <div className="interiors-subtitle-text">
        <div className="interiors-subtitle">
          <h3>
            Co jsou Interiéry?
          </h3>
        </div>

        <div className="interiors-text">
          <p>
            Interiéry nejsou jenom místa s nábytkem a dekoracemi. Jsou to zrcadla vaší kreativity, místo, kde se stýká umění s funkcionalitou. Jsou to prostory, které mohou být proměnlivé jako vaše nálady, a přitom zůstávají stálou součástí vašeho života.
          </p>
        </div>
      </div>

      <div className="interiors-subtitle-text">
        <div className="interiors-subtitle">
          <h3>
            Proč jsou důležité?
          </h3>
        </div>

        <div className="interiors-text">
          <p>
            Dobře navržený interiér vytváří prostor, ve kterém se cítíte jako doma, inspirovaní a plní energie. Je to prostředí, které podporuje váš životní styl a vaše potřeby. Nejde jenom o estetiku - ideální interiér dokáže zlepšit váš denní život, usnadnit pracovní proces nebo jenom přinést radost pohledem na něco krásného.
          </p>
        </div>
      </div>

      <div className="interiors-subtitle-text">
        <div className="interiors-subtitle">
          <h3>
            Jak vám můžeme pomoci?
          </h3>
        </div>

        <div className="interiors-text">
          <p>
            Jsme tady, abychom vám pomohli vytvořit interiéry, které budou vyhovovat vašemu životnímu stylu a přání. Naše týmy expertů jsou tu, aby vás provedli každým krokem - od konceptuálního návrhu po realizaci. Známe sílu dobrého designu a precizního provedení.
          </p>
        </div>
      </div>

      <div className="interiors-subtitle-text">
        <div className="interiors-subtitle">
          <h3>
            Proč vybrat naši firmu?
          </h3>
        </div>

        <div className="interiors-text">
          <p>
            Naše firma se zavazuje k nejvyšší kvalitě a individuálnímu přístupu ke každému zákazníkovi. S námi získáte nejenom nádherné interiéry, ale i zážitek z procesu jejich vzniku. Jsme tu pro vás, abychom vaše představy proměnili v realitu.
          </p>

          <br />

          <p>
            Přijďte a pojďme společně oživit vaše prostory do života. Věříme, že každý prostor má svůj příběh - a my se těšíme, že budeme součástí toho vašeho.
          </p>
        </div>
      </div>

      <Interest />
      <Competition />
    </section>
  )
}
