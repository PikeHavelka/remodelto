import "./referenceSeries.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"
import { ReferenceSeriesOneBlock } from "../../types/allTypes"

export const ReferenceSeriesBlock = (props: ReferenceSeriesOneBlock) => {
  return (
    <div className="reference-series-block-img-container">
      {props.currentSeries.map((oneImage: string, index: number) => {

        return <figure key={index}>
          <LazyLoadImage
            src={oneImage}
            alt="rekonstrukce"
            effect="blur"
            placeholderSrc={remodelToPlaceHolder}
          />
        </figure>
      })}
    </div>
  )
}
