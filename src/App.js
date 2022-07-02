import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Input from "./Components/Input/Input";
import Output from "./Components/Output/Output";
import AppContextProvider from "./Context/AppContext";

function App() {
  return (
    <div className="App">
      <Header />
      <AppContextProvider>
        <Input />
        <Output />
        <Footer />
      </AppContextProvider>
    </div>
  );
}

export default App;
