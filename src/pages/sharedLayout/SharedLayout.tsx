import { Outlet } from "react-router-dom"
import { Header, Footer, Navbar, Prefooter, Form } from "../../layout/index"

export const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Form />
      <Prefooter />
      <Footer />
    </>
  )
}
