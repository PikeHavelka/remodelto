import "./renovation.scss"
import { useRef, useEffect } from "react"
import { Helmet } from "react-helmet-async"

export const Renovation = () => {
  const renovationRef = useRef(null)

  useEffect(() => {
    const renovationCurrent = renovationRef.current as HTMLDivElement | null


    if (renovationCurrent) renovationCurrent.scrollIntoView({ block: "center" })

    return () => {
      if (renovationCurrent) renovationCurrent.scrollIntoView(false)
    }
  })

  return (
    <section className="renovation-section container">
      <div className="renovation-title-text">

        <Helmet>
          <title>Renovace | RemodelTO</title>
          <meta name="description" content="Naše dovednosti a zkušenosti jsou vám k dispozici. Pokud máte starou nebo opotřebovanou budovu, neváhejte se na nás obrátit. Naše služby zahrnují kompletní renovaci, modernizaci a zvýšení energetické účinnosti vaší nemovitosti." />
        </Helmet>

        <div className="renovation-title" ref={renovationRef}>
          <h1>Obnova a oživení prostorů s historií</h1>
        </div>

        <div className="renovation-text">
          <p>
            Renovace je uměním oživovat minulost prostřednictvím moderního lesku. Je to proces, kde se staré stává novým a historie se prolíná s inovacemi. Každá změna je krokem k novému začátku.
          </p>
        </div>
      </div>

      <div className="renovation-subtitle-text">
        <div className="renovation-subtitle">
          <h3>
            Smysl renovací
          </h3>
        </div>

        <div className="renovation-text">
          <p>
            Renovace neznamená jen obnovení povrchů a struktur. Je to obnova charakteru a vytvoření nového života pro staré prostory. Je to spojení tradice s modernitou a respektování dědictví.
          </p>
        </div>
      </div>

      <div className="renovation-subtitle-text">
        <div className="renovation-subtitle">
          <h3>
            Důležitost kvalitních renovací
          </h3>
        </div>

        <div className="renovation-text">
          <p>
            Kvalitní renovace vyžaduje citlivý přístup a znalost materiálů a technik. Je klíčem k zachování autenticity a kvality prostorů, zatímco jim dodává čerstvý dech a funkčnost pro současný život.
          </p>
        </div>
      </div>

      <div className="renovation-subtitle-text">
        <div className="renovation-subtitle">
          <h3>
            Naše role ve vašem projektu
          </h3>
        </div>

        <div className="renovation-text">
          <p>
            Jsme zde, abychom vaše prostory obnovili a přetvořili. Naše týmy odborníků mají zkušenosti s renovacemi různých typů budov. Jsme vaším průvodcem od začátku až do konce procesu renovace.
          </p>
        </div>
      </div>

      <div className="renovation-subtitle-text">
        <div className="renovation-subtitle">
          <h3>
            Proč jsme ta správná volba
          </h3>
        </div>

        <div className="renovation-text">
          <p>
            Naše firma zdůrazňuje individuální přístup a preciznost ve všech našich projektech. S námi máte jistotu, že vaše renovace bude provedena s respektem k minulosti a v souladu s vašimi představami.
          </p>
        </div>
      </div>
    </section>
  )
}
