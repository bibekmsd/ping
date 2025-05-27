import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import products from "../../constants/product_store";
import Button from "../Reuseable/Buttons";

import clsx from "clsx";
function ProductShowcase() {
  const [category, setCategory] = useState("cameras");

  const fallbackImage =
    "https://flyinglocksmiths.com/wp-content/smush-webp/TFL_blog_security_cameras-e1557770076716.jpg.webp";

  const categoryProducts = products[category] || [];

  return (
    <div>
      {/* Category Tabs */}

      {/* Category Buttons */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          {["cameras", "recorders", "accessories"].map((cat, idx) => (
            <button
              key={cat}
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                idx === 0 ? "rounded-l-lg" : idx === 2 ? "rounded-r-lg" : ""
              } ${
                category === cat
                  ? "bg-blue-700 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>
      {/* Products Grid */}
      {categoryProducts.length === 0 ? (
        <div className="text-center text-gray-600">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="p-4 flex justify-center">
                <div className="h-48 w-48 relative">
                  <img
                    src={product.image || fallbackImage}
                    alt={product.name}
                    className="object-contain w-full h-full"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = fallbackImage;
                    }}
                  />
                </div>
              </div>
              <div className="p-4 pt-0">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-blue-700 font-bold mb-2">{product.price}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="mr-2 h-3 w-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 pt-0">
                <Button variant="outline" fullWidth>
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Products Button */}
      <div className="text-center mt-8">
        <Button variant="primary">View All Products</Button>
      </div>
    </div>
  );
}

export default ProductShowcase;
