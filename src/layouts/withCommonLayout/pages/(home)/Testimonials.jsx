import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white border border-gray-300 p-10 rounded-xl shadow-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
