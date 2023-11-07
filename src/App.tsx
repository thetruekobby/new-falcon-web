import AboutUs from "./AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container-full bg-white">
      <NavBar />
      <div className="">
        <div className=" bg-gray-100">
          <Header />
        </div>
        <div className="">
          <AboutUs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
