import { useState } from "react";
const Cards = () => {
    
    const [playingVideo, setPlayingVideo] = useState(null);

    const data = [
        {
            cardimg: '/Assets/images/nature.jpg',
            cardh4: 'Specialist in Animated Websites | Creator of Rejouice Design',
            link: 'https://myrejoucie.netlify.app/' 
        },
        {
            cardimg: '/Assets/images/twogood.jpeg',
            cardh4: 'Creator of Two Good Company Website',
            link: 'https://twogoodcompany.netlify.app/'
        },
        {
            cardimg: '/Assets/images/elastic.png',
            cardh4: 'Creator of We Think Elastic Website',
            link: 'https://wethinkelastic.netlify.app/'
        },
        {
            cardimg: '/Assets/images/rban.jpg',
            cardh4: 'Shey.Co Project Specialist',
        },
        {
            cardimg: '/Assets/images/king.jpg',
            cardh4: ' ORG Chango',
        },
        // Modified Ochi card with video
        {
            isVideo: true,
            videoSrc: '/Assets/images/ochi.mp4', // Path to the video
            cardh4: 'Ochi Award-Winning Web Designer | Specialized in Animated Websites with ReactJS, GSAP, and Framer Motion',
            cardimg: '/Assets/images/ochi.png',

        },
        {
            cardimg: 'https://mir-s3-cdn-cf.behance.net/projects/404/27ec6f201055899.Y3JvcCwxMjU5LDk4NCwxMDIsNTk.png    ',
            cardh4: ' CROING | Creative agency',
            isVideo: true,
            videoSrc: '/Assets/images/croing.mp4', // Path to the video

        },


     
    ];

    const openLink = (url) => {
        window.open(url, '_blank');
    };

    // Play the video when the card is clicked
    const playVideo = (videoSrc) => {
        setPlayingVideo(videoSrc);
    };

    return (
        <div  className="Card">
            <div className="cards">
                {data.map((elem, index) => {
                    return (
                        <div 
                            key={index} 
                            className="card-item" 
                            onClick={() => elem.link ? openLink(elem.link) : playVideo(elem.videoSrc)} // Play video if it's a video card
                        >
                            <div className="image">
                                {/* Render video if it's a video card */}
                                {elem.isVideo ? (
                                    <div className="video-thumbnail">
                                        {playingVideo === elem.videoSrc ? (
                                            <video width="100%" height="100%" controls autoPlay>
                                                <source src={elem.videoSrc} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <>
                                             <div className="video-thumbnail">
    {playingVideo === elem.videoSrc ? (
        <video width="100%" height="100%" controls autoPlay>
            <source src={elem.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    ) : (
        <>
            <img src={elem.cardimg} alt="Card Thumbnail" width="100%" height="100%" />
        </>
    )}
</div>

                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <img src={elem.cardimg} alt="Card Image" width="100%" height="100%" />
                                )}
                            </div>
                            <h4>{elem.cardh4}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Cards;
