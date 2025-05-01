

const Myskillss = () => {

  const skillsimg = [
    { img: "/Assets/images/html.png" },
    { img: "/Assets/images/css.png" },
    { img: "/Assets/images/js.png" },
    { img: "/Assets/images/react.png" },
    { img: "/Assets/images/framer.png" },
    { img: "/Assets/images/gsap.png" },
  ];

  return (
    <div className="myskills">
      <h1>My Skills</h1>

     
      <div className="skills" >
        {skillsimg.map((elem, index) => (
          <div
            key={index}
            className="skill-item"
          
          >
            <img src={elem.img} alt={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myskillss;
