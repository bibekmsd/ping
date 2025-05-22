import {
  servicesLinks,
  supportLinks,
  companyLinks,
  contactLinks,
} from "../../constants/constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-12 bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-md font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2">
            {servicesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-md font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            {contactLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-orange-500 transition"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
