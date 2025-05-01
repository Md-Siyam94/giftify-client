import React from "react";
import { motion } from "framer-motion"; // Use "framer-motion", not "motion/react"

const FaqSection = () => {
  const title = "Frequently Asked Questions ?";

  return (
    <section className="py-10 md:py-14 lg:py-24 mx-3">
      {/* Animated Title */}
      <motion.h2
        className="md:text-3xl text-xl font-semibold text-center mb-6 flex flex-wrap justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={{
          visible: { transition: { staggerChildren: 0.04 } },
        }}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* FAQ Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> {/* New: lg breakpoint instead of md */}
        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
          viewport={{ once: false, amount: 0.4 }}
          className="join join-vertical bg-base-100 w-full"
        >
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
        </motion.div>

        {/* FAQ Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co/nsLd3731/FAQs-amico.png"
            alt="FAQ Illustration"
            className="w-[200px] sm:w-[280px] md:w-[320px] h-auto" // New: h-auto & responsive width
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
