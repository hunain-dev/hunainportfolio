
const Ourservices = () => {
    const liss = [
        {

            designh3:'What i offer',
            designchoose:'Why Choose me',
            lis1:'Responsive Web Design: Tailored for both mobile and desktop users.',
            lis2:'Animated Websites: I create engaging animations with GSAP and Framer for a delightful user experience..',
            lis3:'ReactJS Development: Building dynamic and interactive web applications with ReactJS.',
            lis4:'Smooth Scrolling Experiences: Integrating Locomotive Scroll for a smooth, scroll-based experience.',
            lis5:'Responsive Web Design: Tailored for both mobile and desktop users.',
            lis6:'Expertise in Front-End Development: Specialized in creating visually rich, high-performance websites.',
            lis7:'Unique Animations: Bringing your brand to life with creative animations that make your website stand out.',
            lis8:'Attention to Detail: From design to development, every detail matters for me..',
             lis9:'Client-Centric Approach: I work closely with you to bring your vision to life.'
        }
     



    ]
  return (
 <>
 <div className="Ourservices" id="Services">
    <h1>Our Services</h1>
    <div className="Designs">
       {
      liss.map((elem,index)=>{
        return(
            <div key={index} className="div">
 <h3>{elem.designh3}</h3>
        <ul>
            <li>{elem.lis1}</li>
            <li>{elem.lis2}</li>
            <li>{elem.lis3}</li>
            <li>{elem.lis4}</li>
            <li>{elem.lis5}</li>
        </ul>
        <h3>{elem.designchoose}</h3>
        <ul>
        <li>{elem.lis6}</li>
            <li>{elem.lis7}</li>
            <li>{elem.lis8}</li>
            <li>{elem.lis9}</li>
        </ul>

            </div>
        )
      })
       }
       
    </div>
 </div>
 </>
  )
}

export default Ourservices
