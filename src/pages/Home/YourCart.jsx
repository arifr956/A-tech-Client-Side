import Swal from 'sweetalert2'
import { useContext, useEffect, useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const YourCart = () => {

    const { user } = useContext(AuthContext);

    const carts = useLoaderData();

    console.log(carts);
    const [allfilter, setAllFilter] = useState([]);
    useEffect(() => {
        if(carts.length>0){
            const filteredcart = carts.filter(cart => cart.userId === user.uid);
            setAllFilter(filteredcart);
        }
    },[carts])

    //delete one cart

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/cart/${_id}`,{
                    method:'DELETE'
                })
                .then( res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                          )
                          const remaining = allfilter.filter(cart => cart._id !==_id);
                          setAllFilter(remaining);
                    }
                })
            
            }
          })

    }

    return (
        <div className="md:m-5 lg:m-10">
            <h3 className="text-4xl font-bold text-center my-5">
                <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                    Your Cart
                </span>
            </h3>
            {carts.length > 0 ? (
                <div>
                    {/* cart grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-3 gap-5">
                        {allfilter.map((cart) => (
                            <div key={cart._id} className="card card-side bg-base-100 shadow-xl">
                                <figure className="w-full">
                                    <img src={cart.image} alt="Image" />
                                </figure>
                                <div className="flex justify-between items-center">
                                    <div className="card-body">
                                        <h2 className="card-title">{cart.productName}</h2>
                                        <h2 className="card-title">{cart.brand_name}</h2>
                                        <p>{cart.type}</p>
                                        <p className="flex items-center">
                                            <FaDollarSign /> {cart.price}
                                        </p>
                                        <p className="flex items-center">
                                            <FcRating /> {cart.rating}/5
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <div className="btn-group btn-group-vertical space-y-5">
                                            <button onClick={() => handleDelete(cart._id)} className="btn btn-square btn-outline">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default YourCart;
