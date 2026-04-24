import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const products = [
    {
      id: 1,
      name: "Classic Hoodie",
      description: "Premium quality hoodie for everyday comfort.",
      price: "$120",
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Stylish Sneakers",
      description: "Trendy sneakers with maximum comfort.",
      price: "$200",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Casual T-Shirt",
      description: "Soft cotton t-shirt with modern fit.",
      price: "$80",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Denim Jacket",
      description: "Classic denim jacket for all seasons.",
      price: "$150",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      name: "Smart Watch",
      description: "Track your fitness and style together.",
      price: "$250",
      image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      name: "Backpack",
      description: "Stylish and spacious everyday backpack.",
      price: "$90",
      image: "https://images.unsplash.com/photo-1506629905607-55e0c63b9c28?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      name: "Sunglasses",
      description: "Protect your eyes with modern style.",
      price: "$60",
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      name: "Leather Wallet",
      description: "Premium leather wallet with sleek design.",
      price: "$70",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      name: "Headphones",
      description: "High-quality sound with deep bass.",
      price: "$180",
      image: "https://images.unsplash.com/photo-1518444028785-8c4b58c1a9c7?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      name: "Cap",
      description: "Stylish cap for everyday wear.",
      price: "$40",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">

        {products.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div
              className="h-100 card-hover"
              style={{
                border: "1px solid #ddd",
                borderRadius: "20px",
                background: "#fff",
                overflow: "hidden"
              }}
            >

              {/* IMAGE CLICKABLE */}
              <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover"
                  }}
                />
              </Link>

              {/* CONTENT */}
              <div className="p-4">

                {/* NAME CLICKABLE */}
                <Link 
                  to={`/product/${item.id}`} 
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h5>{item.name}</h5>
                </Link>

                <p className="text-muted">{item.description}</p>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold">{item.price}</span>
                  <button className="btn btn-dark rounded-pill px-3">
                    Add
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;