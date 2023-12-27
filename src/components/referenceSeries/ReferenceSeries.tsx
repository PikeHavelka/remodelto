import "./referenceSeries.scss"
import { LazyLoadImage } from "react-lazy-load-image-component"
import remodelToPlaceHolder from "../../assets/images/remodelToPlaceHolder.jpg"
import { ReferenceSeriesProps } from "../../types/allTypes"
import { useState, useRef, useEffect } from "react"
import { DeclineCross, DoubleArrowLeft, DoubleArrowRight, ArrowRight, ArrowLeft } from "../../assets/svgIcons"

export const ReferenceSeries = (props: ReferenceSeriesProps) => {
  const [showModal, setShowModal] = useState(false)
  const [currentImage, setCurrentImage] = useState("")
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [btnReference, setbtnReference] = useState(false)
  const refModal = useRef<HTMLDivElement>(null)

  const openModal = (imageIndex: number) => {
    setShowModal(!showModal)
    setModalImageIndex(imageIndex)
    setCurrentImage(props.seriesFullSized[imageIndex])
  }

  useEffect(() => {
    const modalCurrent = refModal.current

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false)
      if (e.key === "ArrowLeft") setModalImageIndex(modalImageIndex - 1)
      if (e.key === "ArrowRight") setModalImageIndex(modalImageIndex + 1)
      if (e.key === "Tab") e.preventDefault()
    }

    if (modalImageIndex < 0) setModalImageIndex(props.seriesFullSized.length - 1)
    else if (modalImageIndex > props.seriesFullSized.length - 1) setModalImageIndex(0)

    setCurrentImage(props.seriesFullSized[modalImageIndex])

    if (showModal && modalCurrent && currentImage) {
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.removeEventListener("keydown", handleKeyDown)
    }

    return () => document.removeEventListener("keydown", handleKeyDown)

  }, [modalImageIndex, currentImage, props.seriesFullSized, showModal])


  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleNextImage = () => {
    setModalImageIndex(modalImageIndex - 1)
  }

  const handlePreviousImage = () => {
    setModalImageIndex(modalImageIndex + 1)
  }

  // Show and hide btn when size drop under 900
  useEffect(() => {
    if (window.innerWidth <= 900) setbtnReference(true)
    else setbtnReference(false)

    const handleResize = () => {
      if (window.innerWidth <= 900) setbtnReference(true)
      else setbtnReference(false)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [window.innerWidth])

  return (
    <>
      <div className="references-series-title-text-photo">
        <button
          className={`references-series-left-btn ${btnReference ? "btn-hide" : "btn-show"}`}
          onClick={props.showPreviousSeriesComponent}
          title="předchozí reference">
          <ArrowLeft />
        </button>

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

        <div className="references-series-left-rigth-btn">
          <button
            className={`references-series-left-btn ${btnReference ? "btn-show" : "btn-hide"}`}
            onClick={props.showPreviousSeriesComponent}
            title="předchozí reference">
            <ArrowLeft />
          </button>

          <button
            className="references-series-right-btn"
            onClick={props.showNextSeriesComponent}
            title="následující reference">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className={`${showModal ? "image-modal-show" : "image-modal-hide"}`} ref={refModal}>

        <img className="image-modal" src={currentImage} alt="rekonstrukce" />

        <div className="image-modal-buttons">
          <button className="image-modal-left-arrow" onClick={handlePreviousImage}>
            <DoubleArrowLeft />
          </button>

          <button className="image-modal-decline-cross" onClick={handleCloseModal}>
            <DeclineCross />
          </button>

          <button className="image-modal-right-arrow" onClick={handleNextImage}>
            <DoubleArrowRight />
          </button>
        </div>
      </div>

      <div className="references-series-img-container">
        {props.series.map((oneImage, imageIndex) => {

          return <figure key={imageIndex}>
            <LazyLoadImage
              onClick={() => openModal(imageIndex)}
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
