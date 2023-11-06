import "./errorPage.scss"

export const ErrorPage = () => {
  return (
    <section className="error-page container">
      <div className="error-page-text-container">
        <h1 className="error-page-title">Stránka nenalezena | chyba 404</h1>

        <p className="error-page-text">Nepodařilo se nám najít požadovanou stránku. Prosím zkontrolujte zadanou url adresu.</p>
      </div>
    </section>
  )
}
