import "./others.scss"
import { useRef, useEffect } from "react"
import { Helmet } from "react-helmet-async"

export const Others = () => {
  const othersRef = useRef(null)

  useEffect(() => {
    const othersCurrent = othersRef.current as HTMLDivElement | null

    if (othersCurrent) othersCurrent.scrollIntoView({ block: "center" })

    return () => {
      if (othersCurrent) othersCurrent.scrollIntoView(false)
    }
  })

  return (
    <section className="others-section container">
      <div className="others-title-text">

        <Helmet>
          <title>Ostatní | RemodelTO</title>
          <meta name="description" content="Máte speciální požadavek a nevíte, jak ho uskutečnit? Neváhejte nás kontaktovat. Uděláme vše proto abychom vám vyšli vstříc" />
        </Helmet>

        <div className="others-title" ref={othersRef}>
          <h1>Kreativita a flexibilita pro Každý projekt</h1>
        </div>

        <div className="others-text">
          <p>
            Sekce "Ostatní" zahrnuje široké spektrum prací a služeb, které mohou být klíčem k dokončení každého projektu. Je to prostor pro neomezenou kreativitu a flexibilitu, kde není místo pro limity.
          </p>
        </div>
      </div>

      <div className="others-subtitle-text">
        <div className="others-subtitle">
          <h3>
            Smysl ostatních prací
          </h3>
        </div>

        <div className="others-text">
          <p>
            Ostatní práce není jen záložkou pro nedořešené či nepopsané úkoly. Je to místo, kde se otevírají možnosti pro různorodé a specifické potřeby, které jsou klíčem k dokonalému završení projektu.
          </p>
        </div>
      </div>

      <div className="others-subtitle-text">
        <div className="others-subtitle">
          <h3>
            Důležitost všestrannosti
          </h3>
        </div>

        <div className="others-text">
          <p>
            Všestrannost a flexibilita v sekci "Ostatní" jsou základem pro plné pokrytí všech aspektů projektu. Je to prostor pro různé úkoly a práce, které jsou důležité pro úspěch celku, ať už se jedná o menší detaily nebo specifické úkoly.
          </p>
        </div>
      </div>

      <div className="others-subtitle-text">
        <div className="others-subtitle">
          <h3>
            Naše role ve ostatních prací
          </h3>
        </div>

        <div className="others-text">
          <p>
            Jsme zde, abychom pokryli vše, co potřebujete. Naše týmy odborníků mají široké spektrum dovedností a zkušeností, které umožňují zvládnout různorodé úkoly a požadavky v rámci projektů.
          </p>
        </div>
      </div>

      <div className="others-subtitle-text">
        <div className="others-subtitle">
          <h3>
            Proč jsme ta správná volba
          </h3>
        </div>

        <div className="others-text">
          <p>
            Naše firma se zaměřuje na komplexní pokrytí potřeb projektu. S námi získáte partnera, který přinese řešení i pro ty nejkomplexnější úkoly...
          </p>
        </div>
      </div>
    </section>
  )
}
