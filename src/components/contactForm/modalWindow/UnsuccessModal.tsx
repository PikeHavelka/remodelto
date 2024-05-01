import { UnsuccessIcon } from "../../../assets/svgIcons"
import "./modalWindows.scss"

export const UnsuccessModal = (props: any) => {
  return (
    <div className="modal-window">
        <div className="modal-icon">
          <UnsuccessIcon />
        </div>

        <div className="modal-text-container">
          <h1 className="modal-heading">Uuppss!</h1>
          <p className="modal-text">Něco se pokazilo, zkuste to prosím později nebo nás kontaktujte přes mobilní telefon.</p>
        </div>

        <button className="modal-btn-unsuccess" onClick={(e) => props.handleModal(e)}>Ok</button>
    </div>
  )
}
