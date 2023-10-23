
import { FaDollarSign } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

    const { _id, productName, brand_name, type, price, rating, image } = product;

    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-full"><img src={image} alt="Image" /></figure>
                <div className="flex justify-between items-center">
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <h2 className="card-title">{brand_name}</h2>
                        <p>{type}</p>
                        <p className="flex items-center"><FaDollarSign />{' '} {price}</p>
                        <p className="flex items-center"><FcRating />{' '}{rating}{'/5'}</p>

                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-5">
                            <Link to={`/viewproduct/${_id}`}>
                                <button className="btn btn-active">View Details</button>
                            </Link>
                            <Link to={`/updateproduct/${_id}`}>
                                <button className="btn">Update</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;