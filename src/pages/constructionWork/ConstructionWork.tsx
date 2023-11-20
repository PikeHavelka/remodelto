import { Interest } from "../../components"
import "./constructionWork.scss"
import { useEffect, useRef } from "react"
import { Helmet } from "react-helmet-async"

export const ConstructionWork = () => {
  const constructionWork = useRef(null)

  useEffect(() => {
    const constructionCurrent = constructionWork.current as HTMLDivElement | null

    if (constructionCurrent) constructionCurrent.scrollIntoView({ block: "center" })

    return () => {
      if (constructionCurrent) constructionCurrent.scrollIntoView(false)
    }
  })

  return (
    <section className="construction-work-section container">
      <div className="construction-work-title-text">

        <Helmet>
          <title>Stavební práce | RemodelTO</title>
          <meta name="description" content="Nabízíme stavební služby pro všechny typy budov, od malých domků po komerční stavby. Naši zkušení stavitelé a řemeslníci vám zajistí kvalitní výsledky, ať už jde o novou konstrukci, rozšíření stávající budovy nebo údržbu." />
        </Helmet>

        <div className="construction-work-title" ref={constructionWork}>
          <h1>Základ každého skvělého projektu</h1>
        </div>

        <div className="construction-work-text">
          <p>
            Stavební práce představují klíčovou fázi každého projektu. Jsou to ty kritické momenty, kdy se plány stávají skutečností. Od základů až po finální úpravy, stavební práce formují prostor a dávají mu život.
          </p>
        </div>
      </div>

      <div className="construction-work-subtitle-text">
        <div className="construction-work-subtitle">
          <h3>
            Podstata stavebních prací
          </h3>
        </div>

        <div className="construction-work-text">
          <p>
            Stavební práce zahrnují realizaci návrhů a plánů do konkrétní podoby. Jsou to fáze, kde se kresba na papíře stává vizuálně a materiálně hmatatelnou. Každý krok je důležitý a každý detail přispívá k celku.
          </p>
        </div>
      </div>

      <div className="construction-work-subtitle-text">
        <div className="construction-work-subtitle">
          <h3>
            Důležitost kvalitních stavebních prací
          </h3>
        </div>

        <div className="construction-work-text">
          <p>
            Kvalitní provedení stavebních prací zajišťuje bezpečnost, trvanlivost a funkčnost každého objektu. Bez správně provedených stavebních prací je projekt náchylný k problémům, které mohou v budoucnu vyžadovat opravy a zásahy.
          </p>
        </div>
      </div>

      <div className="construction-work-subtitle-text">
        <div className="construction-work-subtitle">
          <h3>
            Naše role ve vašem projektu
          </h3>
        </div>

        <div className="construction-work-text">
          <p>
            Jsme zde, abychom vaše plány uskutečnili s péčí a precizností. Naše týmy odborníků vás provedou každým krokem od počátečního návrhu až po finální dokončení. Zajišťujeme, že váš projekt bude realizován v souladu s vašimi představami a požadavky.
          </p>
        </div>
      </div>

      <div className="construction-work-subtitle-text">
        <div className="construction-work-subtitle">
          <h3>
            Proč jsme ta správná volba
          </h3>
        </div>

        <div className="construction-work-text">
          <p>
            Naše firma je založena na zásadách kvality, odbornosti a individuálního přístupu ke každému projektu. Spoléháte-li na nás, můžete očekávat nejenom skvělé výsledky, ale i profesionální přístup a ochotu plnit vaše potřeby.
          </p>
        </div>
      </div>

      <Interest />
    </section>
  )
}
