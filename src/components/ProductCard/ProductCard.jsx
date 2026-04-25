import styles from "./ProductCard.module.css";
import { Button } from "../Button/Button";


export const ProductCard = ({
  name = "Product Name",
  price = 49.99,
  originalPrice,
  category = "Category",
  description = "A short product description.",
  imageSrc,
  badge,
  rating = 0,
  reviewCount = 0,
  onAddToCart,
  onWishlist,
  layout = "vertical",
  ...props
}) => {
  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={i < Math.round(rating) ? styles.starFilled : styles.starEmpty}
      aria-hidden="true"
    >
      ★
    </span>
  ));

  return (
    <article
      className={[styles.card, styles[layout]].filter(Boolean).join(" ")}
      {...props}
    >
      {/* IMAGE SECTION */}
      <div className={styles.imageWrapper}>
        {imageSrc ? (
          <img src={imageSrc} alt={name} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.placeholderText}>{category.charAt(0)}</span>
          </div>
        )}
        {badge && <span className={styles.badge}>{badge}</span>}
        {discount && (
          <span className={styles.discountBadge}>−{discount}%</span>
        )}
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <p className={styles.category}>{category}</p>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>

        {/* RATING */}
        {rating > 0 && (
          <div className={styles.ratingRow}>
            <span className={styles.stars}>{stars}</span>
            <span className={styles.reviewCount}>({reviewCount})</span>
          </div>
        )}

        {/* PRICE */}
        <div className={styles.priceRow}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          {originalPrice && (
            <span className={styles.originalPrice}>${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {/* ACTIONS */}
        <div className={styles.actions}>
          <Button
            variant="primary"
            size="medium"
            label="Add to Cart"
            onClick={onAddToCart}
          />
          <button
            className={styles.wishlistBtn}
            onClick={onWishlist}
            aria-label="Add to wishlist"
            title="Wishlist"
          >
            ♡
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
