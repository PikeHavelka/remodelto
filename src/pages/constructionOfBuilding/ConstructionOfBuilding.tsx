import "./constructionOfBuilding.scss"
import { useEffect, useRef } from "react"

export const ConstructionOfBuilding = () => {
  const constructionOfBuilding = useRef(null)

  useEffect(() => {
    const buildingCurrent = constructionOfBuilding.current as HTMLDivElement | null

    if(buildingCurrent) buildingCurrent.scrollIntoView({ block: "center" })

    return () => {
      if(buildingCurrent) buildingCurrent.scrollIntoView(false)
    }
  }, [])

  return (
    <section className="construction-of-building-section container" ref={constructionOfBuilding}>
      <div className="construction-of-building-title-text">
        <div className="construction-of-building-title">
          <h1>Tvoříme místa, kde se život usazuje</h1>
        </div>

        <div className="construction-of-building-text">
          <p>
            Výstavba budov je epický proces, kde se plány stávají skutečností a prázdná parcela se proměňuje v domov, pracoviště nebo inspirativní prostředí. Každá cihla je krokem blíže k dokonalosti.
          </p>
        </div>
      </div>

      <div className="construction-of-building-subtitle-text">
        <div className="construction-of-building-subtitle">
          <h3>
            Smysl výstavby budov
          </h3>
        </div>

        <div className="construction-of-building-text">
          <p>
            Výstavba budov není jenom o stavbě zdí a střech. Je to proces, který vytváří základ pro každodenní život a činnosti. Je to místo, kde se skloubí design, funkce a bezpečnost.
          </p>
        </div>
      </div>

      <div className="construction-of-building-subtitle-text">
        <div className="construction-of-building-subtitle">
          <h3>
            Důležitost výstavby budov
          </h3>
        </div>

        <div className="construction-of-building-text">
          <p>
            Kvalitní výstavba je základ pro trvanlivost a úspěch každé budovy. Od základů až po poslední detaily je důležité, aby každý aspekt stavby byl proveden s ohledem na kvalitu a bezpečnost.
          </p>
        </div>
      </div>

      <div className="construction-of-building-subtitle-text">
        <div className="construction-of-building-subtitle">
          <h3>
            Naše role ve vašem projektu
          </h3>
        </div>

        <div className="construction-of-building-text">
          <p>
            Jsme zde, abychom vaše vize proměnili ve skutečnost. Naše týmy odborníků vás provedou každým krokem výstavby. Jsme tu pro vás od počátečního konceptu až po konečné dokončení, abychom zajistili, že váš projekt bude realizován přesně podle vašich představ.
          </p>
        </div>
      </div>

      <div className="construction-of-building-subtitle-text">
        <div className="construction-of-building-subtitle">
          <h3>
            Proč jsme ta správná volba
          </h3>
        </div>

        <div className="construction-of-building-text">
          <p>
            Naše firma zdůrazňuje kvalitu, preciznost a flexibilitu ve všech projektech. Spoléháte-li na nás, získáte nejenom kvalitní výsledky, ale i partnera, který naslouchá vašim potřebám a představám.
          </p>
        </div>
      </div>
    </section>
  )
}
