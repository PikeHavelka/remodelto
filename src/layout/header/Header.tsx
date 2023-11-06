import { HeaderInfoCards } from "../../components"
import "./header.scss"

export const Header = () => {
  return (
    <header>
      <div className="overlay">
        <div className="header-general-title container">
          <h1>stavby & rekonstrukce</h1>
          <span>Stavební firma RemodelTO, stavba podle vašich představ</span>
        </div>
      </div>

      <HeaderInfoCards />
    </header>
  )
}
