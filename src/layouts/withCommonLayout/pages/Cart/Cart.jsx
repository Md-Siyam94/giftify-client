import { FaEye, FaTrashAlt } from "react-icons/fa";



const Cart = () => {
    return (
        <div>
            <div className="px-6 pt-4 max-w-screen-xl mx-auto">
                {/* <h1 className="text-3xl font-bold mb-6">All({cartItems.length})</h1> */}
                <div className="flex justify-evenly mb-6 pt-8 pb-5 items-center">
                    {/* <h2 className="text-4xl">Ordered Medicine: {cart.length}</h2>
                    <h2 className="text-4xl">Total Price: {totalPrice}</h2> */}
                    <h2 className="text-4xl">Ordered Gift: 2</h2>
                    <h2 className="text-4xl">Total Price: $90</h2>
                    {/* {cart.length ? <Link to="/dashboard/payment">
                        <button className="btn primary-btn btn-lg">Checkout</button>
                    </Link> :
                        <button disabled className="btn btn-primary">Checkout</button>
                    } */}

                    <button className="btn primary-btn btn-lg">Checkout</button>

                </div>
                <div className="mb-8 ml-24">

                    {/* {cart.length ? <button className="btn btn-neutral"
                        onClick={handleClearCart}
                    >Clear Cart</button> :
                        <button disabled className="btn btn-warning">Clear Cart</button>
                    } */}


                    <button className="btn btn-neutral">Clear Cart</button>
                    {/* <button disabled className="btn btn-warning">Clear Cart</button> */}


                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-3 text-gray-800">
                                <th>
                                    No.
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                            {/* {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>{1}</td>
                                    <td>${item.price}</td>
                                    <td className="py-3 px-4">
                                        <button
                                            className="mr-5 mt-2"
                                        >
                                            <div className="text-xl text-emerald-950 mr-2"
                                                onClick={() => handleViewDetails(item)}
                                            >
                                                <FaEye />
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            } */}


                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co.com/ZRnMHTY3/images-1.jpg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    demo
                                </td>
                                <td>{1}</td>
                                <td>$ Price</td>
                                <td className="py-3 px-4">
                                    <button
                                        className="mr-5 mt-2"
                                    >
                                        <div className="text-xl text-emerald-950 mr-2"
                                        // onClick={() => handleViewDetails(item)}
                                        >
                                            <FaEye />
                                        </div>
                                    </button>
                                    <button
                                        // onClick={() => handleDelete(item._id)}
                                        className="text-lg">
                                        <FaTrashAlt className="text-slate-500"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <th>1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://i.ibb.co.com/ZRnMHTY3/images-1.jpg" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    demo
                                </td>
                                <td>{1}</td>
                                <td>$ Price</td>
                                <td className="py-3 px-4">
                                    <button
                                        className="mr-5 mt-2"
                                    >
                                        <div className="text-xl text-emerald-950 mr-2"
                                        // onClick={() => handleViewDetails(item)}
                                        >
                                            <FaEye />
                                        </div>
                                    </button>
                                    <button
                                        // onClick={() => handleDelete(item._id)}
                                        className="text-lg">
                                        <FaTrashAlt className="text-slate-500"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;