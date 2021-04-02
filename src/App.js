import "./App.css";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from './components/Footer'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Main/>
      <Footer/> 
    </div>
  );
}

export default App;
