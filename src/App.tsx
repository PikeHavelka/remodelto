import "./app.css"
import { Main } from "./layout/index"
import { Routes, Route } from "react-router-dom"
import { SharedLayout, ErrorPage, ConstructionOfBuilding, ConstructionWork, Consultation, Interiors, Others, Renovation } from "./pages/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="/interiery" element={<Interiors />} />
        <Route path="/renovace" element={<Renovation />} />
        <Route path="/stavebni-prace" element={<ConstructionWork />} />
        <Route path="/vystavba-budov" element={<ConstructionOfBuilding />} />
        <Route path="/konzultace" element={<Consultation />} />
        <Route path="/ostatni" element={<Others />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App