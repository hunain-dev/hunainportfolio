
// const AboutClient = () => {
//     const obj = [
//         {
//           clientimg: "https://framerusercontent.com/images/um3bxT2WVFF4kr6enjXB8pntPlo.svg",
//           clientname: "Alisha",
//           clientmanager: "Marketing Manager",
//           clienttareff: 'Hello Muhammad Hunain, I wanted to take a moment to thank you for the fantastic work you did on our website. Your expertise in web development and design truly stood out, and I am incredibly impressed with the outcome.',
//         },
//       ];
    
//       return (
//         <>
//           <div className="AboutClient">
//             <h4>Kind words from Client</h4>
//             {obj.map((elem, index) => (
//               <div key={index} className="AboutClients">
//                 <img src={elem.clientimg} loading="lazy" />
//                 <h3>{elem.clientname    }</h3>
//                 <h5>{elem.clientmanager}</h5>
//                 <h6>{elem.clienttareff}</h6>
//               </div>
//             ))}
//           </div>
//         </>
//       );
// }

// export default AboutClient
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import client1 from "../../../../public/Assets/images/client1.png"
import client2 from "../../../../public/Assets/images/client2.png"
import client3 from "../../../../public/Assets/images/client3.png"
import client4 from "../../../../public/Assets/images/client4.png"
import client5 from "../../../../public/Assets/images/client5.png"


const AboutClient = () => {
  const obj = [
    { backgroundcolor: "bg-white",
      innerimg:client1,
      clientname:"Ayan",
      clientparagh:"“Hunain did a fantastic job on our website. The design looks modern, smooth, and perfectly matches our brand.”"




    },
    { backgroundcolor: "bg-white",
      innerimg:client2,
      clientname:"Zara",
      clientparagh:"Working with Hunain was an amazing experience. He built our website beautifully and delivered exactly what we wanted."





     },
     { backgroundcolor: "bg-white",
      innerimg:client3,
      clientname:"Muzzamil",
      clientparagh:"“Our website turned out even better than we imagined. Hunain’s attention to detail and creativity are impressive.”."
 

     },
    {
    backgroundcolor: "bg-white",
      innerimg:client4,
      clientname:"Bushra",
      clientparagh:"“Hunain transformed our idea into a stunning website. We’re so happy with his work and professionalism.”"
 

     },
     {
      
      
      backgroundcolor: "bg-white",
      innerimg:client5,
      clientname:"lIMA",
      clientparagh:"“The website Hunain built for us is just perfect. Clean design, great animations, and excellent performance.”"
 

     },
  ];

  return (
    <div className="lg:mt-8 w-full lg:py-30 py-20 flex-col flex items-center justify-between">
      <h3 className="Queen font-[300] lg:text-6xl md:text-6xl text-4xl lg:pb-18 pb-13">Kind words from client</h3>
           <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]} 
        className="lg:w-[20vw] lg:h-[30vw] md:full md:w-[55vw] h-full w-[70vw]"
      >
        {obj.map((elem, index) => (
          <SwiperSlide
            key={index}
            className={`flex items-center justify-between text-black text-2xl rounded-2xl ${elem.backgroundcolor}`}
          >
            <div className="flex items-center lg:gap-11  md:gap-13  justify-between flex-col">
            <div className=" mt-5 m-auto rounded-full flex items-center justify-center overflow-hidden">
              <img src={elem.innerimg} className="lg:h-25 md:h-45  h-29   object-contain" alt="" />
            </div>

            <div className="Queen flex items-center lg:gap-17 gap-17 lg:py-0 py-10 md:py-11  text-black justify-around flex-col  text-center w-full "> 
                <h3 className="font-[300] lg:text-5xl md:text-7xl lg:mt-3 mt-4 text-5xl">{elem.clientname}</h3>
                <h5 className="font-[300] lg:text-[1.3vw] text-[4vw] md:text-[4vw]">{elem.clientparagh}</h5>
            </div>
               </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AboutClient;
