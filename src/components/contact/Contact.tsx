import "./contact.scss"
import OtradovecJan from "../../assets/images/OtradovecJan.jpg"
import { PhoneIcon, EmailIcon, FacebookIcon, InstagramIcon } from "../../assets/svgIcons"

export const Contact = () => {
  return (
    <section className="contact-section" id="kontakt">
      <div className="contact-section-company-owner">
        <img src={OtradovecJan} alt="majitel firmy" />
        <p>Jan Otradovec</p>
        <p>RemodelTO</p>
      </div>

      <div className="contact-section-contact">
        <a href="https://www.instagram.com/remodelto_s.r.o/" aria-label="Odkaz na Instagram majitele firmy">
          <InstagramIcon />
        </a>

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
