import "./moreReferences.scss"
import { BlockOfMoreReferences, FlatReconstruction, HouseReconstruction } from "../../components"
import { useState, useEffect, useRef } from "react"
import blockOfMoreReferencesData from "../../data/dataBlockOfMoreReferences"

export const MoreReferences = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0)
  const [imageBtn, setImageBtn] = useState(true)
  const [visibleComponents, setVisibleComponents] = useState<string[][]>([])
  
  const ourReferenceRef = useRef(null)

  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const referenceImages1 = importAll(require.context("../../assets/images/references/series1", false, /\.(png|jpe?g)$/))

  const referenceImages2 = importAll(require.context("../../assets/images/references/series2", false, /\.(png|jpe?g)$/))

  const referenceImages3 = importAll(require.context("../../assets/images/references/series3", false, /\.(png|jpe?g)$/))

  const referenceImages4 = importAll(require.context("../../assets/images/references/series4", false, /\.(png|jpe?g)$/))

  const referenceImages5 = importAll(require.context("../../assets/images/references/series5", false, /\.(png|jpe?g)$/))

  const referenceImages6 = importAll(require.context("../../assets/images/references/series6", false, /\.(png|jpe?g)$/))

  const referenceImages7 = importAll(require.context("../../assets/images/references/series7", false, /\.(png|jpe?g)$/))

  const referenceImages8 = importAll(require.context("../../assets/images/references/series8", false, /\.(png|jpe?g)$/))

  const referenceImages9 = importAll(require.context("../../assets/images/references/series9", false, /\.(png|jpe?g)$/))

  const referenceImages10 = importAll(require.context("../../assets/images/references/series10", false, /\.(png|jpe?g)$/))

  const referenceImages11 = importAll(require.context("../../assets/images/references/series11", false, /\.(png|jpe?g)$/))

  const allReferenceImages: string[][] = [
    referenceImages1,
    referenceImages2,
    referenceImages3,
    referenceImages4,
    referenceImages5,
    referenceImages6,
    referenceImages7,
    referenceImages8,
    referenceImages9,
    referenceImages10,
    referenceImages11
  ]

  const showNextComponent = () => {
    if (currentComponentIndex < allReferenceImages.length) {
      const newVisibleComponents = [...visibleComponents, allReferenceImages[currentComponentIndex]]
      setCurrentComponentIndex(currentComponentIndex + 1)
      setVisibleComponents(newVisibleComponents)
    }

    if (currentComponentIndex === allReferenceImages.length - 1 || currentComponentIndex === allReferenceImages.length) setImageBtn(false)
    else setImageBtn(true)
  }

  useEffect(() => {
    const refCurrent = ourReferenceRef.current as HTMLDivElement | null

    if (refCurrent) refCurrent.scrollIntoView({ behavior: "smooth", block: "center"})

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
          Prozkoumejte reference našich dokončených staveb, rekonstrukce bytů a domů. Naše stavby jsou vytvářeny s maximálním důrazem na detail a s vysokou kvalitou.
        </p>
      </div>

      {visibleComponents.map((oneComponent: string[], index: number) => {
        return <BlockOfMoreReferences
          referenceImages={oneComponent}
          key={index}
          blockOfMoreReferencesData={blockOfMoreReferencesData[index]}
        />
      })}

      <button onClick={showNextComponent} className={` ${imageBtn ? "more-references-show-more-btn" : "more-references-dont-work-btn"}`}>{`${imageBtn ? "Další ukázky" : "Žádné další ukázky"}`}</button>
    </article>

    <HouseReconstruction />
    <FlatReconstruction />
  </section>
)
}

