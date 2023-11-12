import "./contact.scss"
import OtradovecJan from "../../assets/images/OtradovecJan.png"
import { PhoneIcon, EmailIcon, FacebookIcon } from "../../assets/svgIcons"

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-company-owner">
        <img src={OtradovecJan} alt="majitel firmy" />
        <p>Jan Otradovec</p>
        <p>RemodelTO</p>
      </div>

      <div className="contact-section-contact">
        <a href="https://www.facebook.com/RemodelTo" aria-label="Odkaz na Facebook majitele firmy">
          <FacebookIcon />
        </a>

        <a href="mailto:Homerekojo@gmail.com" aria-label="Odkaz na email majitele firmy">
          <EmailIcon />
        </a>
        
        <a href="tel:606 167 019" aria-label="Telefonní číslo na majítele firmy">
          <PhoneIcon />
        </a>
      </div>
    </section>
  )
}
