import "./openingHours.scss"

export const OpeningHours = () => {
  return (
    <section className="opening-hours-section">
      <div className="opening-hours-container">
        <div className="opening-hours-title">
          <h2>Otevírací doba</h2>
        </div>

        <div className="opening-hours-text">
          <div className="opening-hours-days">
            <span>Pondělí:</span><br />
            <span>Úterý:</span><br />
            <span>Středa:</span><br />
            <span>Čtvrtek:</span><br />
            <span>Pátek:</span><br />
            <span>Sobota:</span><br />
            <span>Neděle:</span>
          </div>

          <div className="opening-hours-time">
            <span>8:00 až 17:00</span><br />
            <span>8:00 až 17:00</span><br />
            <span>8:00 až 17:00</span><br />
            <span>8:00 až 17:00</span><br />
            <span>8:00 až 17:00</span><br />
            <span>8:00 až 17:00</span><br />
            <span>zavřeno</span>
          </div>
        </div>
      </div>
    </section>
  )
}
