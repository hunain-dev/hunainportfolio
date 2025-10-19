import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import tobbaacoo from "../../../../public/Assets/images/Camille-Bas-1200x908.png";
import jobs from "../../../../public/Assets/images/jobs.jpg";
import ochi from "../../../../public/Assets/images/ochi (2).png";
import christmasweb from "../../../../public/Assets/images/Christmas image.png";
import tictacgame from "../../../../public/Assets/images/tictac.png";
import spacergabor from "../../../../public/Assets/images/spacer.png";
import weather from "../../../../public/Assets/images/weather.jpg";
import TwoGoodGoodSave from "../../../../public/Assets/images/TwoGoodGoodSave.jpg";
import furnitureweb from "../../../../public/Assets/images/furniture.jpeg";
import hello from "../../../../public/Assets/images/hello.jpg";
import rejouices from "../../../../public/Assets/images/rejouices.jpeg";
import mamtooth from "../../../../public/Assets/Videos/comming soon.mp4"

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    const width = window.innerWidth;
  
    const isMobile = width < 768;
    const isTablet = width >= 768 && width <= 1024;
    const isDesktop = width >= 1025 && width <= 1280;
    const isLargeDesktop = width > 1280;
  
    // 💡 Horizontal offset logic
    const offRight = () => {
      if (isMobile) return width + 1600;
      if (isTablet) return width + 3200;
      if (isDesktop) return width + 2500;
      if (isLargeDesktop) return width + 2100;
    };
  
    const offLeft = () => {
      if (isMobile) return -width - 1600;
      if (isTablet) return -width - 3200;
      if (isDesktop) return -width - 2500;
      if (isLargeDesktop) return -width - 2100;
    };
  
    // 💡 Scroll distance (end) logic
    const scrollEnd = () => {
      if (isMobile) return "+=2000";
      if (isTablet) return "+=3500";
      if (isDesktop) return "+=4000";
      if (isLargeDesktop) return "+=5000";
    };
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".projectarea",
        start: "top top",
        end: scrollEnd(),
        scrub: 2,
        pin: true,
        markers: false,
      },
    });
  
    tl.fromTo(
      cardsWrapperRef.current,
      { x: offRight(), opacity: 1 },
      {
        x: offLeft(),
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      }
    );
  
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);
  
  

  // Project cards
  const cardcollection = [
    {
      status: "coming-soon",
      comingMessage: "🚧 Coming Soon! This website will be live in 4 days.",
      cardbg: "#080808",
      cardvideo: mamtooth, // Changed from cardimg to cardvideo
      desctittle: "unearthed  agency",
      carddesc:
        "unearthed agency is a mural and sign painting agency based in Irondale, Alabama. They specialize in creating bold, hand-painted murals ",
      link: "",
    },
    {
      status: "coming-soon",
      comingMessage: "🚧 Coming Soon! This website will be live in 2 weeks.",
      cardbg: "#080808",
      cardimg:
        "https://assets.awwwards.com/awards/submissions/2025/08/68a2eddcb8d07435807694.png",
      desctittle: "Klearmind Clinics",
      carddesc:
        "A modern website for a Ketamine & IV therapy clinic in California. Designed to reflect clarity, wellness, and trust.",
      link: "",
    },

    {
      cardbg: "#080808",
      cardimg: tobbaacoo,
      desctittle: "A Digital tobacco.nl",
      carddesc:
        "Transforming traditional industry into digital excellence. Where innovation meets heritage.",
      link: "https://tabaccino.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: jobs,
      desctittle: "Career Hunt – Global Jobs",
      carddesc: "Carret Hunt is an interactive and engaging web-based game designed to test quick reflexes, accuracy, and focus. The player’s main objective",
      link: "https://careerhant.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: ochi,
      desctittle: "Ochi Clone",
      carddesc:
        "Ochi Designs is a modern and minimalistic creative agency website clone, built to highlight branding, strategy, and interactive design.",
      link: "https://ochi-design-production.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: christmasweb,
      desctittle: "Santa's Companion",
      carddesc:
        "Santa Company is a festive and interactive web experience designed to capture the magic of the holiday season",
      link: "https://santas-store.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: tictacgame,
      desctittle: "Tic-Tac-Toe Game",
      carddesc: "Tic Tac Toe is a simple and interactive web game designed to capture the fun and competitive spirit of the classic two-player strategy",
      link: "https://reactxogame.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: spacergabor,
      desctittle: "spencergabor work",
      carddesc: "Memory Game is an engaging and interactive web-based project designed to challenge concentration and recall skills. With smooth animations,",
      link: "https://spancer-gabor.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: weather,
      desctittle: "Weather App",
      carddesc: "Weather App is a modern and user-friendly web application designed to provide real-time weather updates for any location.",
      link: "https://macro-weather-app.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: TwoGoodGoodSave,
      desctittle: "Two Good Company",
      carddesc: "Two Good Company is a fully animated and responsive website clone inspired by the award-winning brand. With smooth animations, responsive layout,",
      link: "https://twogoodcompany.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: furnitureweb,
      desctittle: "Furni – Interior Design",
      carddesc: "Furni is a modern and minimalistic interior design website built to showcase elegant layouts and stylish aesthetics. With smooth animations,",

      link: "https://furni-interior-design.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: hello,
      desctittle: "We think elastic",
      carddesc: "We Think Elastic is a modern and interactive website clone inspired by an award-winning design. With smooth animations, responsive layout,",

      link: "https://myrejoucie.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: rejouices,
      desctittle: "rejouices",
      carddesc: "Rejouice is a fully animated and responsive website clone inspired by the award-winning agency site. With smooth animations,",

      link: "https://wethinkelastic.netlify.app/",
    },
  ];

  return (
    <div className="projectarea">
      <div className="backtextarea">
        <h2>Projects</h2>

        <div
          className="frontprojectshowcase  "
          ref={cardsWrapperRef} // ✅ ref attached here
        >
          {cardcollection.map((elem, index) => (
            <div
              key={index}
              className="cardscollection p-5 rounded-lg text-white cursor-pointer"
              style={{ backgroundColor: elem.cardbg }}
              onClick={() => {
                if (elem.status === "coming-soon") {
                  alert(elem.comingMessage || "🚧 Coming Soon!");
                } else {
                  window.open(elem.link, "_blank");
                }
              }}
            >
              <div
                className="carcollectionimage"
                style={{ backgroundColor: elem.cardimagebg }}
              >
                {elem.cardvideo ? (
                  <video
                    src={elem.cardvideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover rounded-lg"
                  ></video>
                ) : (
                  <img src={elem.cardimg} alt="" loading="lazy"/>
                )}
              </div>
              <div className="information">
                <h2>{elem.desctittle}</h2>
                <div className="informationdesc">
                  <p>{elem.carddesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
