import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container-full">
      <div className="h-auto">
        <NavBar />
        <Header />
      </div>
    </div>
  );
};

export default App;
