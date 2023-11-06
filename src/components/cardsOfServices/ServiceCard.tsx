import "./serviceCard.scss"
import { ServiceCards } from "../../types/allTypes"
import { LazyLoadImage } from "react-lazy-load-image-component"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"

export const ServiceCard = (props: ServiceCards) => {

  return (
    <div className="services-img-text">
      <div className="services-img-container">
        <LazyLoadImage src={props.image} effect="blur" alt="renovace budov a interiérů" placeholderSrc={remodelToPlaceHolder} />
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