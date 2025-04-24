import { useContext } from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import AuthContext from "../../../../context/AuthContext/AuthContext";
import useCart from "../../../../hooks/useCart";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const Cart = () => {

    const [cart, refetch] = useCart();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);



    const handleViewDetails = (gift) => {
        Swal.fire({
            title: gift.title,
            imageUrl: gift.image,
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: gift.title,
            html: `
                    <div class="text-left ml-10 space-y-1.5">
                        <p><strong>Category:</strong> ${gift.category}</p>
                        <p><strong>Price:</strong> $${gift.price}</p>
                        <p><strong>Description:</strong> ${gift.description}</p>
                        <p><strong>Rating:</strong> ${gift.rating}</p>
                    </div>
                `,
            showCloseButton: true,
            showConfirmButton: false,
        });
    };


    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/giftify/carts/item/${id}`);
                    if (res.data.success) {
                        refetch();
                        Swal.fire("Deleted!", "Your gift has been deleted.", "success");
                    }
                } catch (error) {
                    console.error("Delete failed:", error);
                    Swal.fire("Error", "Something went wrong while deleting.", "error");
                }
            }
        });
    };


    const handleClearCart = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will remove all gifts from your cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, clear it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/giftify/carts/clear/${user.email}`);
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire("Cleared!", "All your gifts have been deleted.", "success");
                    }
                } catch (error) {
                    console.error("Failed to clear cart:", error);
                    Swal.fire("Error", "Something went wrong while clearing the cart.", "error");
                }
            }
        });
    };



    return (
        <div className="mb-40">
            <div className="px-6 pt-4 max-w-screen-xl mx-auto">
                <div className="flex justify-evenly mb-6 pt-8 pb-5 items-center">
                    <h2 className="text-4xl">Ordered Gift: {cart.length}</h2>
                    <h2 className="text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>

                    {cart.length ? <Link to="/dashboard/payment">
                        <button className="btn btn-lg">
                            Checkout
                        </button>
                    </Link> :
                        <button disabled className="btn btn-lg">
                            Checkout
                        </button>
                    }


                </div>

                <div className="mb-8 ml-24">
                    <button
                        className={`btn ${cart.length ? 'btn-neutral' : 'btn-warning'}`}
                        onClick={handleClearCart}
                        disabled={!cart.length}
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-3 text-white">
                                <th>No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td>1</td>
                                    <td>${item.price}</td>
                                    <td className="py-3 px-4">
                                        <button className="mr-5 mt-2">
                                            <div className="text-xl text-emerald-950 mr-2"
                                                onClick={() => handleViewDetails(item)}>
                                                <FaEye />
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="text-lg"
                                        >
                                            <FaTrashAlt className="text-gray-600" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;