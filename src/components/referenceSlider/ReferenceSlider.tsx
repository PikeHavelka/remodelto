import "./referenceSlider.scss"
import { useEffect, useState } from "react"

export const ReferenceSlider = () => {
  const [indexSlider, setIndexSlider] = useState(0)

  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const sliderImges = importAll(require.context("../../assets/images/imgSlider", false, /\.(png|jpe?g)$/))
  
  /* Slider */
  useEffect(() => {
    if (indexSlider < 0) setIndexSlider(sliderImges.length - 1)
    else if (indexSlider > sliderImges.length - 1) setIndexSlider(0)

    const intervalID = setInterval(() => {
      setIndexSlider(indexSlider + 1)
    }, 8000)

    return () => clearInterval(intervalID)
  }, [indexSlider])

  return (
    <div className="reference-article-slider-container">
      <div className="references-title-text-top">
        <div className="references-subtitle">
          <h2>Reference</h2>
        </div>

        <div className="references-text">
          <p>
            Jsme hrdí na naši dlouholetou tradici a zkušenosti v oblasti <strong>stavebnictví</strong>. Naše firma se specializuje na <strong>kvalitní</strong> a <strong>spolehlivou stavební práci</strong>, a to jak v oblasti <strong>bytového</strong>, tak <strong>komerčního stavebnictví</strong>.
          </p>

          <br />

          <p>
            Reference našich <strong>stavebních projektů</strong> jsou důkazem našeho <strong>závazku</strong> k <strong>excelenci</strong>.
          </p>

          <br />

          <p>
            Pokud máte zájem o spolupráci na vašem projektu, nebo máte další otázky ohledně našich služeb, neváhejte nás <a className="references-text-href-italic" href="#kontakt">kontaktovat</a>.
          </p>

          <br />

          <p className="reference-text-moto-italic">
            "Společně budujeme vaše sny kvalitním řemeslem a péčí."
          </p>

          <br />

          <p className="reference-text-moto-italic">
            "Vy sníte, my stavíme."
          </p>

        </div>
      </div>

      <div className="references-img-slider">
        {sliderImges.map((oneImg, indexImg) => {

          let slideNameClass = "next-slide"

          if (indexImg === indexSlider) slideNameClass = "active-slide"

          if (indexImg === indexSlider - 1 || (indexSlider === 0 && indexImg === sliderImges.length - 1)) slideNameClass = "last-slide"

          return <div className={slideNameClass} key={indexImg}>
            <img src={oneImg} alt="přehled rekonstrukcí" />
          </div>
        })}
      </div>
    </div>
  )
}
