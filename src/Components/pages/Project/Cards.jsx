import { useState } from "react";

const Cards = () => {
  const [playingVideo, setPlayingVideo] = useState(null);




  const data = [
    {
      cardimg:
        "https://tobacco.nl/wp-content/uploads/2025/05/Camille-Bas-1200x908.png", // Corrected the path here
      cardh4:
        "A Digital tobacco.nl— An Awwwards Winning Masterpiece!",
      link: "https://tabaccino.netlify.app/",
    },
   {
      cardimg:
        "https://i.pinimg.com/736x/64/81/db/6481db1d1f5fd2ebd505d522b97f2f85.jpg", // Corrected the path here
      cardh4:
        "Career Hunt – Global Jobs, One Click Away (coming Soon)",
        link:"https://careerhant.netlify.app/"
      
    },
    {
      cardh4:
        "Ochi Award-Winning Web Designer | Specialized in Animated Websites with ReactJS, GSAP, and Framer Motion",
      cardimg: "/Assets/images/desktopochi.png",
      link: "https://ochi-design-production.netlify.app/",
    },

    {
      cardimg: "/Assets/images/Christmas image.png", // Corrected the path here
      cardh4: "Santa’s Companion | Gifts, Decor & More",
      link: "https://santas-store.netlify.app/",
    },

    {
      cardh4: "Ultimate Tic-Tac-Toe — Built with React.js",
      cardimg: "/Assets/images/tictac.png",
      link: "https://reactxogame.netlify.app/",
    },
    {
      cardimg: "/Assets/images/3d spancer gabor.png", // Corrected the path here
      cardh4: "spencergabor.work Digital agency",
      link: "https://spancer-gabor.netlify.app/",
    },

    {
      cardimg:
        "https://wallpapers.com/images/hd/fine-weather-landscape-iq9k6ubn8w9yhhkc.jpg",
      cardh4: "Weather App - Real-time Weather Updates",
      link: "https://macro-weather-app.netlify.app/",
    },

    {
      cardimg: "/Assets/images/TwoGoodGoodSave.jpg",
      cardh4: "Creator of Two Good Company Website",
      link: "https://twogoodcompany.netlify.app/",
    },

    {
      cardimg:
        "https://plus.unsplash.com/premium_photo-1681046751108-a516bea00570?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D",
      cardh4: "furni-modern-interior-design-studios ",
      link: "https://furni-modern-interior-design-studios.netlify.app/",
    },
    {
      cardimg:
        "https://images.prismic.io/rejouice-2024/Z0SmXq8jQArT1SWV_og.jpg?auto=format,compress",
      cardh4: "Specialist in Animated Websites | Creator of Rejouice Design",
      link: "https://myrejoucie.netlify.app/",
    },
    {
      cardimg:
        "https://www.cssdesignawards.com/cdasites/2023/202303/20230306095557.jpg",
      cardh4: "Creator of We Think Elastic Website",
      link: "https://wethinkelastic.netlify.app/",
    },

    {
      cardimg:
        "https://www.acrossagency.se/wp-content/uploads/2019/07/Across-logo-svart.jpg",
      cardh4: "CROING | Creative agency",
      isVideo: true,
      videoSrc: "/Assets/images/croing.mp4",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  const playVideo = (videoSrc) => {
    setPlayingVideo(videoSrc);
  };

  return (
    <div className="Card">
      <div className="cards" >
        {data.map((elem, index) => (
          <div
            key={index}
            className="card-item" 
          onClick={() => {
  if (elem.link) {
    openLink(elem.link);
  } else if (elem.videoSrc) {
    playVideo(elem.videoSrc);
  }
}}

          >
            <div className="image">
              {elem.isVideo ? (
                <div className="video-thumbnail">
                  {playingVideo === elem.videoSrc ? (
                    <video width="100%" height="100%" controls autoPlay>
                      <source src={elem.videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={elem.cardimg}
                      alt="Card Thumbnail"
                      width="100%"
                      height="100%"
                    />
                  )}
                </div>
              ) : (
                <img
                  src={elem.cardimg}
                  alt="Card Image"
                  width="100%"
                  height="100%"
                />
              )}
            </div>
            <h4>{elem.cardh4}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
