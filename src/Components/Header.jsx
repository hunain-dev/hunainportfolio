
const Header = () => {
  const downloadResume = () => {
    // Create a temporary <a> element
    const link = document.createElement("a");
    link.href = "/public/Assets/images/Muhammad Hunain khan Resume.pdf";  // Path to your resume inside the public folder
    link.download = "Muhammad Hunain khan Resume.pdf"; // Suggested file name
    document.body.appendChild(link); // Append it to the body
    link.click(); // Simulate click to download
    document.body.removeChild(link); // Clean up
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
