
const Header = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Assets/images/Muhammad hunain.pdf";
    link.download = "Muhammad hunain.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navbar">
      <div className="bottom">
        <h2>
          <a id="Home" href="#">
            Home
          </a>
        </h2>
        <h2>
          <a href="#aboutus">About Us</a>
        </h2>
        <h2>
          <a href="#stack">Stack</a>
        </h2>
        <h2>
          <a href="#services">Services</a>
        </h2>
        <h2>
          <a href="#project">Project</a>
        </h2>
        <h2>
          <a href="#Footer">Contact</a>
        </h2>
      </div>
      <div className="end">
    
        <button onClick={downloadResume} class="button2">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Header;
