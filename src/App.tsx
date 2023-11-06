import { Main } from "./layout/index"
import { Routes, Route } from "react-router-dom"
import { SharedLayout, ErrorPage, MoreReferences } from "./pages/index"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="/nase-reference" element={<MoreReferences />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

export default App