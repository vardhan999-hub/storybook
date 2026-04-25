import { ProductCard } from "./ProductCard";

/** @type { import('@storybook/react').Meta } */
const meta = {
  title: "Design System/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible product card supporting vertical and horizontal layouts, optional badges, discount pricing, star ratings, and a one-click cart action. Fits e-commerce, portfolio, or catalog interfaces.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Product name",
    },
    price: {
      control: { type: "number", min: 0, step: 0.01 },
      description: "Current price (USD)",
    },
    originalPrice: {
      control: { type: "number", min: 0, step: 0.01 },
      description: "Original price for discount display (optional)",
    },
    category: {
      control: "text",
      description: "Product category label",
    },
    description: {
      control: "text",
      description: "Short product description",
    },
    imageSrc: {
      control: "text",
      description: "Image URL (leave empty to show placeholder)",
    },
    badge: {
      control: "text",
      description: "Badge label (e.g. 'New', 'Bestseller'). Leave empty to hide.",
    },
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.5 },
      description: "Star rating (0 hides the row)",
    },
    reviewCount: {
      control: "number",
      description: "Number of reviews",
    },
    layout: {
      control: { type: "radio" },
      options: ["vertical", "horizontal"],
      description: "Card layout direction",
    },
    onAddToCart: { action: "add-to-cart" },
    onWishlist: { action: "wishlist" },
  },
};

export default meta;

/* ─── BASE STORY ─── */
export const Default = {
  args: {
    name: "Ceramic Espresso Set",
    price: 64.99,
    category: "Kitchen",
    description: "Handcrafted stoneware for the ritual coffee drinker. Dishwasher safe.",
    rating: 4.5,
    reviewCount: 128,
    layout: "vertical",
  },
};

export const WithDiscount = {
  args: {
    name: "Merino Wool Sweater",
    price: 79.0,
    originalPrice: 130.0,
    category: "Apparel",
    description: "Ethically sourced, 100% merino. Naturally temperature-regulating.",
    rating: 4,
    reviewCount: 312,
    badge: "Sale",
    layout: "vertical",
  },
};

export const NewArrival = {
  args: {
    name: "Leather Field Notes Cover",
    price: 44.0,
    category: "Stationery",
    description: "Aged full-grain leather sleeve. Holds two Field Notes booklets.",
    badge: "New",
    rating: 0,
    layout: "vertical",
  },
};

export const HorizontalLayout = {
  args: {
    name: "Oak Standing Desk",
    price: 549.0,
    originalPrice: 699.0,
    category: "Furniture",
    description:
      "Solid white oak top. Electric height adjustment from 70–120 cm. Ships flat in two boxes.",
    rating: 5,
    reviewCount: 89,
    layout: "horizontal",
  },
};

export const NoRating = {
  args: {
    name: "Brass Candle Holder",
    price: 28.0,
    category: "Home Decor",
    description: "Hand-turned solid brass. Fits standard taper candles.",
    rating: 0,
    layout: "vertical",
  },
};

/* ─── GRID SHOWCASE ─── */
export const ProductGrid = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 280px)",
        gap: "2rem",
      }}
    >
      <ProductCard
        name="Ceramic Espresso Set"
        price={64.99}
        category="Kitchen"
        description="Handcrafted stoneware for the ritual coffee drinker."
        rating={4.5}
        reviewCount={128}
        badge="Bestseller"
      />
      <ProductCard
        name="Merino Wool Sweater"
        price={79.0}
        originalPrice={130.0}
        category="Apparel"
        description="Ethically sourced, 100% merino. Naturally temperature-regulating."
        rating={4}
        reviewCount={312}
        badge="Sale"
      />
      <ProductCard
        name="Leather Field Notes Cover"
        price={44.0}
        category="Stationery"
        description="Aged full-grain leather sleeve. Holds two Field Notes booklets."
        badge="New"
        rating={0}
      />
    </div>
  ),
  parameters: {
    layout: "centered",
    docs: {
      description: { story: "Three cards in a 3-column grid — representative of a real catalog page." },
    },
  },
};
