import { Outlet } from "react-router-dom"
import { Header, Footer, Navbar, Prefooter } from "../../layout/index"
import { BackgroundDesign3 } from "../../components/index"

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <BackgroundDesign3 />
      <Prefooter />
      <Footer />
    </>
  )
}
