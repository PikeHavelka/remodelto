import "./blockOfMoreReferences.scss"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { MoreReferencesWithImages } from "../../types/allTypes"
import { useState } from "react"

export const BlockOfMoreReferences = (props: MoreReferencesWithImages) => {
  const [popUpImg, setPopUpImg] = useState<string[]>()
  const [hidePopUpImg, setHidePopUpImg] = useState(false)

  const handlePopUpImg = (indexImg: number) => {
    const oneImage = props.referenceImages.filter((oneImg, oneImgIndex) => {
      return (oneImgIndex === indexImg)
    })

    setPopUpImg(oneImage)
    setHidePopUpImg(false)
  }

  const handleClosePopUpImg = () => {
    setHidePopUpImg(true)
  }

  const handleNextPopUpImg = () => {

  }

  const handlePreviousPopUpImg = () => {
    
  }

  const popUpImgWindow = () => {
    return (
      <div className={`block-of-more-references-popUpImg ${hidePopUpImg ? "hide" : ""}`}>
        <span className="cross" onClick={handleClosePopUpImg}>x</span>

        <div className="block-of-more-references-popUpImg-container">
          <LazyLoadImage
            src={popUpImg}
            effect="blur"
            alt="rekonstrukce"
            placeholderSrc={remodelToPlaceHolder}
          />
        </div>

        <span className="left">&lt;</span>
        <span className="right">&gt;</span>
      </div>
    )
  }

  return (
    <section className="block-of-more-references">
      <div className="block-of-more-references-introduction-container">
        <div className="block-of-more-references-text-container">
          <div className="block-of-more-references-subtitle">
            <h3>{props.blockOfMoreReferencesData.title}</h3>
          </div>

          <div className="block-of-more-references-text">
            <p>{props.blockOfMoreReferencesData.text}</p>
          </div>
        </div>

        <LazyLoadImage 
          className="block-of-more-references-introduction-img"
          src={props.blockOfMoreReferencesData.image}
          effect="blur"
          alt="Rekonstrukce koupelny"
          placeholderSrc={remodelToPlaceHolder}
        />
      </div>

      {popUpImgWindow()}

      <div className="block-of-more-references-images-container">
        {props.referenceImages.map((oneImg: string, indexImg: number) => {
          return <figure key={indexImg} className="block-of-more-references-image">
            <LazyLoadImage
              onClick={() => handlePopUpImg(indexImg)}
              src={oneImg}
              effect="blur"
              alt="rekonstrukce"
              placeholderSrc={remodelToPlaceHolder}
            />
          </figure>
        })}
      </div>
    </section>
  )
}
