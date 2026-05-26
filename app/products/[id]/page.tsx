"use client";

import Footer from "../../components/Footer"
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice.ts";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductDetailPage = () => {

  const params = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {

    const fetchProduct = async () => {

      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
      );

      const data = await response.json();

      setProduct(data);

      setLoading(false);
    };

    fetchProduct();

  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE SECTION */}
        <div className="bg-white rounded-3xl shadow-sm p-10 flex items-center justify-center">

          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md h-112.5 object-contain"
          />

        </div>

        {/* DETAILS SECTION */}
        <div>

          <p className="text-violet-600 uppercase tracking-wide font-semibold">
            {product.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold text-gray-900 leading-tight">
            {product.title}
          </h1>

          <div className="mt-6 flex items-center gap-4">

            <span className="text-yellow-500 text-xl">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-gray-500">
              ({product.rating.count} Reviews)
            </span>

          </div>

          <h2 className="mt-8 text-4xl font-bold text-gray-900">
            ₹ {Math.round(product.price * 85)}
          </h2>

          <p className="mt-8 text-gray-600 leading-8 text-lg">
            {product.description}
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-5">

            <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 transition text-white rounded-xl font-semibold shadow-lg" onClick={()=>
                dispatch(addToCart(product))
            }>
              Add To Cart
            </button>

            <button className="px-8 py-4 border border-gray-300 hover:border-violet-600 hover:text-violet-600 transition rounded-xl font-semibold text-gray-700">
              Buy Now
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </main>
  );
};

export default ProductDetailPage;