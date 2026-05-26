// app/products/page.tsx

import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  return response.json();
}

const ProductsPage = async () => {

  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 px-6 pt-28 ">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-14">

        <h1 className="text-5xl font-bold text-gray-900">
          Our Products
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Explore our latest collection of premium products.
        </p>

      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      {/* FOOTER */}
      <Footer />

    </main>
  );
};

export default ProductsPage;