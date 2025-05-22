
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What type of CCTV system is best for my home?",
    answer:
      "The best CCTV system for your home depends on your specific needs. For most homes, we recommend a 4-6 camera system with at least 2TB of storage. IP cameras offer better resolution and features compared to analog cameras. During our free consultation, we'll assess your property and recommend the most suitable system.",
  },
  {
    question: "Can I view my security cameras remotely?",
    answer:
      "Yes, all of our modern security systems come with mobile apps that allow you to view your cameras remotely from anywhere in the world. You can receive motion alerts, review footage, and even communicate through two-way audio on compatible cameras. The apps are available for both iOS and Android devices.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation time varies depending on the complexity of the system and the size of your property. A typical residential installation with 4-6 cameras usually takes 4-6 hours. Commercial installations may take 1-2 days. Our technicians work efficiently to minimize disruption to your home or business.",
  },
  {
    question: "Do you offer maintenance services for security systems?",
    answer:
      "Yes, we offer maintenance packages to ensure your security system continues to function optimally. Our maintenance services include regular system checks, software updates, camera cleaning, and troubleshooting. We recommend a maintenance check at least once a year.",
  },
  {
    question: "How long is footage stored on the system?",
    answer:
      "The storage duration depends on your system's hard drive capacity, the number of cameras, resolution settings, and recording mode (continuous vs. motion-activated). With a 2TB hard drive and 4 cameras at 1080p resolution using motion detection, you can typically store 2-4 weeks of footage. We can help you calculate the exact storage needs for your situation.",
  },
  {
    question: "Are your systems wireless or wired?",
    answer:
      "We offer both wireless and wired security systems. Wired systems are more reliable and don't require battery changes, but installation is more involved. Wireless systems are easier to install but may require occasional battery replacement and can be subject to interference. During our consultation, we'll discuss the pros and cons of each option for your specific situation.",
  },
  {
    question: "Do you offer warranties on your products and installation?",
    answer:
      "Yes, all of our products come with manufacturer warranties ranging from 1-3 years. Additionally, we provide a 12-month warranty on our installation work. Extended warranty options are also available for purchase. Our goal is to ensure your complete satisfaction with both our products and services.",
  },
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <button
            className="flex justify-between items-center w-full text-left font-medium text-gray-900 focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="h-4 w-4 text-blue-700" />
            ) : (
              <FaChevronDown className="h-4 w-4 text-blue-700" />
            )}
          </button>
          <div
            className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p className="py-2">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaqAccordion;
