import {
  FaPhone,
  FaShieldAlt,
  FaCamera,
  FaBell,
  FaLock,
  FaCheck,
  FaChevronRight,
} from "react-icons/fa";
// Use public folder paths instead of imports
const heroImage = "../../assets/en.png";
const aboutImage = "../../Svg_files/pinglogo.svg";
import TestimonialSlider from "./testimonial";
import ProductShowcase from "./product";
import FaqAccordion from "./faq";
import ContactForm from "./contactForm";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage || "../../assets/react.svg"}
            // alt="Security Systems"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Advanced CCTV & Camera Systems
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            State-of-the-art security solutions for your home and business.
            Professional installation and 24/7 monitoring services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-medium">
              Get a Free Quote
            </button>
            <button className="px-6 py-3 border border-white text-white hover:bg-white/20 rounded-full text-lg font-medium">
              <FaPhone className="inline mr-2 h-4 w-4" /> Call Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of security solutions tailored to
              your specific needs. Our expert team ensures professional
              installation and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<FaCamera className="h-8 w-8 text-blue-700" />}
              title="CCTV Systems"
              description="High-definition cameras with night vision, motion detection, and remote viewing capabilities."
            />
            <ServiceCard
              icon={<FaBell className="h-8 w-8 text-blue-700" />}
              title="Alarm Systems"
              description="Advanced alarm systems with 24/7 monitoring, smartphone integration, and instant alerts."
            />
            <ServiceCard
              icon={<FaLock className="h-8 w-8 text-blue-700" />}
              title="Access Control"
              description="Secure entry systems with keycard, biometric, and mobile access options for any property."
            />
            <ServiceCard
              icon={<FaShieldAlt className="h-8 w-8 text-blue-700" />}
              title="Integrated Security"
              description="Comprehensive security solutions that combine multiple systems for complete protection."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-700">
                Thinking About Increasing The Safety And Security Of Your Home
                With CCTV?
              </h2>
              <p className="mb-4 text-gray-600">
                SecureTech is able to help with all of your CCTV security needs.
                We are a fully accredited security provider, and all of our
                technicians are police checked and hold current working with
                children checks.
              </p>
              <p className="mb-6 text-gray-600">
                Our team provides the latest technology and works in conjunction
                with a range of reputable brands to ensure that our solutions
                are cutting edge and reliable.
              </p>
              <ul className="space-y-3">
                <CheckListItem text="Professional installation by certified technicians" />
                <CheckListItem text="24/7 technical support and maintenance services" />
                <CheckListItem text="Customized security solutions for every budget" />
                <CheckListItem text="Latest technology with smartphone integration" />
              </ul>
              <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                Learn More About Us
              </button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src={aboutImage || "/placeholder.svg"}
                alt="Security Installation"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers Section */}
      <section id="offers" className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Offers</h2>
            <p className="max-w-2xl mx-auto">
              Take advantage of our limited-time offers on premium security
              systems. Professional installation included with all packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <OfferCard
              title="Basic CCTV Package"
              price="$1,595"
              features={[
                "4 x 6MP CCTV Cameras",
                "1TB Hard Drive Storage",
                "Mobile App Access",
                "Night Vision Capability",
                "Professional Installation",
              ]}
              popular={false}
            />
            <OfferCard
              title="Premium CCTV Package"
              price="$1,795"
              features={[
                "4 x 6MP IP CCTV Cameras",
                "2TB Hard Drive Storage",
                "Cloud Backup Option",
                "Advanced Motion Detection",
                "Professional Installation",
              ]}
              popular={true}
            />
            <OfferCard
              title="Ultimate 4K Package"
              price="$2,795"
              features={[
                "4 x 4K Ultra HD Cameras",
                "4TB Hard Drive Storage",
                "AI-Powered Detection",
                "Two-Way Audio",
                "Professional Installation",
              ]}
              popular={false}
            />
          </div>

          <div className="text-center mt-8 text-sm">
            * Terms and conditions apply. Installation includes standard setup.
            Additional charges may apply for complex installations.
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality security products from leading
              manufacturers.
            </p>
          </div>

          <ProductShowcase />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say about our services.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our security systems and
              services.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8">
                Have questions about our security solutions? Contact our team
                for a free consultation and quote. We're here to help you find
                the perfect security system for your needs.
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<FaPhone className="h-6 w-6" />}
                  title="Call Us"
                  line1="1300 123 456"
                  line2="Monday to Friday, 8am to 6pm"
                />
                <ContactInfo
                  icon={<FaPhone className="h-6 w-6" />}
                  title="Email Us"
                  line1="info@securetech.com.au"
                  line2="We'll respond within 24 hours"
                />
                <ContactInfo
                  icon={<FaPhone className="h-6 w-6" />}
                  title="Visit Us"
                  line1="123 Security Street, Sydney NSW 2000"
                  line2="By appointment only"
                />
              </div>
            </div>

            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">
                Request a Free Quote
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                Ready to secure your property?
              </h2>
              <p>Get a free consultation and quote today.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md">
                Get a Free Quote
              </button>
              <button className="px-4 py-2 border border-white text-white hover:bg-white/20 rounded-md">
                <FaPhone className="inline mr-2 h-4 w-4" /> Call Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper Components
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
      <div className="text-center">
        <div className="mx-auto bg-blue-700/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 border border-blue-700 text-blue-700 rounded-md text-sm hover:bg-blue-700/5">
          Learn More
        </button>
      </div>
    </div>
  );
}

function CheckListItem({ text }) {
  return (
    <li className="flex items-start">
      <div className="mr-3 bg-green-100 p-1 rounded-full">
        <FaCheck className="text-green-600 h-4 w-4" />
      </div>
      <span>{text}</span>
    </li>
  );
}

function OfferCard({ title, price, features, popular }) {
  return (
    <div
      className={`bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden relative ${
        popular ? "ring-2 ring-yellow-500" : ""
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-yellow-500 text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <div className="text-center mb-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-gray-500"> Installed*</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaChevronRight className="h-4 w-4 mr-2 text-blue-600" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-50">
        <button
          className={`w-full py-2 rounded-md ${
            popular
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-700 hover:bg-blue-800 text-white"
          }`}
        >
          Get This Offer
        </button>
      </div>
    </div>
  );
}

function ContactInfo({ icon, title, line1, line2 }) {
  return (
    <div className="flex items-start">
      <div className="bg-blue-600 p-3 rounded-full mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p>{line1}</p>
        <p className="text-sm text-blue-200">{line2}</p>
      </div>
    </div>
  );
}

export default HomePage;
