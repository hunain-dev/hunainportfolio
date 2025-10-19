
const AboutClient = () => {
    const obj = [
        {
          clientimg: "https://framerusercontent.com/images/um3bxT2WVFF4kr6enjXB8pntPlo.svg",
          clientname: "Alisha",
          clientmanager: "Marketing Manager",
          clienttareff: 'Hello Muhammad Hunain, I wanted to take a moment to thank you for the fantastic work you did on our website. Your expertise in web development and design truly stood out, and I am incredibly impressed with the outcome.',
        },
      ];
    
      return (
        <>
          <div className="AboutClient">
            <h4>Kind words from Client</h4>
            {obj.map((elem, index) => (
              <div key={index} className="AboutClients">
                <img src={elem.clientimg} loading="lazy" />
                <h3>{elem.clientname    }</h3>
                <h5>{elem.clientmanager}</h5>
                <h6>{elem.clienttareff}</h6>
              </div>
            ))}
          </div>
        </>
      );
}

export default AboutClient
