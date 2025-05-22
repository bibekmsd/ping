//* product store .. Later fetch and update from database by admin..
export const products = {
  cameras: [
    {
      id: 1,
      name: "Ultra HD 4K Dome Camera",
      image: "/placeholder-product.jpg",
      price: "$249.99",
      features: [
        "4K Resolution",
        "Night Vision",
        "Wide Angle Lens",
        "Weatherproof",
      ],
    },
    {
      id: 2,
      name: "6MP Bullet Camera",
      image: "/placeholder-product.jpg",
      price: "$199.99",
      features: [
        "6MP Resolution",
        "IR Night Vision",
        "Motion Detection",
        "IP67 Rated",
      ],
    },
    {
      id: 3,
      name: "PTZ Security Camera",
      image: "/placeholder-product.jpg",
      price: "$349.99",
      features: [
        "Pan/Tilt/Zoom",
        "Auto Tracking",
        "360° Coverage",
        "Two-Way Audio",
      ],
    },
    {
      id: 4,
      name: "Wireless Indoor Camera",
      image: "/placeholder-product.jpg",
      price: "$129.99",
      features: [
        "1080p HD",
        "Wi-Fi Connectivity",
        "Motion Alerts",
        "Night Vision",
      ],
    },
  ],
  recorders: [
    {
      id: 1,
      name: "8-Channel NVR",
      image: "/placeholder-product.jpg",
      price: "$299.99",
      features: ["8 Channels", "4K Support", "2TB Storage", "Remote Viewing"],
    },
    {
      id: 2,
      name: "16-Channel DVR",
      image: "/placeholder-product.jpg",
      price: "$399.99",
      features: [
        "16 Channels",
        "H.265 Compression",
        "4TB Storage",
        "HDMI Output",
      ],
    },
    {
      id: 3,
      name: "4-Channel Wireless NVR",
      image: "/placeholder-product.jpg",
      price: "$249.99",
      features: [
        "4 Channels",
        "Wi-Fi Connectivity",
        "1TB Storage",
        "Mobile App",
      ],
    },
    {
      id: 4,
      name: "32-Channel Enterprise NVR",
      image: "/placeholder-product.jpg",
      price: "$899.99",
      features: ["32 Channels", "RAID Support", "8TB Storage", "AI Analytics"],
    },
  ],
  accessories: [
    {
      id: 1,
      name: "4TB Surveillance Hard Drive",
      image: "/placeholder-product.jpg",
      price: "$149.99",
      features: [
        "4TB Capacity",
        "Designed for 24/7 Operation",
        "Low Power Consumption",
        "3-Year Warranty",
      ],
    },
    {
      id: 2,
      name: "PoE Network Switch",
      image: "/placeholder-product.jpg",
      price: "$89.99",
      features: [
        "8 PoE Ports",
        "120W Power Budget",
        "Plug and Play",
        "Metal Housing",
      ],
    },
    {
      id: 3,
      name: "CCTV Power Supply Box",
      image: "/placeholder-product.jpg",
      price: "$59.99",
      features: [
        "12V DC Output",
        "4 Channels",
        "Short Circuit Protection",
        "LED Indicators",
      ],
    },
    {
      id: 4,
      name: "CCTV Cable Kit",
      image: "/placeholder-product.jpg",
      price: "$39.99",
      features: [
        "100ft Cable",
        "Pre-made Connectors",
        "Weather Resistant",
        "Signal Booster",
      ],
    },
  ],
};

export default products;
