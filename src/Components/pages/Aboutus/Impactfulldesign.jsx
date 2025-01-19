
const Impactfulldesign = () => {

    const design = [
        {
            h1: 'IMPACTFUL',
            h2: 'Design',
            h2_1: 'IS THE',
            h2_2: 'Design',
            h1_2: 'THAT WORK!',
        }
    ];

  return (
    <div className="Impactfulldesign">
        {
            design.map((elem, index) => {
                return (
                    <div key={index} className="masker">
                        <div className="text-content">
                            <div className="work-with-image">
                            </div>
                            <h2>{elem.h1}</h2>
                            <h2>{elem.h2}</h2>
                            <h2>{elem.h2_1}</h2>
                            <h2>{elem.h2_2}</h2>
                            <h2>{elem.h1_2}</h2>
                        </div>
                    </div>
                );
            })}
    </div>
  );
};

export default Impactfulldesign;
