const Happyclient = () => {
    const obj = [
      {
        tagimg1: "https://framerusercontent.com/images/um3bxT2WVFF4kr6enjXB8pntPlo.svg",
        tagimg2: "https://framerusercontent.com/images/lWoxjUfzID4I2CJ2EAGpp1BxXk.svg",
        tagimg3: "https://framerusercontent.com/images/LtSGTHttO0ZpuCVLNu4mPIpOuk.svg",
        tittle: "5+ Happy Clients",
      },
    ];
  
    return (
      <>
        <div className="Client">
          {obj.map((elem, index) => (
            <div key={index} className="selectives">
              <img src={elem.tagimg1}  />
              <img src={elem.tagimg2}  />
              <img src={elem.tagimg3}  />
              <h2>{elem.tittle}</h2>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Happyclient;
  