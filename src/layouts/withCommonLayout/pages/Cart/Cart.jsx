import { useContext, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import AuthContext from "../../../../context/AuthContext/AuthContext";
import useCart from "../../../../hooks/useCart";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { LuMessageSquareText } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [cart, refetch] = useCart();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItemId, setCurrentItemId] = useState(null);


    const openModal = (itemId) => {
        const item = cart.find(c => c._id === itemId);
        setCurrentItemId(itemId);
        reset({
            name: item?.receiver || '',
            message: item?.message || '',
        });
        setIsModalOpen(true);
    };


    // new code below
    const onSubmit = async (data) => {
        // console.log(data);



        const newMessage = {
            receiver: data.name,
            message: data.message,
            sender: user.email
        };

        const messageRes = await axiosPublic.patch(`/giftify/carts/item/${currentItemId}`,
            newMessage
        );

        if (messageRes.data.success) {
            reset();
            refetch();
            setIsModalOpen(false);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Done!`,
                showConfirmButton: false,
                timer: 800,
            });
        }

    };
    // new code above



    // Update quantity and sync with server, then refetch so cart[].quantity is fresh
    const handleQuantityChange = async (id, newQty) => {
        if (newQty < 1) return;
        try {
            await axiosPublic.patch(`/giftify/carts/item/${id}`, { quantity: newQty });
            refetch();
        } catch (err) {
            console.error("Failed to update quantity:", err);
            Swal.fire("Error", "Could not update quantity.", "error");
        }
    };

    // Total price now uses item.quantity directly
    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    // const hasMessage = cart.find(c => c._id === gift._id)?.message;
    // const confirmBtnText = hasMessage ? 'Reset Message' : 'Add Message';

    const handleViewDetails = (gift) => {

        const hasMessage = cart.find(c => c._id === gift._id)?.message;
        const confirmBtnText = hasMessage ? 'Reset Message' : 'Add Message';
        Swal.fire({
            title: gift.title,
            imageUrl: gift.image,
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: gift.title,

            // ── Styled details below the image ──
            html: `
            <div class="space-y-2.5 text-left">
              <!-- Price -->
              <div class="text-3xl font-bold text-p">
                $${gift.price}
              </div>
      
              <!-- Category & Rating -->
              <div class="flex items-center justify-between">
                <span class="text-xs uppercase font-medium text-gray-800 bg-base-300 p-2">
                  ${gift.category}
                </span>
                <span class="flex items-center gap-1">
                  ${[...Array(5)]
                    .map(() => `
                      <svg xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 fill-yellow-400"
                           viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431L24 9.748l-6 5.848 
                                 1.42 8.29L12 19.771 4.58 23.886 6 15.596 
                                 0 9.748l8.332-1.73z"/>
                      </svg>
                    `)
                    .join('')}
                  <span class="text-gray-800 font-medium">(${gift.rating})</span>
                </span>
              </div>
      
              <!-- Description -->
              <p class="prose prose-sm text-gray-700">
                ${gift.description}
              </p>
            </div>
          `,

            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: confirmBtnText,
            focusConfirm: false,

            buttonsStyling: false,

            customClass: {
                popup: 'rounded-lg max-w-md',
                image: 'rounded-xl',
                confirmButton: 'btn bg-[#9333EA] hover:bg-[#7A22D1] text-white',
                closeButton: 'pl-3 pb-3',
            },
        })
            .then((result) => {
                if (result.isConfirmed) {
                    openModal(gift._id);  // ← calls reset(...) and setIsModalOpen(true)
                }
            });
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This item will be removed from your cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ff3e3e",
            cancelButtonColor: "",
            confirmButtonText: "Yes, remove it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/giftify/carts/item/${id}`);
                    if (res.data.success) {
                        refetch();
                        Swal.fire("Removed!", "Your gift has been removed.", "success");
                    }
                } catch (error) {
                    console.error("Delete failed:", error);
                    Swal.fire("Error", "Something went wrong while deleting.", "error");
                }
            }
        });
    };

    // const handleClearCart = async () => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "This will remove all gifts from your cart!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, clear all!",
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             try {
    //                 const res = await axiosPublic.delete(`/giftify/carts/clear/${user.email}`);
    //                 if (res.data.deletedCount > 0) {
    //                     refetch();
    //                     Swal.fire("Cleared!", "All your gifts have been removed.", "success");
    //                 }
    //             } catch (error) {
    //                 console.error("Failed to clear cart:", error);
    //                 Swal.fire("Error", "Something went wrong while clearing the cart.", "error");
    //             }
    //         }
    //     });
    // };



    // ← get the current item & detect if it has a message already
    const currentItem = cart.find(c => c._id === currentItemId);
    const hasExistingMessage = Boolean(currentItem?.message);

    return (
        <div className="mb-40 px-2 md:px-3 lg:px-8">
            <div className="px-6 pt-4 max-w-screen-xl mx-auto">

                <div className="flex flex-col sm:flex-row justify-between items-center pt-6 pb-1 space-y-4 sm:space-y-0 sm:space-x-4">
                    <h2 className="text-xl md:text-2xl lg:text-4xl">Ordered Gift: {cart.length}</h2>
                    <h2 className="text-xl md:text-2xl lg:text-4xl">Total Price: ${totalPrice.toFixed(2)}</h2>

                    {cart.length ? (
                        <Link to="/dashboard/payment">
                            <button className="btn bg-[#731bc5] text-white border-0 w-full sm:w-auto transition duration-100 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-white hover:bg-[#470c7e] hover:text-white">
                                PROCEED TO PURCHASE
                            </button>
                        </Link>
                    ) : (
                        <button disabled className="btn w-full sm:w-auto">
                            PROCEED TO PURCHASE
                        </button>
                    )}
                </div>

                {cart.length === 0 ? (
                    <div className="mt-4 md:mt-6 lg:mt-8">
                        <h2 className="text-lg lg:text-2xl bg-base-300 w-full sm:w-1/3 mx-auto text-gray-600 px-2.5 py-2 font-semibold text-center">
                            No Gifts in Your Cart Yet!
                        </h2>
                    </div>
                ) : (
                    <div className="overflow-x-auto mt-2.5">
                        <table className="table min-w-full">
                            <thead>
                                <tr className="bg-3 text-white">
                                    <th>No.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={item._id} className="even:bg-gray-100/60 hover:bg-purple-300/10">
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div
                                                        className="mask mask-squircle w-12 h-12 cursor-pointer"
                                                        onClick={() => handleViewDetails(item)}
                                                    >
                                                        <img src={item.image} alt={item.name} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.title}</td>
                                        <td className="flex items-center space-x-1 -ml-4">
                                            <div className="tooltip" data-tip="decrease">
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                    className="btn btn-sm text-base border-gray-300"
                                                >
                                                    −
                                                </button>
                                            </div>
                                            <span className="w-6 text-center">{item.quantity}</span>
                                            <div className="tooltip" data-tip="increase">
                                                <button
                                                    onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                                    className="btn btn-sm text-base border-gray-300"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="py-3 px-4">
                                            <div className="tooltip" data-tip="Set Message">
                                                <button
                                                    className="mr-5 mt-2 text-xl text-emerald-950"
                                                    onClick={() => openModal(item._id)}
                                                >
                                                    <div className="text-xl text-emerald-950 mr-2">
                                                        <LuMessageSquareText />
                                                    </div>
                                                </button>
                                            </div>
                                            <div className="tooltip" data-tip="Remove from Cart">
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="text-lg"
                                                >
                                                    <FaTrashAlt className="text-gray-600" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {isModalOpen && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    >
                        <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 p-6">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
                                    {cart.find(c => c._id === currentItemId)?.message
                                        ? 'Edit Message'
                                        : 'Add a Message'}
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    aria-label="Close modal"
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <AiOutlineClose className="h-6 w-6" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                {/* Receiver Name */}
                                <div>
                                    <label htmlFor="receiver" className="block text-sm font-medium text-gray-700">
                                        Receiver Name<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="receiver"
                                        type="text"
                                        placeholder="e.g. Elon Musk"
                                        {...register('name', { required: 'Receiver Name is required' })}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                    )}
                                </div>

                                {/* Message Details */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Short Message<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        placeholder="Your message…"
                                        {...register('message', { required: 'Message is required' })}
                                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                    )}
                                </div>

                                {/* Actions */}
                                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn bg-[#9333EA] hover:bg-[#7A22D1] text-white">
                                        {cart.find(c => c._id === currentItemId)?.message ? 'Reset Message' : 'Add Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );

};

export default Cart;
