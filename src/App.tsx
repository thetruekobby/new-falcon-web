import AboutUs from "./AboutUs"
import BTMethodology from "./BTMethodology"
import BTPortfolio from "./BTPortfolio"
import BTServices from "./BTServices"
import ContactUs from "./ContactUs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="container-full bg-white">
      <NavBar />
      <div className=" bg-gray-100">
        <Header />
      </div>
      <AboutUs />
      <BTServices/>
      <BTMethodology/>
      <BTPortfolio/>
      
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default App
