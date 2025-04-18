import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; 
import AuthContext from "../../../../../context/AuthContext/AuthContext";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";

const AddGifts = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic=useAxiosPublic();
    const userEmail = user?.email;
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.distance.value;
        const category = form.description.value;
        // const image = form.image.value;

        // Create the Gift object
        const newGift = {
            title,
            description,
            price,
            category,
            // image,
            userEmail,
        };

        axiosPublic
            .post("/giftify/gifts/create", newGift)
            .then((response) => {
                console.log("Gift added successfully:", response.data);
                Swal.fire({
                    title: "Success!",
                    text: "Gift  added successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                }).then(() => {
                    navigate("/gift-catalog");
                });
            })
            .catch((error) => {
                console.error("Error adding Gift:", error.response ? error.response.data : error.message);
                Swal.fire({
                    title: "Error!",
                    text: error.response ? error.response.data.message : "There was an error adding the Gift. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            });
    };

    return (
        <div className="max-w-4xl mx-auto p-6  shadow-lg rounded-lg mb-4">
            <h2 className="text-2xl font-bold mb-4 text-purple-500">Add Gift</h2>
            <form onSubmit={handleSubmit}>
                {/* Gift Title */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Gift Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter Gift title"
                        required
                    />
                </div>
                {/* Gift Description */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Gift Description</label>
                    <input
                        type="text"
                        name="description"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter Gift description"
                        required
                    />
                </div>
                {/* Gift Price */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Gift Price</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border rounded-lg p-2"
                        placeholder="Enter Gift Price"
                        // required
                    />
                </div>
                {/* Gift Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Category</label>
                    <select name="category" className="w-full border rounded-lg p-2" required>
                        <option value="25k">E-Gift</option>
                        <option value="10k">Virtual</option>
                        <option value="3k">Animated</option>
                    </select>
                </div>

                {/* Gift Image */}
                {/* <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2"> Gift Image URL</label>
                    <input
                        type="url"
                        name="image"
                        placeholder="Enter Gift image URL"
                        className="w-full p-2 border rounded-md"
                        required
                    />
                </div> */}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddGifts;