import { Outlet } from "react-router-dom"
import { Header, Footer, Navbar, Prefooter } from "../../layout/index"

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Prefooter />
      <Footer />
    </>
  )
}
