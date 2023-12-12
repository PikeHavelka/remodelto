import "./referenceSeries.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"
import { ReferenceSeriesProps } from "../../types/allTypes"

export const ReferenceSeries = (props: ReferenceSeriesProps) => {
  return (
    <>
      <div className="references-series-title-text-photo">
        <div className="references-series-title-text">
          <div className="references-series-subtitle">
            <h2>{props.title}</h2>
            <h3>{props.references}</h3>
          </div>

          <div className="references-series-text">
            {props.description}
          </div>
        </div>

        <LazyLoadImage
          className="references-series-introduction-photo"
          src={props.titleImage}
          alt="rekonstrukce"
          placeholderSrc={remodelToPlaceHolder}
        />
      </div>

      <div className="references-series-img-container">
        {props.series.map((oneImage, index) => {

          return <figure key={index}>
            <LazyLoadImage
              src={oneImage}
              alt="rekonstrukce"
              placeholderSrc={remodelToPlaceHolder}
            />
          </figure>
        })}
      </div>
    </>
  )
}