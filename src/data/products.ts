
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  discount?: number;
  badge?: string;
  description: string;
  features: string[];
  ageRange: string;
}

export const products: Product[] = [
  // Building & Blocks Category
  {
    id: "1",
    name: "Building Blocks Castle Set",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
    category: "building",
    discount: 40,
    badge: "Bestseller",
    description: "Build your dream castle with 500+ colorful blocks! This comprehensive set encourages creativity and develops fine motor skills.",
    features: ["500+ pieces", "Compatible with major brands", "Safe materials", "Instruction guide included"],
    ageRange: "4-12 years"
  },
  {
    id: "9",
    name: "Mega Construction Truck Set",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1572368899320-0dad2eeb7028?w=500&q=80",
    category: "building",
    discount: 33,
    description: "Build realistic construction vehicles with working parts. Includes dump truck, crane, and excavator models.",
    features: ["3 vehicle models", "Moving parts", "800+ pieces", "Building instructions"],
    ageRange: "6+ years"
  },
  {
    id: "10",
    name: "Magnetic Building Tiles",
    price: 44.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1596461200677-34009f494b1e?w=500&q=80",
    category: "building",
    discount: 36,
    badge: "New",
    description: "Colorful magnetic tiles for endless 3D creations. Safe, strong magnets allow easy construction of buildings, vehicles, and more.",
    features: ["100 magnetic pieces", "Multiple shapes", "STEM learning", "Storage bag included"],
    ageRange: "3-8 years"
  },
  
  // Plush Toys Category
  {
    id: "2",
    name: "Rainbow Unicorn Plush Toy",
    price: 19.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1583582192106-f48d2e8c7a23?w=500&q=80",
    category: "plush",
    discount: 33,
    description: "Super soft and cuddly rainbow unicorn that's perfect for bedtime snuggles and imaginative play.",
    features: ["Ultra-soft material", "Machine washable", "Safe for all ages", "12 inches tall"],
    ageRange: "All ages"
  },
  {
    id: "11",
    name: "Giant Teddy Bear",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1551817958-20d68171d442?w=500&q=80",
    category: "plush",
    discount: 37,
    badge: "Popular",
    description: "Extra-large cuddly teddy bear that's perfect for hugs. Premium plush material with adorable face.",
    features: ["36 inches tall", "Super soft fur", "Safety tested", "Huggable design"],
    ageRange: "All ages"
  },
  {
    id: "12",
    name: "Dinosaur Plush Collection",
    price: 34.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80",
    category: "plush",
    discount: 30,
    description: "Set of 4 adorable plush dinosaurs including T-Rex, Triceratops, Stegosaurus, and Brachiosaurus.",
    features: ["4 dinosaur set", "Educational tags", "Soft materials", "Medium size 8-10 inches"],
    ageRange: "2+ years"
  },

  // Vehicles Category
  {
    id: "3",
    name: "RC Racing Car Pro",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    category: "vehicles",
    discount: 33,
    badge: "New",
    description: "High-speed remote control car with advanced features and long battery life for hours of racing fun!",
    features: ["20+ mph speed", "Rechargeable battery", "360° stunts", "Range: 100 feet"],
    ageRange: "6+ years"
  },
  {
    id: "13",
    name: "Monster Truck Rally Pack",
    price: 54.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&q=80",
    category: "vehicles",
    discount: 31,
    badge: "Bestseller",
    description: "Set of 3 monster trucks with oversized wheels for extreme terrain adventures. Crash-resistant design.",
    features: ["3 trucks included", "All-terrain wheels", "Pull-back action", "Durable construction"],
    ageRange: "4+ years"
  },
  {
    id: "14",
    name: "Electric Train Set Deluxe",
    price: 69.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&q=80",
    category: "vehicles",
    discount: 30,
    description: "Complete electric train set with tracks, station, and accessories. Realistic sounds and working lights.",
    features: ["20+ track pieces", "Sound effects", "LED lights", "Multiple train cars"],
    ageRange: "5+ years"
  },

  // Educational Category
  {
    id: "4",
    name: "Educational Science Kit",
    price: 34.99,
    originalPrice: 54.99,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80",
    category: "educational",
    discount: 36,
    description: "50+ exciting experiments to spark curiosity and teach fundamental science concepts in a fun, hands-on way.",
    features: ["50+ experiments", "Safe materials", "Full guide book", "STEM certified"],
    ageRange: "8-14 years"
  },
  {
    id: "15",
    name: "Coding Robot Starter Kit",
    price: 59.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80",
    category: "educational",
    discount: 33,
    badge: "STEM",
    description: "Learn programming basics with this interactive robot. Control movements, sounds, and lights through simple coding.",
    features: ["App-controlled", "10+ activities", "No screen required option", "Ages 6+"],
    ageRange: "6-12 years"
  },
  {
    id: "16",
    name: "Solar System Planetarium Kit",
    price: 29.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&q=80",
    category: "educational",
    discount: 33,
    description: "Build your own solar system model with this engaging astronomy kit. Includes glow-in-the-dark planets.",
    features: ["All 8 planets", "Glow in dark", "Educational booklet", "Easy assembly"],
    ageRange: "8+ years"
  },

  // Dolls Category
  {
    id: "5",
    name: "Princess Doll Collection",
    price: 24.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1578072379537-a1f4d9e8f75f?w=500&q=80",
    category: "dolls",
    discount: 37,
    description: "Beautiful princess doll with elegant dress and accessories. Perfect for imaginative role-play adventures.",
    features: ["Multiple outfits", "Brushable hair", "Articulated joints", "Accessories included"],
    ageRange: "3+ years"
  },
  {
    id: "17",
    name: "Fashion Designer Doll Studio",
    price: 44.99,
    originalPrice: 64.99,
    image: "https://images.unsplash.com/photo-1586219333119-942a0b5c7e9a?w=500&q=80",
    category: "dolls",
    discount: 31,
    badge: "New",
    description: "Complete fashion studio with doll, design table, fabric swatches, and accessories for endless fashion creativity.",
    features: ["Doll included", "10+ outfits", "Design tools", "Fashion accessories"],
    ageRange: "5+ years"
  },
  {
    id: "18",
    name: "Baby Care Doll Set",
    price: 32.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1582142306909-195724d249f6?w=500&q=80",
    category: "dolls",
    discount: 34,
    description: "Realistic baby doll with feeding accessories, diaper bag, and care items. Teaches nurturing and responsibility.",
    features: ["Lifelike features", "Feeding accessories", "Diaper bag", "Soft body"],
    ageRange: "3+ years"
  },

  // Puzzles Category
  {
    id: "6",
    name: "Wooden Puzzle Adventure",
    price: 14.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80",
    category: "puzzles",
    discount: 40,
    badge: "Eco-Friendly",
    description: "Eco-friendly wooden puzzle with vibrant colors and smooth edges. Great for developing problem-solving skills.",
    features: ["100 pieces", "Non-toxic paint", "Sustainable wood", "Storage box included"],
    ageRange: "5-10 years"
  },
  {
    id: "19",
    name: "3D Crystal Castle Puzzle",
    price: 27.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=500&q=80",
    category: "puzzles",
    discount: 30,
    badge: "New",
    description: "Stunning 3D crystal puzzle that lights up when completed. Challenging and beautiful display piece.",
    features: ["105 pieces", "LED lights", "3D design", "Display stand"],
    ageRange: "12+ years"
  },
  {
    id: "20",
    name: "World Map Floor Puzzle",
    price: 22.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1611329532992-0b62fd3a862e?w=500&q=80",
    category: "puzzles",
    discount: 34,
    description: "Large floor puzzle featuring colorful world map with country names and landmarks. Educational and fun!",
    features: ["200 pieces", "36x24 inches", "Educational", "Durable cardboard"],
    ageRange: "6+ years"
  },

  // Action Figures Category
  {
    id: "7",
    name: "Action Hero Figure Set",
    price: 44.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&q=80",
    category: "action",
    discount: 36,
    description: "Complete action figure set with multiple characters, weapons, and accessories for epic adventures.",
    features: ["6 figures included", "20+ accessories", "Highly detailed", "Collectible"],
    ageRange: "6+ years"
  },
  {
    id: "21",
    name: "Space Explorer Action Set",
    price: 52.99,
    originalPrice: 74.99,
    image: "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=500&q=80",
    category: "action",
    discount: 29,
    badge: "Popular",
    description: "Space-themed action figures with spacecraft, alien figures, and astronaut heroes. Build your own space adventures!",
    features: ["4 astronauts", "2 aliens", "Spacecraft", "Space accessories"],
    ageRange: "5+ years"
  },
  {
    id: "22",
    name: "Ninja Warrior Battle Pack",
    price: 37.99,
    originalPrice: 54.99,
    image: "https://images.unsplash.com/photo-1601524605364-a35e8d5d6640?w=500&q=80",
    category: "action",
    discount: 31,
    description: "Elite ninja warrior figures with martial arts weapons and training accessories. Poseable and detailed.",
    features: ["5 ninja figures", "15+ weapons", "Training equipment", "Articulated"],
    ageRange: "6+ years"
  },

  // Musical Toys Category
  {
    id: "8",
    name: "Musical Piano Mat",
    price: 27.99,
    originalPrice: 44.99,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=500&q=80",
    category: "musical",
    discount: 38,
    description: "Giant piano mat with multiple instrument sounds and demo songs. Dance and play music with your feet!",
    features: ["8 instruments", "10 demo songs", "Record function", "Volume control"],
    ageRange: "3-8 years"
  },
  {
    id: "23",
    name: "Kids Karaoke Machine",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&q=80",
    category: "musical",
    discount: 29,
    badge: "Bestseller",
    description: "Complete karaoke system with 2 microphones, LED lights, and Bluetooth connectivity. Sing along to your favorite songs!",
    features: ["2 microphones", "Bluetooth enabled", "LED light show", "Echo control"],
    ageRange: "5+ years"
  },
  {
    id: "24",
    name: "Wooden Xylophone Set",
    price: 18.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=500&q=80",
    category: "musical",
    discount: 37,
    badge: "Eco-Friendly",
    description: "Beautiful wooden xylophone with rainbow-colored keys. Comes with two mallets and song cards.",
    features: ["8 colored keys", "2 mallets", "Song cards", "Natural wood"],
    ageRange: "2-6 years"
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);
