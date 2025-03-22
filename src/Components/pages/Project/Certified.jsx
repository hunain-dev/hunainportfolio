const Certified = () => {
    const data = [
      {
        cardimg: '/Assets/images/winning.jpg', // Corrected image path
      },
    ];
  
    return (
      <div className="CertifiedCard">
        <h2>1st Runner-Up in Web Design | Techwiz Pakistan Web Design Competition</h2>
  
        <div className="Certifiedcards">
          {data.map((elem, index) => (
            <div key={index}>
              <div className="Certifiedcardsimage">
                <img src={elem.cardimg} alt="Certification" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Certified;
  