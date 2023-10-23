import { useLoaderData } from "react-router-dom";


const TechBlog = () => {
    const cards = useLoaderData();
    console.log(cards.length);
    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-5"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Our Blogs</span></h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 -mx-4 mb-6">
                {cards.map((card) => (
                    <div key={card.id} className="w-full px-4">
                        <div className="w-full mt-5 relative">
                            <img className="hero w-full h-[300px]" src={card.image} alt="" />
                            <div className="h-[72px] absolute inset-x-0 bottom-0 hero-overlay bg-black bg-opacity-40"></div>
                        </div>
                        <div className="mt-5">
                            <h3 className="text-3xl font-bold mb-3">{card.name}</h3>
                            <p className="text-xl font-normal">{card.description}</p>
                            <a href="#" className="inline-block text-red-500 text-center underline mt-2">Read More</a>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechBlog;