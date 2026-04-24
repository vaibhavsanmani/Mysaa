import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1,  name: "Classic Hoodie",       brand: "Nordvik",  description: "Premium heavyweight fleece hoodie built for everyday comfort. Relaxed fit with a kangaroo pocket and adjustable drawstring hood.", price: 84,  originalPrice: 120, rating: 4.9, reviews: 312, image: "https://picsum.photos/600/400?random=1",  sizes: ["XS","S","M","L","XL","XXL"], tag: "Sale" },
  { id: 2,  name: "Stylish Sneakers",      brand: "Stridex",  description: "Trendy sneakers engineered for maximum comfort. Breathable mesh upper with cloud-foam insole for all-day wear.",              price: 200, originalPrice: null, rating: 4.7, reviews: 204, image: "https://picsum.photos/600/400?random=2",  sizes: ["6","7","8","9","10","11"],    tag: "New" },
  { id: 3,  name: "Floral Midi Dress",     brand: "Avaré",    description: "Light, breezy midi dress with a delicate floral print. Perfect for summer outings and casual evenings.",                      price: 65,  originalPrice: 90,  rating: 4.8, reviews: 89,  image: "https://picsum.photos/600/400?random=3",  sizes: ["XS","S","M","L"],            tag: "Sale" },
  { id: 4,  name: "Structured Tote Bag",   brand: "Lúmiere", description: "Timeless vegan leather tote with gold-tone hardware. Roomy interior with a zip compartment and detachable pouch.",             price: 110, originalPrice: null, rating: 4.9, reviews: 156, image: "https://picsum.photos/600/400?random=4",  sizes: ["One Size"],                  tag: null  },
  { id: 5,  name: "Linen Oversized Blazer",brand: "Nordvik",  description: "Relaxed-fit linen blazer with notch lapels. A versatile layer that elevates any look from desk to dinner.",                   price: 175, originalPrice: 220, rating: 4.6, reviews: 67,  image: "https://picsum.photos/600/400?random=5",  sizes: ["XS","S","M","L","XL"],       tag: "Sale" },
  { id: 6,  name: "Cloud Foam Sneakers",   brand: "Stridex",  description: "Ultra-lightweight running shoe with responsive cushioning and a sock-like knit upper that molds to your foot.",                price: 140, originalPrice: 200, rating: 4.8, reviews: 301, image: "https://picsum.photos/600/400?random=6",  sizes: ["6","7","8","9","10"],         tag: "Sale" },
  { id: 7,  name: "Gold Ring Set",         brand: "Lúmiere", description: "A curated set of three stackable 18K gold-plated rings. Mix, match, and layer for a personalised jewellery look.",             price: 45,  originalPrice: null, rating: 4.9, reviews: 410, image: "https://picsum.photos/600/400?random=7",  sizes: ["6","7","8","9"],              tag: "New" },
  { id: 8,  name: "Aviator Sunglasses",    brand: "Avaré",    description: "Classic aviator frames with polarised UV400 lenses. Lightweight stainless steel temple arms for a secure fit.",                price: 55,  originalPrice: 80,  rating: 4.7, reviews: 188, image: "https://picsum.photos/600/400?random=8",  sizes: ["One Size"],                  tag: "Sale" },
  { id: 9,  name: "Straw Sun Hat",         brand: "Avaré",    description: "Wide-brim woven sun hat with a grosgrain ribbon trim. UPF 50+ rated to keep you cool and protected all summer.",              price: 38,  originalPrice: null, rating: 4.5, reviews: 73,  image: "https://picsum.photos/600/400?random=9",  sizes: ["S/M","L/XL"],                tag: null  },
  { id: 10, name: "Block Heel Sandals",    brand: "Stridex",  description: "Elegant block-heel sandals with an adjustable ankle strap. Cushioned footbed for comfort that lasts from morning to midnight.", price: 90,  originalPrice: 130, rating: 4.8, reviews: 142, image: "https://picsum.photos/600/400?random=10", sizes: ["5","6","7","8","9"],          tag: "Sale" },
];

const COLORS = ["#1a1a2e","#6b7280","#f0ede8","#dc2626","#2563eb"];

export default function ProductDetails({ id: propId }) {
  const { id: paramId } = useParams?.() ?? {};
  const id = propId ?? paramId;

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px", fontFamily: "'DM Sans', sans-serif" }}>
        <p style={{ fontSize: 18, color: "#6b6570" }}>Product not found</p>
        <Link to="/" style={{ color: "#1a1a2e", marginTop: 12, display: "inline-block" }}>← Back to shop</Link>
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  function handleAddToCart() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  const styles = {
    page: { fontFamily: "'DM Sans', sans-serif", background: "#f8f7f4", minHeight: "100vh", maxWidth: 430, margin: "0 auto" },
    topbar: { display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "#fff", borderBottom: "0.5px solid #e8e4df", position: "sticky", top: 0, zIndex: 10 },
    iconBtn: { width: 36, height: 36, borderRadius: "50%", background: "#f8f7f4", border: "0.5px solid #e8e4df", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, fontSize: 16 },
    imgWrap: { position: "relative", background: "#f0ede8", height: 320, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" },
    img: { width: "100%", height: "100%", objectFit: "cover" },
    saleBadge: { position: "absolute", top: 14, left: 14, background: "#dc2626", color: "#fff", fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 6 },
    newBadge: { position: "absolute", top: 14, left: 14, background: "#c084fc", color: "#fff", fontSize: 11, fontWeight: 500, padding: "4px 10px", borderRadius: 6 },
    card: { background: "#fff", borderRadius: "24px 24px 0 0", marginTop: -20, position: "relative", zIndex: 2, padding: "20px 18px 40px" },
    brandRow: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 },
    brand: { fontSize: 11, fontWeight: 500, color: "#a09aa8", textTransform: "uppercase", letterSpacing: "1.5px" },
    stars: { display: "flex", alignItems: "center", gap: 1, fontSize: 12, color: "#e8c547" },
    ratingVal: { fontSize: 12, color: "#a09aa8", marginLeft: 4 },
    name: { fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, lineHeight: 1.25, marginBottom: 8 },
    desc: { fontSize: 14, color: "#6b6570", lineHeight: 1.6, marginBottom: 16 },
    priceRow: { display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 },
    priceNow: { fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#1a1a2e" },
    priceWas: { fontSize: 14, color: "#a09aa8", textDecoration: "line-through" },
    priceSave: { fontSize: 12, fontWeight: 500, color: "#dc2626", background: "#fee2e2", padding: "3px 8px", borderRadius: 6 },
    label: { fontSize: 11, fontWeight: 500, color: "#a09aa8", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 10 },
    sizeRow: { display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" },
    sizeChip: (active, out) => ({ padding: "8px 16px", borderRadius: 50, border: `0.5px solid ${active ? "#1a1a2e" : "#e8e4df"}`, fontSize: 13, cursor: out ? "default" : "pointer", background: active ? "#1a1a2e" : "#fff", color: active ? "#fff" : out ? "#e8e4df" : "#6b6570", textDecoration: out ? "line-through" : "none", transition: "all 0.15s" }),
    colorRow: { display: "flex", gap: 10, marginBottom: 20, alignItems: "center" },
    colorDot: (color, active) => ({ width: 28, height: 28, borderRadius: "50%", background: color, cursor: "pointer", border: `2px solid ${active ? "#1a1a2e" : "transparent"}`, outline: active ? "2px solid #fff" : "none", outlineOffset: -4, transition: "all 0.15s" }),
    qtyRow: { display: "flex", alignItems: "center", gap: 12, marginBottom: 22 },
    qtyControl: { display: "flex", alignItems: "center", gap: 10, background: "#f8f7f4", borderRadius: 50, padding: "6px 14px" },
    qtyBtn: { width: 24, height: 24, borderRadius: "50%", background: "#fff", border: "0.5px solid #e8e4df", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center", color: "#1a1a2e", fontWeight: 300, lineHeight: 1 },
    qtyVal: { fontSize: 15, fontWeight: 500, minWidth: 20, textAlign: "center" },
    actionRow: { display: "flex", gap: 10 },
    cartBtn: { flex: 1, background: added ? "#16a34a" : "#1a1a2e", color: "#fff", border: "none", borderRadius: 50, padding: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 },
    goCartBtn: { padding: "14px 18px", border: "0.5px solid #e8e4df", borderRadius: 50, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" },
    divider: { height: "0.5px", background: "#e8e4df", margin: "20px 0" },
    featureRow: { display: "flex", gap: 8 },
    featureItem: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 8px", background: "#f8f7f4", borderRadius: 12 },
    featureIcon: { width: 32, height: 32, borderRadius: "50%", background: "#fff", border: "0.5px solid #e8e4df", display: "flex", alignItems: "center", justifyContent: "center" },
    featureLabel: { fontSize: 11, color: "#6b6570", textAlign: "center", lineHeight: 1.3 },
  };

  return (
    <div style={styles.page}>
      {/* Top bar */}
      <div style={styles.topbar}>
        <Link to="/" style={{ ...styles.iconBtn, textDecoration: "none", color: "#1a1a2e" }}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </Link>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {product.name}
        </span>
        <button onClick={() => setWished(!wished)} style={{ ...styles.iconBtn, background: wished ? "#fee2e2" : "#f8f7f4", border: `0.5px solid ${wished ? "#fca5a5" : "#e8e4df"}`, color: wished ? "#dc2626" : "#1a1a2e" }}>
          {wished ? "♥" : "♡"}
        </button>
      </div>

      {/* Image */}
      <div style={styles.imgWrap}>
        <img src={product.image} alt={product.name} style={styles.img} />
        {product.tag === "Sale" && discount && <span style={styles.saleBadge}>−{discount}% off</span>}
        {product.tag === "New" && <span style={styles.newBadge}>New</span>}
        <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 5 }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: i===0 ? 18 : 6, height: 6, borderRadius: 3, background: "#fff", opacity: i===0 ? 1 : 0.5 }} />
          ))}
        </div>
      </div>

      {/* Detail card */}
      <div style={styles.card}>
        <div style={styles.brandRow}>
          <span style={styles.brand}>{product.brand}</span>
          <div style={styles.stars}>
            {"★".repeat(5)}
            <span style={styles.ratingVal}>{product.rating} ({product.reviews})</span>
          </div>
        </div>

        <div style={styles.name}>{product.name}</div>
        <div style={styles.desc}>{product.description}</div>

        <div style={styles.priceRow}>
          <span style={styles.priceNow}>${product.price}</span>
          {product.originalPrice && <span style={styles.priceWas}>${product.originalPrice}</span>}
          {discount && <span style={styles.priceSave}>Save ${product.originalPrice - product.price}</span>}
        </div>

        <div style={styles.label}>Select size</div>
        <div style={styles.sizeRow}>
          {product.sizes.map((s, i) => {
            const isOut = i === product.sizes.length - 1 && product.sizes.length > 4;
            return (
              <div key={s} style={styles.sizeChip(selectedSize === i, isOut)} onClick={() => !isOut && setSelectedSize(i)}>
                {s}
              </div>
            );
          })}
        </div>

        <div style={styles.label}>Color</div>
        <div style={styles.colorRow}>
          {COLORS.map((c, i) => (
            <div key={c} style={styles.colorDot(c, selectedColor === i)} onClick={() => setSelectedColor(i)} />
          ))}
        </div>

        <div style={styles.qtyRow}>
          <span style={{ fontSize: 13, color: "#6b6570" }}>Quantity</span>
          <div style={styles.qtyControl}>
            <button style={styles.qtyBtn} onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
            <span style={styles.qtyVal}>{qty}</span>
            <button style={styles.qtyBtn} onClick={() => setQty(q => Math.min(99, q + 1))}>+</button>
          </div>
        </div>

        <div style={styles.actionRow}>
          <button style={styles.cartBtn} onClick={handleAddToCart}>
            {added ? "✓ Added to cart!" : "Add to cart"}
          </button>
          <Link to="/cart" style={{ ...styles.goCartBtn, textDecoration: "none", color: "#1a1a2e" }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>

        <div style={styles.divider} />

        <div style={styles.featureRow}>
          {[
            { label: "Free delivery" },
            { label: "Easy returns" },
            { label: "Secure pay" },
            { label: "Authentic" },
          ].map(f => (
            <div key={f.label} style={styles.featureItem}>
              <div style={styles.featureIcon}>
                <svg width="14" height="14" fill="none" stroke="#6b6570" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span style={styles.featureLabel}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}