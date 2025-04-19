import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../../../context/AuthContext/AuthContext";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddGifts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const imageFile = new FormData();
            imageFile.append("image", data.image[0]);

            const imageRes = await axiosPublic.post(image_hosting_api, imageFile, {
                headers: { "content-type": "multipart/form-data" },
            });

            if (imageRes.data.success) {
                const imageUrl = imageRes.data.data.display_url;

                const newGift = {
                    title: data.title,
                    description: data.description,
                    image: imageUrl,
                    price: parseFloat(data.price),
                    category: data.category,
                    featured: false,
                    // createdBy: user?.email
                };

                const response = await axiosPublic.post("/giftify/gifts/create", newGift);

                if (response.data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Gift added successfully!",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        reset();
                        navigate("/gift-catalog");
                    });
                }
            } 
        } catch (error) {
            console.error("Add gift error:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to add gift. Try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-500">Add Gift</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                {/* Title */}
                <div className="form-control">
                    <label className="text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        {...register("title", { required: "Title is required" })}
                    />
                    {errors.title && <span className="text-red-600 text-xs">{errors.title.message}</span>}
                </div>

                {/* Image */}
                <div className="form-control">
                    <label className="text-sm font-medium text-gray-700 mb-1">Image</label>
                    <input
                        type="file"
                        className="file-input file-input-bordered w-full"
                        {...register("image", { required: "Image is required" })}
                    />
                    {errors.image && <span className="text-red-600 text-xs">{errors.image.message}</span>}
                </div>

                {/* Description */}
                <div className="form-control">
                    <label className="text-sm font-medium text-gray-700 mb-1">Description</label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        {...register("description", { required: "Description is required" })}
                    />
                    {errors.description && <span className="text-red-600 text-xs">{errors.description.message}</span>}
                </div>

                {/* Category */}
                <div className="form-control">
                    <label className="text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                        className="select select-bordered w-full"
                        {...register("category", { required: "Category is required" })}
                    >
                        <option value="">Select Category</option>
                        <option value="E-gift">Virtual Experiences </option>
                        <option value="Virtual">Animated Greetings</option>
                        <option value="Animated">E-Gift Cards</option>
                    </select>
                    {errors.category && <span className="text-red-600 text-xs">{errors.category.message}</span>}
                </div>

                {/* Price */}
                <div className="form-control">
                    <label className="text-sm font-medium text-gray-700 mb-1">Price</label>
                    <input
                        type="number"
                        className="input input-bordered w-full"
                        {...register("price", { required: "Price is required" })}
                    />
                    {errors.price && <span className="text-red-600 text-xs">{errors.price.message}</span>}
                </div>

                {/* Submit */}
                <button type="submit" className="btn mx-auto bg-purple-600 text-white text-lg font-semibold w-full">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddGifts;
