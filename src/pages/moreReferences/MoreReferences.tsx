import "./moreReferences.scss"
import { FlatReconstruction, HouseReconstruction } from "../../components"
import { useEffect, useRef, useState } from "react"
import { image1Introduction } from "../../assets/images/references"

export const MoreReferences = () => {
  const ourReferenceRef = useRef(null)
  const [index, setIndex] = useState(0)

  const handlerClick = () => {
    setIndex(index + 1)
  }

  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const series1 = importAll(require.context("../../assets/images/references/series1", false, /\.(png|jpe?g)$/))

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
      <article className="more-references-article container">
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

        <section className="more-references-series1">
          <div className="more-references-series1-title-text-photo">
            <div className="more-references-series1-title-text">
              <div className="more-references-series1-subtitle">
                <h2>Renovace rodinného domku s terasou</h2>
                <h3>Reference</h3>
              </div>


              <div className="more-references-series1-text">
                <p>
                  Kompletní rekonstrukce interiéru rodinného domu se vším všudy. Práce zahrnovaly výměnu kabeláže, modernizaci topení, instalaci nových sanitárních zařízení a spoustu dalších. Stará a zastaralá infrastruktura ustoupila inovativním systémům, zajišťujícím nejen efektivitu, ale i bezpečnost.
                </p>
              </div>
            </div>

            <img
              className="more-references-series1-introduction-photo"
              src={image1Introduction}
              alt="rekonstrukce"
            />
          </div>

          <div className="more-references-series1-img-container">
            {series1.map((oneImage, index) => {

              return <figure key={index}>
                <img
                  src={oneImage}
                  alt="rekonstrukce"
                />
              </figure>
            })}
          </div>
        </section>

        <button className="more-references-show-more-btn" onClick={handlerClick}>další reference</button>
      </article>

      <HouseReconstruction />
      <FlatReconstruction />
    </section>
  )
}

