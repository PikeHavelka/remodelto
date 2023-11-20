import { Interest } from "../../components"
import "./consultation.scss"
import { useEffect, useRef } from "react"
import { Helmet } from "react-helmet-async"

export const Consultation = () => {
  const consultationRef = useRef(null)

  useEffect(() => {
    const consultationCurrent = consultationRef.current as HTMLDivElement | null

    if (consultationCurrent) consultationCurrent.scrollIntoView({ block: "center" })

    return () => {
      if (consultationCurrent) consultationCurrent.scrollIntoView(false)
    }
  })

  return (
    <section className="consultation-section container" ref={consultationRef}>
      <div className="consultation-title-text">

        <Helmet>
          <title>Konzultace | RemodelTO</title>
          <meta name="description" content="Máte nápad, ale nevíte, jak ho uskutečnit? Naši odborníci jsou tu, aby vám pomohli s plánováním a realizací vašeho projektu" />
        </Helmet>

        <div className="consultation-title">
          <h1>Cesta k společnému vizionářství</h1>
        </div>

        <div className="consultation-text">
          <p>
            Konzultace je klíčem k sdílení vašich představ a vytváření společného plánu. Je to proces, kde se setkáváme, abychom pochopili vaše potřeby a společně vytvořili strategii pro dosažení vašich cílů. Každá konzultace je začátkem spolupráce.
          </p>
        </div>
      </div>

      <div className="consultation-subtitle-text">
        <div className="consultation-subtitle">
          <h3>
            Smysl konzultací
          </h3>
        </div>

        <div className="consultation-text">
          <p>
            Konzultace není jenom o získání informací. Je to dialog, který umožňuje propojit vaše představy s naší expertizou. Je to šance prozkoumat možnosti a vytvořit plán, který bude reflektovat vaše potřeby a přání.
          </p>
        </div>
      </div>

      <div className="consultation-subtitle-text">
        <div className="consultation-subtitle">
          <h3>
            Důležitost kvalitních konzultací
          </h3>
        </div>

        <div className="consultation-text">
          <p>
            Kvalitní konzultace vyžadují naslouchání a porozumění. Jsou to momenty, kdy se formuje společná vize a strategie. Kvalitní konzultace jsou základem pro úspěch každého projektu.
          </p>
        </div>
      </div>

      <div className="consultation-subtitle-text">
        <div className="consultation-subtitle">
          <h3>
            Naše role ve vašich konzultacích
          </h3>
        </div>

        <div className="consultation-text">
          <p>
            Jsme zde, abychom vás poslouchali a pochopili vaše potřeby. Naše týmy odborníků jsou připraveny vést konzultace a společně s vámi definovat cíle a plány pro vaše projekty.
          </p>
        </div>
      </div>

      <div className="consultation-subtitle-text">
        <div className="consultation-subtitle">
          <h3>
            Proč jsme ta správná volba
          </h3>
        </div>

        <div className="consultation-text">
          <p>
            Naše firma klade důraz na individuální přístup a porozumění potřebám každého klienta. S námi získáte partnera, který vám pomůže přeměnit vaše představy do konkrétního plánu akce.
          </p>
        </div>
      </div>

      <Interest />
    </section>
  )
}
