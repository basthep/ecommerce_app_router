// components/ProductCard.tsx

import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 group"
    >
      {/* IMAGE */}
      <div className="h-72 bg-gray-100 flex items-center justify-center overflow-hidden p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">

        <p className="text-sm text-violet-600 font-medium capitalize">
          {product.category}
        </p>

        <h2 className="mt-3 text-lg font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h2>

        <div className="mt-5 flex items-center justify-between">

          <p className="text-2xl font-bold text-gray-900">
            ₹ {Math.round(product.price * 80)}
          </p>

          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
            View
          </button>

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;