import { Services, AboutUs, References, Interest, Cooperation } from "../index"
import { BackgroundDesign1, BackgroundDesign2 } from "../../components/index"

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
    </main>
  )
}