import Header from "./components/Header";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="container-full">
      <div className="h-auto p-10">
        <NavBar />
        <Header />
      </div>
    </div>
  );
};

export default App;
