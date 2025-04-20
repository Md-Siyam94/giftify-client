import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gradient-to-br from-[#ffe7f2] to-[#e0f7fa] min-h-screen text-gray-800">
            {/* Hero Section */}
            <section className="text-center py-16 px-4 md:px-20 bg-white shadow-md ">
                <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-md animate-fade-in-up">
                    Welcome to Giftify 🎁
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                    Your one-stop virtual gift shop – delivering love instantly!
                </p>
            </section>


            {/* Introduction Section */}
            <section className="py-16 px-4 md:px-20 space-y-8">
                <h2 className="text-3xl font-bold text-center text-[#1a1a1a] mb-12">Who We Are</h2>
                <div className="md:flex items-center justify-between gap-12">
                    {/* Text Content */}
                    <p className="text-lg leading-relaxed max-w-xl text-gray-700 mx-auto md:mx-0 md:text-left">
                        <span className="block mb-4">
                            <strong>Giftify</strong> is an innovative e-commerce platform that allows users to send digital gifts instantly.
                        </span>
                        Whether it's a birthday surprise or a corporate thank-you note, our system offers seamless
                        customization and instant delivery.
                    </p>

                    {/* Image */}
                    <img
                        src="https://i.ibb.co/r25tCrZ9/Send-gift-amico.png"
                        alt="Send Gift Illustration"
                        className="w-[280px] sm:w-[300px] md:w-[380px] mt-8 p-4 md:mt-0 md:p-0 mx-auto"
                    />
                </div>
            </section>


            {/* Audience Section */}
            <section className="bg-pink-50 py-16 px-4 md:px-20">
                <h2 className="text-3xl font-bold text-center text-pink-700 mb-10">Who It's For</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                        {
                            title: "Individuals",
                            desc: "Send digital love to friends, family, and loved ones anytime.",
                            img: "https://i.ibb.co/4zY0xsF/management.png",
                        },
                        {
                            title: "Corporate Clients",
                            desc: "Reward employees or thank clients with custom virtual gifts.",
                            img: "https://i.ibb.co/xSd0QhRt/corporate-clients.png",
                        },
                        {
                            title: "Event Planners",
                            desc: "Perfect for digital gifting in weddings, birthdays, and events.",
                            img: "https://i.ibb.co/Kjxz14kG/Events-Planners.png",
                        },
                    ].map((audience, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                            <img
                                src={audience.img}
                                alt={audience.title}
                                className="w-16 h-16  mx-auto mb-4 object-cover"
                            />
                            <h3 className="font-semibold text-xl text-pink-600">{audience.title}</h3>
                            <p className="mt-2 text-gray-600">{audience.desc}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Features Section */}
            <section className="py-16 px-4 md:px-20">
                <h2 className="text-3xl font-bold text-center text-[#1a1a1a] mb-12">Our Key Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: "https://i.ibb.co/4ZTMk1qG/personalized-greeting-vouchers.png",
                            title: "Personalized Greetings & Vouchers",
                        },
                        {
                            icon: "https://i.ibb.co/M5cWv0HZ/preview.png",
                            title: "Live Preview of Gifts",
                        },
                        {
                            icon: "https://i.ibb.co/xtzHqzHq/wishlist.png",
                            title: "Wishlist & Favorites",
                        },
                        {
                            icon: "https://i.ibb.co/3yqntvJc/Indeviduals.png",
                            title: "Instant & Scheduled Delivery",
                        },
                        {
                            icon: "https://i.ibb.co/mrHynvd4/secure-payment.png",
                            title: "Secure Payments with Stripe",
                        },
                        {
                            icon: "https://i.ibb.co/5gmmbXCD/dashboard.png",
                            title: "User & Admin Dashboards",
                        },
                    ].map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition flex items-center gap-4"
                        >
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-10 h-10 object-contain"
                            />
                            <h3 className="font-semibold text-lg text-pink-500">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </section>


            {/* Mission Section */}
            <section className="bg-[#fff0f5] py-16 px-4 md:px-20 text-center rounded-t-3xl">
                <h2 className="text-3xl font-bold text-pink-700">Our Mission</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-700">
                    We aim to revolutionize how people celebrate and share joy. Giftify makes digital gifting easy,
                    elegant, and emotionally meaningful.
                </p>
                <p className="mt-6 text-xl text-pink-600 font-semibold">Join us in spreading virtual smiles! 😊</p>

                <img
                    className="w-[280px] sm:w-[300px] md:w-[380px] mt-8 p-4 mx-auto"
                    src="https://i.ibb.co/pBYn14r2/Team-work-amico.png"
                    alt="Teamwork Illustration"
                />
            </section>

        </div>
    );
};

export default AboutUs;