import React from 'react';
import { Link } from 'react-router-dom';
import './Buy.css';

function Buy() {
	const product = {
		id: 1,
		title: 'Abstract Painting',
		price: 249,
		img: './images/art1.jpeg',
		description: 'Small framed abstract art — perfect for desks and shelves.'
	};

	return (
		<div className="buy-page container py-4">
			<div className="buy-card">
				<div className="buy-media">
					<img src={product.img} alt={product.title} />
				</div>

				<div className="buy-info">
					<h3 className="buy-title">{product.title}</h3>
					<p className="buy-desc">{product.description}</p>

					<div className="buy-meta">
						<span className="buy-price">${product.price}</span>
						<div className="buy-actions">
							<Link to="/checkout" className="btn btn-primary buy-btn">Buy Now</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Buy;

