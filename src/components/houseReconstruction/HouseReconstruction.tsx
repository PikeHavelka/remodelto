import "./houseReconstruction.scss"
import constructionDrawing from "../../assets/images/constructionDrawing2.jpg"
import { useRef, useEffect, useState } from "react"

export const HouseReconstruction = () => {

  const houseReconstrRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (houseReconstrRef) {
      const houseCurrent = houseReconstrRef.current as HTMLDivElement
      const houseCoordinatesY = houseCurrent.getBoundingClientRect().y

      const windowScrollY = window.scrollY
      const houseY = Math.ceil(houseCoordinatesY)

      if (houseY < windowScrollY) setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  return (
    <section className="house-reconstruction">
      <article className={`house-reconstruction-container container ${isVisible ? "visible" : "hide"}`} ref={houseReconstrRef}>
        <div className="house-reconstruction-img-container">
          <img src={constructionDrawing} alt="nákres stavby" />
        </div>

        <div className="house-flex-wrapper">
          <div className="house-reconstruction-subtitle">
            <h3>Rekonstrukce rodinného domu</h3>
          </div>

          <div className="house-reconstruction-text">
            <p>Umožněte nám přeměnit váš rodinný dům na oázu pohodlí a elegance. Naše týmy řemeslníků a designérů jsou zde, aby vám pomohli dosáhnout dokonalé harmonie mezi funkcionalitou a estetikou.</p>

            <br />

            <p>Oživte svůj rodinný dům. Umožněte nám vám ukázat, co dokážeme. <a href="#kontakt">Kontaktujte</a> nás hned dnes a začněme společně budovat váš nový domov.</p>
          </div>
        </div>
      </article>
    </section>
  )
}

