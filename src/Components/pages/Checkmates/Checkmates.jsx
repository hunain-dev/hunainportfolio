import bg from '/Assets/images/cein.webp';  // Correct image path

const Checkmates = () => {
  const obj = [
    "guys, let us show us at work!  ",
    "One click separates you ",
    "from a game-changing solution",
    "for your business",
    "Take the checkmate of your competitors",
  ];


  return (
    <div className="Checkmates">
      <div className="fronttop">
        {
          obj.map((elem, index) => {
            return (
              <div key={index}>
                <h5>{elem}</h5>
              </div>
            );
          })
        }
      </div>
      <div className="back">
        <h4>Take your <span>Business </span><br />to the<br /><span>next level </span>with <br />Innovation</h4>
        <div className="front">
          <img className="img" src={bg} alt="Background" /> {/* Ensure image is loaded */}
        </div>
      </div>
    </div>
  );
};

export default Checkmates;
