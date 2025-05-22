import { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder-avatar.jpg",
    content:
      "The team at SecureTech was professional from start to finish. They helped me choose the right security system for my home and installed it quickly. The mobile app is easy to use and gives me peace of mind when I'm away.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Business Owner",
    image: "/placeholder-avatar.jpg",
    content:
      "We've been using SecureTech for our retail store security for over 3 years now. Their systems are reliable and the customer service is excellent. Whenever we've had an issue, they've responded quickly to resolve it.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Property Manager",
    image: "/placeholder-avatar.jpg",
    content:
      "Managing multiple properties requires reliable security solutions. SecureTech has provided us with integrated systems that are easy to monitor from a central location. Their team is knowledgeable and responsive.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Restaurant Owner",
    image: "/placeholder-avatar.jpg",
    content:
      "The 4K cameras we had installed by SecureTech have been a game-changer for our restaurant. The image quality is outstanding, and the system was surprisingly affordable. Highly recommend their services!",
    rating: 5,
  },
  {
    id: 5,
    name: "Amanda Rodriguez",
    role: "Homeowner",
    image: "/placeholder-avatar.jpg",
    content:
      "After a break-in at our neighbor's house, we decided to get a security system. SecureTech provided a comprehensive solution that included cameras, alarms, and smart locks. We feel much safer now.",
    rating: 5,
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    // Determine how many testimonials to show based on screen size
    const handleResize = () => {
      let count = 1;
      if (window.innerWidth >= 1024) {
        count = 3;
      } else if (window.innerWidth >= 640) {
        count = 2;
      }

      const startIndex = currentIndex;
      const endIndex = Math.min(startIndex + count, testimonials.length);
      setVisibleTestimonials(testimonials.slice(startIndex, endIndex));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(testimonials.length - 1, prev + 1));
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden gap-6">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-1 min-w-0 bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(
                      " ",
                      "+"
                    )}&background=random`;
                  }}
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-4 w-4 ${
                    i < testimonial.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.content}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <button
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </button>

        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 p-0 rounded-full ${
              index >= currentIndex &&
              index < currentIndex + visibleTestimonials.length
                ? "bg-blue-700"
                : "bg-gray-300"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}

        <button
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          onClick={handleNext}
          disabled={
            currentIndex >= testimonials.length - visibleTestimonials.length
          }
        >
          <FaChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default TestimonialSlider;
