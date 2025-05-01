import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "motion/react"

const Testimonials = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { perView: 1.5, spacing: 20 },
    breakpoints: {
      "(min-width: 500px)": { perView: 2.5 },
      "(min-width: 768px)": { perView: 3.5 },
    },
  });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote:
        "Giftify made sending birthday gifts to my family abroad so much easier. The digital cards are beautiful!",
    },
    {
      name: "Michael Chen",
      role: "Business User",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote:
        "We use Giftify for all our corporate gifting needs. The platform is efficient and professional.",
    },
    {
      name: "Emma Williams",
      role: "Event Planner",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      quote:
        "The variety of virtual experiences available is amazing. My clients are always impressed!",
    },
    {
      name: "David Brown",
      role: "Frequent Shopper",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&q=80",
      quote:
        "I love the seamless shopping experience. Giftify has become my go-to gifting solution!",
    },
    {
      name: "Sophia Martinez",
      role: "HR Manager",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80",
      quote:
        "Our employees appreciate the thoughtful gifts we send through Giftify. It's a great platform!",
    },
  ];

  return (
    <section className="mx-3">
      <div className="mt-14 md:mt-16 lg:mt-36 mb-0 lg:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-3 md:mb-7 lg:mb-9"
        >
          What Our Users Say
        </motion.h2>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
              keen-slider__slide
              bg-white border border-gray-300
              p-6 sm:p-8 lg:p-10       /* responsive padding */
              rounded-xl shadow-sm
            "
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.4 }}
                className="flex items-center mb-4"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="
                  w-10 h-10              /* mobile size */
                  sm:w-12 sm:h-12        /* tablet+ size */
                  rounded-full
                  mr-3 sm:mr-4           /* responsive margin */
                "
                />
                <div>
                  <h4 className="font-semibold text-base sm:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
                className="
                text-gray-600 italic
                text-sm sm:text-base     /* responsive font-size */
              "
              >
                "{testimonial.quote}"
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
