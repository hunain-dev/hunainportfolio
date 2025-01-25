
const Downloadresume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/public/Assets/images/Muhammadhunain.pdf'; 
        link.download = '/public/Assets/images/Muhammadhunain.pdf'; 
        link.click();
      };
  return (
    <div>
        <button onClick={handleDownload} className="animated-button">
      Download resume
    </button>
    </div>
  )
}

export default Downloadresume
