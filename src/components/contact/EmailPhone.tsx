import "./contact.scss"
import { PhoneIcon, EmailIcon } from "../../assets/svgIcons"

export const EmailPhone = () => {
  return (
    <div className="email-phone">
      <a href="mailto:remodelto@gmail.com" className="email">
        <EmailIcon /> remodelto@gmail.com
      </a>

      <a href="tel:606 167 019" className="phone">
        <PhoneIcon /> tel.: +420 606 167 019
      </a>
    </div>
  )
}
