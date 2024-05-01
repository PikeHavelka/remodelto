import "./modalWindows.scss"
import { SuccessIcon } from "../../../assets/svgIcons"

export const SuccessModal = (props: any) => {
  return (
    <div className="modal-window">
        <div className="modal-icon">
          <SuccessIcon />
        </div>

        <div className="modal-text-container">
          <h1 className="modal-heading">Gratulujeme!</h1>
          <p className="modal-text">Vaše zpráva byla úspěšně odeslána. V nejbližší době Vás budeme kontaktovat.</p>
        </div>

        <button className="modal-btn" onClick={(e) => props.handleModal(e)}>Ok</button>
    </div>
  )
}
