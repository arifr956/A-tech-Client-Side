import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
    const slides = [
        {
            image: "https://i.ibb.co/MGbvgQn/download.jpg",
            title: "Cutting-Edge Technology News",
        },
        {
            image: "https://i.ibb.co/QFBY0Qj/22-ideas-606ea9b.jpg",
            title: "Explore the Future of Tech",
        },
        {
            image: "https://i.ibb.co/M8DRp3Z/6495b5c28e6ce6001c65be0b.jpg",
            title: "Innovations and Gadgets Galore",
        },
        {
            image: "https://i.ibb.co/xS6NH2F/home.jpg",
            title: "Tech Enthusiast's Paradise",
        },
    ];

    return (
        <Carousel
            autoplay={true}
            wrapAround={true}
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide}>Previous</button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide}>Next</button>
            )}
        >
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className="hero h-80 lg:h-96"
                    style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-7 text-5xl font-bold text-white">
                                {slide.title}
                            </h1>
                            <Link to="/registration">
                                <button className="btn btn-primary text-white bg-red-400 border-0">
                                    Register Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
