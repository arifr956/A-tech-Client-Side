import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const productName = form.productName.value;
        const brand_name = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const newProduct = {productName, brand_name, type, price, description, rating, image}
        console.log(newProduct);

        //send data to server
        fetch('https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                    
                  })
            }
        })
        event.target.reset();
    }

    return (
        <div className="my-6">

            <h3 className="text-4xl font-bold text-center mt-3 my-3"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Add a Product</span></h3>
            <Link to='/'><button className='btn btn-ghost hover:red'>Back To Home</button></Link>
            <form onSubmit={handleAddProduct}>
                <div className="flex justify-center items-center flex-col bg-gradient-to-r from-cyan-500 to-blue-500 p-20">
                    <div className="md:flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <select name="brandName" className="input input-bordered">
                                    <option value="Huawei">Huawei</option>
                                    <option value="Sony">Sony</option>
                                    <option value="LG">LG</option>
                                    <option value="Microsoft">Microsoft</option>
                                    <option value="Google">Google</option>
                                    <option value="Lenovo">Lenovo</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Type</span>
                            </label>
                            <label className="input-group">
                                <select name="type" className="input input-bordered">
                                    <option value="Phone">Phone</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Watch">Watch</option>
                                    <option value="Camera">Camera</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="$" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Short Description" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating (1 to 5)" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control md:items-center">
                        <label className="label">
                            <span className="label-text text-white font-medium">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered" />
                        </label>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-secondary my-3" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
