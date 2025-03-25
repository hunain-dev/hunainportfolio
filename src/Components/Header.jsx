const Header = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Assets/images/Hunii.pdf"; // Correct path
    link.download = "Muhammad hunain Resume.pdf";
    document.body.appendChild(link);
    link.click(); // Trigger the download
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
        <h2><a href="#Footer">Contact</a></h2>
      </div>
      <div className="end">
      <button onClick={downloadResume} class="btn glitch">
  <span>Resume</span>
</button>
      </div>
    </div>
  );
};

export default Header;
