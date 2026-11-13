// ---------------------------------------------------------------
// AUTHORITATIVE LIVE DATABASE STORAGE SYSTEM & DEFAULT CATALOG
// ---------------------------------------------------------------
const DB_STORAGE_KEY = 'radha_furniture_custom_products_v1';

// const DEFAULT_CATALOG_PRODUCTS = [
//   {
//     id: 'rf-101',
//     title: 'Royal Maharaja Hand Carved Teak Wood King Bed',
//     category: 'bedroom',
//     categoryName: 'Bedroom Furniture',
//     price: 48000,
//     originalPrice: 62000,
//     discount: '22% OFF',
//     woodType: 'Teak Wood (Sagwan)',
//     dimensions: '78" L x 72" W x 48" H',
//     finish: ['Standard Polish', 'Walnut Gloss', 'Honey Matte', 'Dark Mahogany'],
//     inStock: true,
//     isFeatured: true,
//     rating: 5.0,
//     reviewCount: 38,
//     image: 'assets/images/images.png',
//     images: ['assets/images/images.png'],
//     description: 'Masterpiece handcrafted king size bed made from seasoned Grade-A Teak wood. Features intricate royal carvings on the headboard and footboard with hydraulic box storage.',
//     warranty: '10 Years Wood & Termite Warranty'
//   },
//   {
//     id: 'rf-102',
//     title: 'Solid Sheesham Wood Queen Bed with Hydraulic Storage',
//     category: 'bedroom',
//     categoryName: 'Bedroom Furniture',
//     price: 36000,
//     originalPrice: 45000,
//     discount: '20% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: '78" L x 60" W x 42" H',
//     finish: ['Standard Polish', 'Warm Honey', 'Walnut Brown'],
//     inStock: true,
//     isFeatured: true,
//     rating: 4.9,
//     reviewCount: 29,
//     image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80'],
//     description: '100% solid Sheesham wood queen bed with strong hydraulic lift storage. Termite proof, natural wood grain finish.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-103',
//     title: 'Luxury Carved Wooden Bed (Palang)',
//     category: 'bedroom',
//     categoryName: 'Bedroom Furniture',
//     price: 32000,
//     originalPrice: 39000,
//     discount: '18% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: '75" L x 60" W x 38" H',
//     finish: ['Standard Polish', 'Teak Matte'],
//     inStock: true,
//     isFeatured: false,
//     rating: 4.8,
//     reviewCount: 16,
//     image: 'https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80'],
//     description: 'Traditional Indian style palang double bed, crafted by master artisans in Kekri workshop with high durability.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-104',
//     title: 'Royal Solid Sheesham 3-Door Wardrobe (Almari)',
//     category: 'bedroom',
//     categoryName: 'Bedroom Furniture',
//     price: 52000,
//     originalPrice: 65000,
//     discount: '20% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: '78" H x 54" W x 22" D',
//     finish: ['Walnut Gloss', 'Honey Polish'],
//     inStock: true,
//     isFeatured: false,
//     rating: 4.9,
//     reviewCount: 22,
//     image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=800&q=80'],
//     description: 'Spacious heavy solid Sheesham wood wardrobe almari with locker, internal drawers, shelves, and authentic brass hinges.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-105',
//     title: 'Royal Maharaja Hand Carved Sofa Set (3+1+1)',
//     category: 'living',
//     categoryName: 'Living Room',
//     price: 65000,
//     originalPrice: 85000,
//     discount: '24% OFF',
//     woodType: 'Teak Wood (Sagwan)',
//     dimensions: '3-Seater: 76" W, 1-Seater: 34" W',
//     finish: ['Royal Gold Touch', 'Dark Teak', 'Honey Gloss'],
//     inStock: true,
//     isFeatured: true,
//     rating: 5.0,
//     reviewCount: 44,
//     image: 'assets/images/images.png',
//     images: ['assets/images/images.png'],
//     description: 'Authentic royal Rajasthani carved sofa set with high-density foam cushioning, rich velvet upholstery, and floral carvings.',
//     warranty: '10 Years Wood & Structural Warranty'
//   },
//   {
//     id: 'rf-106',
//     title: 'Modern Sheesham Wood L-Shape Corner Sofa',
//     category: 'living',
//     categoryName: 'Living Room',
//     price: 54000,
//     originalPrice: 68000,
//     discount: '20% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: '102" L x 68" W x 32" H',
//     finish: ['Standard Polish', 'Walnut Brown'],
//     inStock: true,
//     isFeatured: true,
//     rating: 4.9,
//     reviewCount: 31,
//     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'],
//     description: 'Contemporary L-shaped sectional wooden sofa crafted with 100% solid seasoned Sheesham and premium washable cushions.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-108',
//     title: 'Sacred Carved Teak Wood Pooja Mandir with Drawers & Bells',
//     category: 'mandir',
//     categoryName: 'Pooja Mandir',
//     price: 28000,
//     originalPrice: 35000,
//     discount: '20% OFF',
//     woodType: 'Teak Wood (Sagwan)',
//     dimensions: '48" H x 32" W x 20" D',
//     finish: ['Teak Gold Accent', 'Traditional Sheesham Finish'],
//     inStock: true,
//     isFeatured: true,
//     rating: 5.0,
//     reviewCount: 52,
//     image: 'assets/images/mandir.jpg',
//     images: ['assets/images/mandir.jpg'],
//     description: 'Auspicious home temple with traditional shikhar dome, hand-carved pillars, brass bells, pull-out bhog tray, and storage cabinet.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-109',
//     title: 'Solid Sheesham Wood Wall Hanging Temple Mandir',
//     category: 'mandir',
//     categoryName: 'Pooja Mandir',
//     price: 14500,
//     originalPrice: 18000,
//     discount: '19% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: '30" H x 22" W x 12" D',
//     finish: ['Honey Natural Polish'],
//     inStock: true,
//     isFeatured: false,
//     rating: 4.8,
//     reviewCount: 19,
//     image: 'assets/images/mandir.jpg',
//     images: ['assets/images/mandir.jpg'],
//     description: 'Compact space-saving wall mounted wooden temple for apartments and flats, made from 100% seasoned Sheesham wood.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-110',
//     title: '6-Seater Royal Sheesham Dining Table Set with Cushioned Chairs',
//     category: 'dining',
//     categoryName: 'Dining Sets',
//     price: 45000,
//     originalPrice: 58000,
//     discount: '22% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: 'Table: 68" L x 36" W x 30" H',
//     finish: ['Warm Honey Gloss', 'Walnut Brown'],
//     inStock: true,
//     isFeatured: true,
//     rating: 4.9,
//     reviewCount: 37,
//     image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80'],
//     description: 'Solid Sheesham wood dining table with 6 comfortable cushioned dining chairs designed for royal family gatherings.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-111',
//     title: '4-Seater Compact Solid Wood Dining Table Set',
//     category: 'dining',
//     categoryName: 'Dining Sets',
//     price: 28000,
//     originalPrice: 34000,
//     discount: '18% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: 'Table: 46" L x 34" W x 30" H',
//     finish: ['Standard Polish', 'Teak Matte'],
//     inStock: true,
//     isFeatured: false,
//     rating: 4.8,
//     reviewCount: 20,
//     image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80'],
//     description: 'Space-efficient 4-seater dining set for modern dining rooms, crafted with 100% termite proof solid wood.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-112',
//     title: 'Handcrafted Sheesham Wood Arm Chair / Aaram Kursi',
//     category: 'living',
//     categoryName: 'Living Room',
//     price: 11500,
//     originalPrice: 14000,
//     discount: '18% OFF',
//     woodType: 'Sheesham Wood',
//     dimensions: '38" H x 26" W x 28" D',
//     finish: ['Honey Natural Polish'],
//     inStock: true,
//     isFeatured: false,
//     rating: 4.8,
//     reviewCount: 14,
//     image: 'https://images.unsplash.com/photo-1580481077195-731da06f4774?auto=format&fit=crop&w=800&q=80',
//     images: ['https://images.unsplash.com/photo-1580481077195-731da06f4774?auto=format&fit=crop&w=800&q=80'],
//     description: 'Relaxing royal wooden chair with traditional carved arms and ergonomic lumbar support.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'rf-113',
//     title: 'Handcrafted Wooden Jharokha & Brass Art Mirror',
//     category: 'handicraft',
//     categoryName: 'Indian Handicrafts',
//     price: 6500,
//     originalPrice: 8500,
//     discount: '23% OFF',
//     woodType: 'Sheesham & Brass',
//     dimensions: '28" H x 20" W x 3" D',
//     finish: ['Antique Distressed Polish'],
//     inStock: true,
//     isFeatured: true,
//     rating: 4.9,
//     reviewCount: 41,
//     image: 'assets/images/Heritage_logo.jpeg',
//     images: ['assets/images/Heritage_logo.jpeg'],
//     description: 'Traditional Rajasthani wall jharokha with antique brass work and mirror, handcrafted by skilled artisans.',
//     warranty: '10 Years Wood Warranty'
//   },
//   {
//     id: 'fab-101',
//     title: 'Heavy Aluminium Patio Sliding Door (Domal Section)',
//     category: 'doors',
//     categoryName: 'Aluminium Doors',
//     price: 0,
//     rateUnit: '₹480/sq.ft',
//     dimensions: 'Custom Sizes as per Site',
//     woodType: 'Architectural Aluminium Alloy',
//     inStock: true,
//     isFeatured: false,
//     rating: 4.9,
//     image: 'assets/images/products/door-patio-1.jpg',
//     images: ['assets/images/products/door-patio-1.jpg'],
//     description: 'Heavy duty soundproof sliding door system with toughened glass.',
//     warranty: '10 Years Color & Structural Guarantee'
//   },
//   {
//     id: 'fab-102',
//     title: 'Aluminium 3-Track Sliding Window with Mosquito Mesh',
//     category: 'windows',
//     categoryName: 'Aluminium Windows',
//     price: 0,
//     rateUnit: '₹340/sq.ft',
//     dimensions: 'Custom Site Sizing',
//     woodType: 'Powder Coated Aluminium',
//     inStock: true,
//     isFeatured: false,
//     rating: 4.8,
//     image: 'assets/images/products/window-slider-1.jpg',
//     images: ['assets/images/products/window-slider-1.jpg'],
//     description: 'Weatherproof 3-track aluminium sliding window with stainless steel mosquito net.',
//     warranty: '10 Years Warranty'
//   },
//   {
//     id: 'fab-103',
//     title: 'Modern Laser Cut Steel Main Entrance Gate',
//     category: 'gates',
//     categoryName: 'Gates',
//     price: 0,
//     rateUnit: '₹620/sq.ft',
//     dimensions: 'Custom Made to Order',
//     woodType: 'SS 304 / Mild Steel',
//     inStock: true,
//     isFeatured: false,
//     rating: 5.0,
//     image: 'assets/images/products/gate-laser-cut-1.jpg',
//     images: ['assets/images/products/gate-laser-cut-1.jpg'],
//     description: 'Custom CNC laser-cut decorative designer main gate with rust-resistant epoxy coat.',
//     warranty: '15 Years Anti-Rust Guarantee'
//   },
//   {
//     id: 'fab-104',
//     title: 'Toughened Glass Balcony Railing with SS 304 Spigots',
//     category: 'railings',
//     categoryName: 'Railings',
//     price: 0,
//     rateUnit: '₹750/sq.ft',
//     dimensions: 'Per Running Foot / Square Foot',
//     woodType: '12mm Toughened Glass & SS 304',
//     inStock: true,
//     isFeatured: false,
//     rating: 4.9,
//     image: 'assets/images/products/railing-glass-balcony-1.jpg',
//     images: ['assets/images/products/railing-glass-balcony-1.jpg'],
//     description: 'Frameless glass balcony and staircase railing with heavy grade stainless steel hardware.',
//     warranty: '10 Years Guarantee'
//   }
// ];

const PRODUCTS_DATA = (typeof window !== 'undefined' && Array.isArray(window.PRODUCTS_DATA) && window.PRODUCTS_DATA.length > 0)
  ? window.PRODUCTS_DATA 
  : DEFAULT_CATALOG_PRODUCTS;

if (typeof window !== 'undefined') {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
}

function getLiveCatalogDatabase() {
  try {
    const raw = localStorage.getItem(DB_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {}

  // If database is not yet initialized in localStorage, initialize it with all catalog products
  try {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(DEFAULT_CATALOG_PRODUCTS));
  } catch (e) {}
  return [...DEFAULT_CATALOG_PRODUCTS];
}

function getProductById(id) {
  const list = getLiveCatalogDatabase();
  return list.find(p => p.id === id || p._id === id);
}

function getFeaturedProducts() {
  const list = getLiveCatalogDatabase();
  const fabricationCats = ['windows', 'doors', 'gates', 'mirrors', 'partitions', 'railings', 'shower', 'aluminium', 'steel-work'];
  return list.filter(p => {
    if (!p.isFeatured) return false;
    const cat = (p.category || '').toLowerCase().trim();
    const catName = (p.categoryName || '').toLowerCase();
    const isFab = fabricationCats.includes(cat) || cat.includes('aluminium') || cat.includes('aluminum') || cat.includes('steel') || catName.includes('aluminium') || catName.includes('steel');
    return !isFab;
  });
}

function getProductsByCategory(cat) {
  const list = getLiveCatalogDatabase();
  if (!cat || cat === 'all') return list;
  return list.filter(p => p.category === cat);
}

// Global catalog reference (dynamically gets latest live database)
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'productsData', {
    get() {
      return getLiveCatalogDatabase();
    },
    configurable: true
  });
}
