import "./references.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const References = () => {
  const [index, setIndex] = useState(0)

  /* Store Assets from folders */
  function importAll(r: any): string[] {
    const assets: string[] = []
    r.keys().forEach((item: string, index: number) => {
      assets[index] = r(item)
    })
    return assets
  }

  const sliderImges = importAll(require.context("../../assets/images/imgSlider", false, /\.(png|jpe?g)$/))

  useEffect(() => {
    if (index < 0) setIndex(sliderImges.length - 1)
    else if (index > sliderImges.length - 1) setIndex(0)

    const intervalID = setInterval(() => {
      setIndex(index + 1)
    }, 8000)

    return () => clearInterval(intervalID)
  }, [index])

  return (
    <section className="references" id="reference">
      <article className="references-article container-second">
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
              Náš tým zahrnuje <strong>zkušené stavební inženýry, architekty</strong> a <strong>řemeslníky</strong>. Sledujeme nejnovější trendy v <strong>oblasti stavebnictví</strong> a neustále se vzděláváme, abychom našim klientům poskytli ty <strong>nejlepší stavební řešení</strong>.
            </p>

            <br />

            <p>
              Pokud máte zájem o spolupráci na vašem projektu, nebo máte další otázky ohledně našich služeb, neváhejte nás <a className="references-text-href-italic" href="#kontakt">kontaktovat</a>.
            </p>
          </div>
        </div>

        <div className="references-img-slider">
          {sliderImges.map((oneImg, indexImg) => {

            let slideNameClass = "next-slide"

            if (indexImg === index) slideNameClass = "active-slide"

            if (indexImg === index - 1 || (index === 0 && indexImg === sliderImges.length - 1)) slideNameClass = "last-slide"

            return <div className={slideNameClass} key={indexImg}>
              <img src={oneImg} alt="prehled rekonstrukcí" />
            </div>
          })}
        </div>

        <Link to="nase-reference" className="references-btn">Naše reference</Link>
      </article>
    </section >
  )
}
