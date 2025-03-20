import { useEffect, useState } from "react";
import GiftCatalogCard from "./GiftCatalogCard";


const GiftCatalog = () => {

    const [gifts, setGifts] = useState([]);
    const [filteredGifts, setFilteredGifts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Gifts");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState(""); // "asc" for Low to High, "desc" for High to Low
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [applySorting, setApplySorting] = useState(false); // Trigger sorting

    // Fetch gift data from JSON file
    useEffect(() => {
        fetch("/gifts.json")
            .then((res) => res.json())
            .then((data) => {
                setGifts(data);
                setFilteredGifts(data); // Initially show all gifts
            });
    }, []);

    // Debounce search term (1.5 sec delay before applying search)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Apply filtering whenever debouncedSearch or category changes (Sorting only on button click)
    useEffect(() => {
        let filtered = gifts;

        // Apply Category Filter
        if (selectedCategory !== "All Gifts") {
            filtered = filtered.filter((gift) => gift.category === selectedCategory);
        }

        // Apply Search Filter (debounced search)
        if (debouncedSearch.trim() !== "") {
            filtered = filtered.filter((gift) =>
                gift.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
        }

        // Apply Sorting only when Apply Filters is clicked
        if (applySorting && sortOrder) {
            if (sortOrder === "asc") {
                filtered = [...filtered].sort((a, b) => a.price - b.price);
            } else if (sortOrder === "desc") {
                filtered = [...filtered].sort((a, b) => b.price - a.price);
            }
        }

        setFilteredGifts(filtered);
    }, [debouncedSearch, selectedCategory, applySorting, gifts]);

    // Function to handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSortOrder(""); // Reset sorting
        setSearchTerm(""); // Reset search
        setDebouncedSearch("");
        setApplySorting(false); // Reset sorting flag

        if (category === "All Gifts") {
            setFilteredGifts(gifts);
        } else {
            setFilteredGifts(gifts.filter((gift) => gift.category === category));
        }
    };

    // Apply sorting manually when "Apply Filters" is clicked
    const applyFilters = () => {
        setApplySorting(false); // Reset sorting first
        setTimeout(() => setApplySorting(true), 0); // Apply sorting in the next render
    };


    return (
        <>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center">Choose the Perfect Gift</h1>
                <p className="text-center text-gray-600 mt-2">
                    Discover our collection of unique digital gifts, from e-gift cards to personalized experiences.
                </p>

                {/* Search and Filter */}
                <div className="flex flex-wrap justify-between gap-4 my-6">
                    {/* Search Input */}
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
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>

                    {/* Filter & Sorting */}
                    <div className="flex justify-center items-center gap-6">
                        <button className="btn" onClick={applyFilters}>
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
                <div className="tabs tabs-boxed flex justify-center mb-6">
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

                {/* Gift Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGifts.map((gift) => (
                        <GiftCatalogCard key={gift.id} gift={gift} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default GiftCatalog;