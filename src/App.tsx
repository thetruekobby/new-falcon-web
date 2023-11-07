import BTMethodology from "./BTMethodology"
import BTServices from "./BTServices"
import ContactUs from "./ContactUs"
import Header from "./components/Header"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="container-full bg-white">
      <div className="h-screen bg-gray-100">
        <NavBar />
        <Header />
      </div>
      {/* <div className="h-screen">
        <p>aa</p>
      </div> */}
      <div className="">
        <BTMethodology />
      </div>
      <div className="">
        <BTServices />
      </div>
      <div className="">
        <ContactUs/>
      </div>
    </div>
  )
}

export default App
