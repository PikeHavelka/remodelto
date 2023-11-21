import "./flatReconstruction.scss"
import constructionDrawing from "../../assets/images/references/constructionDrawing.jpg"
import { useRef, useEffect, useState } from "react"

export const FlatReconstruction = () => {

  const flatReconstrRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const handleScroll = () => {
    if (flatReconstrRef) {
      const flatCurrent = flatReconstrRef.current as HTMLDivElement
      const flatCoordinatesY = flatCurrent.getBoundingClientRect().y

      const windowScrollY = window.scrollY
      const flatY = Math.ceil(flatCoordinatesY)

      if (flatY < windowScrollY) setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  return (
    <section className="flat-reconstruction">
      <article className={`flat-reconstruction-container container ${isVisible ? "visible" : "hide"}`} ref={flatReconstrRef}>
        <div className="flat-reconstruction-img-container">
          <img src={constructionDrawing} alt="nákres stavby" />
        </div>

        <div className="flat-flex-wrapper">
          <div className="flat-reconstruction-subtitle">
            <h3>Rekonstrukce bytu</h3>
          </div>

          <div className="flat-reconstruction-text">
            <p>Naše společnost se specializuje na rekonstrukce bytu s vizí a kreativitou. Proměňte své obydlí v místo, které zrcadlí vaši osobnost a styl. S námi můžete očekávat špičkovou kvalitu, péči o detaily a dokonalý výsledek.</p>

            <br />

            <p>Zvýšte hodnotu svého bytu a zároveň vytvořte funkční a esteticky příjemné prostředí pro vaše každodenní životy. Rekonstrukce bytu s námi znamená bezstarostný proces, kde se o vše postaráme my.</p>
          </div>
        </div>
      </article>
    </section>
  )
}
