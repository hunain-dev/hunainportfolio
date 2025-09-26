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
      if (isMobile) return width + 1400;
      if (isTablet) return width + 3000;
      if (isDesktop) return width + 2100;
      if (isLargeDesktop) return width + 2100;
    };
  
    const offLeft = () => {
      if (isMobile) return -width - 1300;
      if (isTablet) return -width - 2940;
      if (isDesktop) return -width - 2100;
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
      carddesc: "Your dream career is just one click away.",
      link: "https://careerhant.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: ochi,
      desctittle: "Ochi Clone",
      carddesc:
        "Recreating digital excellence that earned global recognition.",
      link: "https://ochi-design-production.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: christmasweb,
      desctittle: "Santa's Companion",
      carddesc:
        "Holiday magic in a digital store. Gifts, decor & more online.",
      link: "https://santas-store.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: tictacgame,
      desctittle: "Tic-Tac-Toe Game",
      carddesc: "Classic game reimagined. Strategy meets UI.",
      link: "https://reactxogame.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: spacergabor,
      desctittle: "spencergabor.work",
      carddesc: "Creative digital agency for brands.",
      link: "https://spancer-gabor.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: weather,
      desctittle: "Weather App",
      carddesc: "Real-time weather tracking with modern UI.",
      link: "https://macro-weather-app.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: TwoGoodGoodSave,
      desctittle: "Two Good Company",
      carddesc: "Empowering social change with strong branding.",
      link: "https://twogoodcompany.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: furnitureweb,
      desctittle: "Furni – Interior Design",
      carddesc: "Modern, immersive web experience for interior design.",
      link: "https://furni-interior-design.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: hello,
      desctittle: "Rejouice Website Clone",
      carddesc:
        "Bringing animation and interaction to static websites beautifully.",
      link: "https://myrejoucie.netlify.app/",
    },
    {
      cardbg: "#080808",
      cardimg: rejouices,
      desctittle: "We Think Elastic",
      carddesc:
        "Stretching web creativity. Elastic design for elastic minds.",
      link: "https://wethinkelastic.netlify.app/",
    },
  ];

  return (
    <div className="projectarea">
      <div className="backtextarea">
        <h2>Projects</h2>

        <div
          className="frontprojectshowcase flex gap-5"
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
                  <img src={elem.cardimg} alt="" />
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
