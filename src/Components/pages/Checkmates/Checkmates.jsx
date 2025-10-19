import bg from '/Assets/images/cein.webp';  // Correct image path

const Checkmates = () => {

  return (
    <div className="Checkmates">
      <div className="back">
        <h4>Take your <span>Business </span><br />to the<br /><span>next level </span>with <br />Innovation</h4>
        <div className="front">
          <img className="img" src={bg} alt="Background" loading="lazy" /> {/* Ensure image is loaded */}
        </div>
      </div>
    </div>
  );
};

export default Checkmates;
