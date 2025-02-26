
const Header = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/Assets/images/Muhammad Hunain khan Resume.pdf"; 
    link.download = "Muhammad Hunain khan Resume.pdf"; 
    document.body.appendChild(link); 
    document.body.removeChild(link);
  };

  return (
    <div className="navbar"> 
      <div className="bottom">
        <h2><a id="Home" href="#">Home</a></h2>
        <h2><a href="#aboutus">About Us</a></h2>
        <h2><a href="#stack">Stack</a></h2>
        <h2><a href="#services">Services</a></h2>
        <h2><a href="#project">Project</a></h2>
        <h2><a href="#contact">Contact</a></h2>
      </div>
      <div className="end">
        <button onClick={downloadResume}>Resume</button>
      </div>

    
    </div>
  );
};

export default Header;
