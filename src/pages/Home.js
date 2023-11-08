import AboutUs from "../AboutUs"
import BTMethodology from "../BTMethodology"
import BTPortfolio from "../BTPortfolio"
import BTServices from "../BTServices"
import ContactUs from "../ContactUs"
import Header from "../components/Header"

const Home = () => {
  return (
    <div>
      <Header />
      <AboutUs />
      <BTServices />
      <BTMethodology />
      <BTPortfolio />
      <ContactUs />
    </div>
  )
}

export default Home
