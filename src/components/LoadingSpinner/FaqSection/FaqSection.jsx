import React from "react";

const FaqSection = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="md:text-3xl text-2xl font-semibold text-center mb-6">Frequently Asked Questions ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* FAQ Accordion */}
                <div className="join join-vertical bg-base-100 w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-lg font-semibold">
                            How do I create an account?
                        </div>
                        <div className="collapse-content text-sm">
                            Click the "Sign Up" button in the top right corner and follow the registration process.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            How can I send a virtual gift?
                        </div>
                        <div className="collapse-content text-sm">
                            Simply browse our gifts, select one, and click "Send as Gift" from the product page.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            What payment methods do you accept?
                        </div>
                        <div className="collapse-content text-sm">
                            We accept Visa, MasterCard, PayPal, and other secure payment options.
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-semibold">
                            Can I customize the gift message?
                        </div>
                        <div className="collapse-content text-sm">
                            Yes! Before checkout, you can add a personalized message to your virtual gift.
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="flex justify-center ">
                    <img
                        src="https://i.ibb.co/nsLd3731/FAQs-amico.png"
                        alt="FAQ Illustration"
                        className="w-[280px] h-[240px] md:w-[320px] md:h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
