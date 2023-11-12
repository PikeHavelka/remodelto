import "./serviceCard.scss"
import { ServiceCards } from "../../types/allTypes"

export const ServiceCard = (props: ServiceCards) => {

  return (
    <div className="services-img-text">
      <div className="services-img-container">
        <img src={props.image} alt="renovace budov a interiérů" />
      </div>

      <div className="services-subtitle">
        <h3>{props.title}</h3>
      </div>

      <div className="services-text">
        {props.text}
      </div>
    </div>
  )
}