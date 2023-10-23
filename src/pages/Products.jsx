import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Carousel from "nuka-carousel"; 

const Products = () => {
    const products = useLoaderData();
    const { brand_name } = useParams();
    console.log(brand_name);

    const [allFilter, setAllFilter] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const filteredProduct = products.filter(product => product.brand_name === brand_name);
            setAllFilter(filteredProduct);
        }
    }, [products, brand_name]);

    console.log(products);

    const slides = allFilter.map(product => ({
        image: product.image,
        title: product.productName,
    }));

    return (
        <div className="md:m-5 lg:m-10">
            <h3 className="text-4xl font-bold text-center my-5">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                    {brand_name}
                </span>
            </h3>
            {allFilter.length > 0 ? (
                <div>
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
                            </div>
                        ))}
                    </Carousel>

                    {/* Product grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 my-3 gap-5">
                        {allFilter.map(product => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center p-3 md:p-6 lg:p-10">
                    <img src="https://i.ibb.co/bs2CfF2/download-1.png" alt="" />
                </div>
            )}
        </div>
    );
};

export default Products;
