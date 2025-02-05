import Header from "./Components/Header";
import Home from "./Components/pages/Home/Home";
import Aboutus from "./Components/pages/Aboutus/Aboutus";
import Stack from "./Components/pages/Stack/Stack";
import Ourservices from "./Components/pages/Ourservices/Ourservices";
import Project from "./Components/pages/Project/Project";
import Contact from "./Components/pages/Contact/Contact";
import Footer from "./Components/Footer";
import Cursor from "./Components/pages/Cursor/Cursor";
import Loader from "./Components/Loader/Loader";

const App = () => {

  return (
    <div className="smooth-scroll">

      <Loader />
      <Header />
      <Cursor />
      
      <div id="home"><Home /></div>
      <div id="aboutus"><Aboutus /></div>
      <div id="stack"><Stack /></div>
      <div id="services"><Ourservices /></div>
      <div id="project"><Project /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />
    </div>
  );
};

export default App;
