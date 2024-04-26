import { Services, AboutUs, References, Interest, Cooperation } from "../index"
import { BackgroundDesign1, BackgroundDesign2, ContactForm } from "../../components/index"

export const Main = () => {

  return (
    <main>
      <AboutUs />
      <BackgroundDesign1 />
      <Services />
      <BackgroundDesign2 />
      <References />
      <Interest />
      <Cooperation />
      <ContactForm />
    </main>
  )
}