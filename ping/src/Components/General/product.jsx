// import { useState } from "react";
// import { FaCheck } from "react-icons/fa";
// import products from "../../constants/product_store";

// function ProductShowcase() {
//   const [category, setCategory] = useState("cameras");

//   // Debug: Check if products are loading
//   console.log("Loaded products:", products);

//   // Debug: Check if current category exists
//   console.log("Current category data:", products[category]);

//   // Safety check if products[category] is undefined
//   if (!products[category]) {
//     return <div>Error: No products found for category "{category}"</div>;
//   }

//   return (
//     <div>
//       <div className="flex justify-center mb-8">
//         <div className="inline-flex rounded-md shadow-sm" role="group">
//           <button
//             type="button"
//             className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
//               category === "cameras"
//                 ? "bg-blue-700 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-50"
//             }`}
//             onClick={() => setCategory("cameras")}
//           >
//             Cameras
//           </button>
//           <button
//             type="button"
//             className={`px-4 py-2 text-sm font-medium ${
//               category === "recorders"
//                 ? "bg-blue-700 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-50"
//             }`}
//             onClick={() => setCategory("recorders")}
//           >
//             Recorders
//           </button>
//           <button
//             type="button"
//             className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
//               category === "accessories"
//                 ? "bg-blue-700 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-50"
//             }`}
//             onClick={() => setCategory("accessories")}
//           >
//             Accessories
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products[category].map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
//           >
//             <div className="p-4 flex justify-center">
//               <div className="h-48 w-48 relative">
//                 <img
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   className="object-contain w-full h-full"
//                   onError={(e) => {
//                     e.target.src = `https://via.placeholder.com/200x200?text=${product.name.replace(
//                       " ",
//                       "+"
//                     )}`;
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="p-4 pt-0">
//               <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
//               <p className="text-blue-700 font-bold mb-2">{product.price}</p>
//               <ul className="text-sm text-gray-600 space-y-1">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <FaCheck className="mr-2 h-3 w-3 text-green-500" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="p-4 pt-0">
//               <button className="w-full px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700/5">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-8">
//         <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
//           View All Products
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductShowcase;
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import products from "../../constants/product_store";

function ProductShowcase() {
  const [category, setCategory] = useState("cameras");

  // Fallback image URL
  const fallbackImage =
    "https://flyinglocksmiths.com/wp-content/smush-webp/TFL_blog_security_cameras-e1557770076716.jpg.webp";

  // Handle undefined categories
  const categoryProducts = products[category] || [];

  return (
    <div>
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
                <button className="w-full px-4 py-2 border border-blue-700 text-blue-700 rounded-md hover:bg-blue-700/5">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Button */}
      <div className="text-center mt-8">
        <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default ProductShowcase;
