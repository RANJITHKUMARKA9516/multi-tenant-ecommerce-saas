import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>

        <p className="text-blue-600 font-bold mt-2">₹ {product.price}</p>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
