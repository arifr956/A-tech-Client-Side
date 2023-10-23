import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const ViewProduct = () => {

    const product = useLoaderData();

    const { user } = useContext(AuthContext);

    const { productName, brand_name, type, price, description, rating, image } = product;

    const handleAddCart = (product, userId) =>{
        console.log('product added', product);
        console.log('user id',userId);
        const { productName, brand_name, type, price, description, rating, image } = product;
        const newCart = {userId, productName, brand_name, type, price, description, rating, image}
        
        
        //send data to server cart
        fetch('https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added to cart Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-5">Details of
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"> {' '}
                    {product.productName}
                </span>
            </h3>
            <div>
                <section className="text-gray-700 body-font overflow-hidden bg-white">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={image}></img>
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{brand_name}</h1>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">PRODUCT NAME</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productName}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">

                                        <span className="text-gray-600 ml-3 font-medium flex items-center gap-3"><FcRating />Rating :{' '}{rating}{'/5'}</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                        <a className="text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-2 text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">Description</h2>
                                <p className="leading-relaxed">{description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    <div className="">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest">Type</h2>
                                        <p className="leading-relaxed border-md border border-red-300 py-2 px-3">{type}</p>
                                        
                                    </div>
                                    
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900 flex items-center gap-2"><FaDollarSign />{' '}{price}</span>
                                    <button onClick={()=> handleAddCart ( product, user.uid) } className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ViewProduct;