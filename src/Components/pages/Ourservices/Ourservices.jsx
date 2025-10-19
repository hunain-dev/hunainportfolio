
import image1 from '/public/Assets/images/Ourservicesimages (1).png';
import image2 from '/public/Assets/images/Ourservicesimages (2).png';
import Servicesfaqs from './Servicesfaqs/Servicesfaqs';
const Ourservices = () => {
  return (
    <div className='Ourservices'>
        <div className="ourservicestop" >
            <h2>Our Services,</h2>
        <h2>WHAT I OFFER,
        & WHY CHOOSE ME </h2>      
  
        </div>
        <div className="ourservicesbottom">
            <div className="ourserivesimagepart" >
                <div className="images" data-scroll data-scroll-speed='0.3'>
                <img src={image1} alt="" loading="lazy" />
                <img src={image2} alt=""  loading="lazy"/>
                </div>
              
            </div>
            
            </div>

            <div className="ourservicesfaqs">
               <Servicesfaqs/>
            </div>
    </div>
  )
}

export default Ourservices
