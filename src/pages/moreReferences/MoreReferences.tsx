import "./moreReferences.scss"
import { FlatReconstruction, HouseReconstruction, ReferenceSeriesBlock } from "../../components"
import { useEffect, useRef, useState } from "react"
import image1Introduction from "../../assets/images/references/SeriesIntroduction1.jpg"
import { Helmet } from "react-helmet-async"

export const MoreReferences = () => {
  const ourReferenceRef = useRef(null)
  const [currentSeries, setCurrentSeries] = useState<string[]>([])
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  const [btnReferences, setBtnReferences] = useState(true)

  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const series1 = importAll(require.context("../../assets/images/references/series1", false, /\.(png|jpe?g)$/))

  const series2 = importAll(require.context("../../assets/images/references/series2", false, /\.(png|jpe?g)$/))
  const series4 = importAll(require.context("../../assets/images/references/series4", false, /\.(png|jpe?g)$/))
  const series6 = importAll(require.context("../../assets/images/references/series6", false, /\.(png|jpe?g)$/))
  const series7 = importAll(require.context("../../assets/images/references/series7", false, /\.(png|jpe?g)$/))
  const series8 = importAll(require.context("../../assets/images/references/series8", false, /\.(png|jpe?g)$/))
  const series9 = importAll(require.context("../../assets/images/references/series9", false, /\.(png|jpe?g)$/))
  const series10 = importAll(require.context("../../assets/images/references/series10", false, /\.(png|jpe?g)$/))
  const series11 = importAll(require.context("../../assets/images/references/series11", false, /\.(png|jpe?g)$/))

  const allSeries = [series2, series4, series6, series7, series8, series9, series10, series11]

  const showMoreImages = () => {
    if (show === false) setShow(!show)

    if (index <= allSeries.length - 1) {
      setIndex(index + 1)
      setCurrentSeries([...currentSeries, ...allSeries[index]])
      if(index === allSeries.length - 1) setBtnReferences(false)
    }
  }

  // Scroll to "<h1>Naše reference</h1>" when click on MoreReferences btn
  useEffect(() => {
    const refCurrent = ourReferenceRef.current as HTMLDivElement | null

    if (refCurrent) refCurrent.scrollIntoView({ block: "center" })

    return () => {
      if (refCurrent) refCurrent.scrollIntoView(false)
    }
  }, [])

  return (
    <section className="more-references">

      <Helmet>
        <title>Naše reference | RemodelTO</title>
        <meta name="description" content="Prohlédněte si naše ukázky stavebních projektů. Zde najdete širokou škálu našich prací a realizací." />
      </Helmet>

      <article className="more-references-article container-second">
        <div className="more-references-title-subtitle-text-container">
          <div className="more-references-title" ref={ourReferenceRef}>
            <h1>Naše reference</h1>
          </div>

          <div className="more-references-subtitle">
            <h3>Modernizace</h3>
          </div>

          <div className="more-references-text">
            <p>
              Rádi bychom vám představili naše reference v oblasti stavebnictví. Naše firma se specializuje na modernizaci a rekonstrukce rozmanitých typů budov, ať už jde o byty, domy či komerční objekty.
            </p>

            <br />

            <p>
              Prozkoumejte naše hotové projekty, které jsou důkazem naší oddanosti k detailům a naší nekompromisní snahy o dosažení vysoké kvality. Každá stavba je pečlivě plánována a realizována s maximálním důrazem na preciznost a estetiku.
            </p>
          </div>
        </div>

        <section className="more-references-series">
          <div className="more-references-series-title-text-photo">
            <div className="more-references-series-title-text">
              <div className="more-references-series-subtitle">
                <h2>Renovace malého a útulného bytu</h2>
                <h3>Reference</h3>
              </div>

              <div className="more-references-series-text">
                <p>
                  Tento malý a velmi zajímavý byt prošel rekonstrukcí, která zahrnovala renovaci každého pokoje, výměnu podlah a nový nátěr stěn. Tím se podařilo vytvořit moderní a útulný prostor v malých rozměrech.
                </p>
              </div>
            </div>

            <img
              className="more-references-series-introduction-photo"
              src={image1Introduction}
              alt="rekonstrukce"
            />
          </div>

          <div className="more-references-series-img-container">
            {series1.map((oneImage: string, index: number) => {

              return <figure key={index}>
                <img
                  src={oneImage}
                  alt="rekonstrukce"
                />
              </figure>
            })}
          </div>
        </section>

        <section className={`reference-series-block-series ${show ? "show" : "hide"}`}>
          <ReferenceSeriesBlock currentSeries={currentSeries} />
        </section>

        <button className={`${btnReferences ? "more-references-show-more-btn" : "more-references-dont-work-btn"}`} onClick={showMoreImages}>další reference</button>
      </article>

      <HouseReconstruction />
      <FlatReconstruction />
    </section >
  )
}

