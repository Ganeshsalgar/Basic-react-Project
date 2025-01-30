

import "./App.css";
import Home from './components/Home'
import About from './components/About'
import Contact_us from './components/Contact_us'

import Footer from "./components/Footer/Footer";
import NavContainer from "./components/Home/Navbar";

function App() {
 

  return (
    <>
      <NavContainer />
      <Home/>
      <About />
      <Contact_us/>
      <Footer />

    </>
  );
}

export default App;
