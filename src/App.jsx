import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

// Normal Imports (essential components)
import Header from "./Components/Header";
import Loader from "./Components/Loader/Loader";
import Cursor from "./Components/pages/Cursor/Cursor";
import Chilliman from "./Components/pages/Chilliman/Chilliman";
import Home from "./Components/pages/Home/Home";
import Footer from "./Components/Footer";

// All Pages (removed lazy loading)
import Aboutus from "./Components/pages/Aboutus/Aboutus";
import Stack from "./Components/pages/Stack/Stack";
import Ourservices from "./Components/pages/Ourservices/Ourservices";
import Project from "./Components/pages/Project/Project";
import Gitstatus from "./Components/pages/Git-status/Gitstatus";
import Contact from "./Components/pages/Contact/Contact";

const App = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef} className="smooth-scroll">
      <Loader />
      <Chilliman />
      <Header />
      <Cursor />

      <div id="home" data-scroll><Home /></div>
      <div id="aboutus" data-scroll><Aboutus /></div>
      <div id="stack" data-scroll><Stack /></div>
      <div id="services" data-scroll><Ourservices /></div>
      <div id="project" data-scroll><Project /></div>
      <div id="Gitstatus" data-scroll><Gitstatus /></div>
      <div id="Footer" data-scroll><Contact /></div>

      <Footer />
    </div>
  );
};

export default App;
