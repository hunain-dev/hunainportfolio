const Certified = () => {
    const data = [
        {
            cardimg:'/public/Assets/images/winning.jpg',
        },
    ];

    return (
        <div className="CertifiedCard">
            <h2>1st Runner-Up in Web Design | Techwiz  Pakistan Web Design Competition</h2> {/* ✅ Upar fix */}

            <div className="Certifiedcards">
                {data.map((elem, index) => (
                    <div key={index}>
                        <div className="Certifiedcardsimage">
                            <img src={elem.cardimg} alt="Certification" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certified;
