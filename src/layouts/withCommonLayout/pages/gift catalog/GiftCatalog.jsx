import { useEffect, useState } from "react";
import GiftCatalogCard from "./GiftCatalogCard";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";



const GiftCatalog = () => {
    const [filteredGifts, setFilteredGifts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Gifts");
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    const axiosPublic = useAxiosPublic();

    const { data: gifts = [], isLoading, isError } = useQuery({
        queryKey: ['gifts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/giftify/gifts');
            return res.data;
        }
    });

    // Debounce searchTerm
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearch(searchTerm), 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Apply filters when gifts, category, or search changes
    useEffect(() => {
        if (!gifts || gifts.length === 0) return;

        let result = [...gifts];

        if (selectedCategory !== "All Gifts") {
            result = result.filter(g => g.category === selectedCategory);
        }

        if (debouncedSearch.trim()) {
            result = result.filter(g =>
                g.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
        }

        // Apply sorting
        if (sortOrder === "asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "desc") {
            result.sort((a, b) => b.price - a.price);
        }

        setFilteredGifts(result);
    }, [gifts, selectedCategory, debouncedSearch, sortOrder]);

    // Handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSearchTerm("");
        setDebouncedSearch("");
        setSortOrder("");
    };

    if (isLoading) return <LoadingSpinner />;
    if (isError) return <p className="text-center text-red-500 py-8">Failed to load gifts.</p>;



    return (
        <div className="container mx-auto p-6">
            <div className="pt-5 pb-8 space-y-2.5">
                <h1 className="text-4xl font-bold text-center">Choose the Perfect Gift</h1>
                <p className="text-center text-gray-600 mt-2">
                    Discover our collection of unique digital gifts, from e-gift cards to personalized experiences.
                </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-wrap justify-between gap-4 mt-6 mb-9">
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        <input
                            type="text"
                            className="grow"
                            placeholder="Search for gifts..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>
                </div>

                {/* Sort Filter */}
                <div className="flex justify-center items-center gap-6">
                    <button className="btn" disabled onClick={() => setSortOrder(sortOrder)}>
                        Apply Filters
                    </button>
                    <select
                        className="select select-bordered text-lg"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        <option value="">Newest First</option>
                        <option value="asc">Price Low to High</option>
                        <option value="desc">Price High to Low</option>
                    </select>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="tabs tabs-boxed flex justify-center mb-9">
                {["All Gifts", "E-Gift Cards", "Animated Greetings", "Virtual Experiences"].map((category) => (
                    <button
                        key={category}
                        className={`tab ${selectedCategory === category ? "tab-active btn-p hover:text-white text-white" : ""}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gifts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-7 lg:gap-8 mb-28 items-stretch">
                {filteredGifts.map((gift) => (
                    <GiftCatalogCard key={gift._id} gift={gift} />
                ))}
            </div>
        </div>
    );
};

export default GiftCatalog;