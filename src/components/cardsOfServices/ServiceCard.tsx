import "./serviceCard.scss"
import { ServiceCards } from "../../types/allTypes"
import { Link } from "react-router-dom"
import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export const ServiceCard = (props: ServiceCards) => {
  const serviceRef = useRef(null)
  const isInView = useInView(serviceRef, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) mainControls.start("visible")
  }, [isInView])

  return (
    <motion.div ref={serviceRef} className="services-img-text"
      variants={{
        hidden: { opacity: 0, y: 105 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: .5, delay: props.delay }}
    >
      <div className="services-img-container">
        <img src={props.image} alt="renovace budov a interiérů" />
      </div>

      <div className="services-subtitle">
        <h3>{props.title}</h3>
      </div>

      <div className="services-text">
        {props.text}
      </div>

      <Link to={props.page} className="services-text-link">{props.moreInfo}</Link>
    </motion.div>
  )
}