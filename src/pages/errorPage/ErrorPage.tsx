import "./errorPage.scss"
import { useEffect, useRef } from "react"

export const ErrorPage = () => {
  const errorPageRef = useRef(null)

  useEffect(() => {
    const errorPageCurrent = errorPageRef.current as HTMLHeadingElement | null

    if(errorPageCurrent) errorPageCurrent.scrollIntoView({ block: "center"})

    return () => {
      if (errorPageCurrent) errorPageCurrent.scrollIntoView(false)
    }
  })

  return (
    <section className="error-page container">
      <div className="error-page-text-container">
        <h1 className="error-page-title" ref={errorPageRef}>Stránka nenalezena | chyba 404</h1>

        <p className="error-page-text">Nepodařilo se nám najít požadovanou stránku. Prosím zkontrolujte zadanou url adresu.</p>
      </div>
    </section>
  )
}
