import "./blockOfMoreReferences.scss"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { MoreReferencesWithImages } from "../../types/allTypes"
import { useState } from "react"

export const BlockOfMoreReferences = (props: any) => {

  return (
    <section className="block-of-more-references">
      <div className="block-of-more-references-introduction-container">
        <div className="block-of-more-references-text-container">
          <div className="block-of-more-references-subtitle">
            <h3>{props.dataBlockOfMoreReferences.title}</h3>
          </div>

          <div className="block-of-more-references-text">
            <p>{props.dataBlockOfMoreReferences.text}</p>
          </div>
        </div>

        <LazyLoadImage 
          className="block-of-more-references-introduction-img"
          src={props.dataBlockOfMoreReferences.image}
          effect="blur"
          alt="rekonstrukce"
          placeholderSrc={remodelToPlaceHolder}
        />
      </div>

      {/* <div className="block-of-more-references-images-container">
        {props.referenceImages.map((oneImg: string, indexImg: number) => {
          return <figure key={indexImg} className="block-of-more-references-image">
            <LazyLoadImage
              src={oneImg}
              effect="blur"
              alt="rekonstrukce"
              placeholderSrc={remodelToPlaceHolder}
            />
          </figure>
        })}
      </div> */}
    </section>
  )
}
