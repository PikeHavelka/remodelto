import { Contact, OpeningHours, AllServices } from "../../components"
import "./prefooter.scss"

export const Prefooter = () => {
  return (
    <section className="prefooter-section">
      <div className="prefooter-contact-services-opening-hours container">
        <Contact />
        <AllServices />
        <OpeningHours />
      </div>
    </section>
  )
}
