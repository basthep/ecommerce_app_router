
import Link from "next/link";
import Footer from "./components/Footer"
import {cookies} from "next/headers"
import {redirect} from "next/navigation"


const HomePage = async () => {

  const cookieStore = await cookies();
  const user = cookieStore.get("user");
  if(!user){
    redirect("/login")
  }

  return (
    <main className="w-full min-h-screen bg-gray-50 mt-17">

      {/* HERO SECTION */}
      <section className="w-full min-h-[90vh] flex justify-center px-6">

        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="text-violet-600 font-semibold mb-4 tracking-wide">
              TRENDING COLLECTION 2026
            </p>

            <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-gray-900">
              Discover Modern <span className="text-violet-600">Fashion</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Explore premium quality products with modern style,
              affordable pricing, and fast delivery for your everyday lifestyle.
            </p>

            <div className="flex gap-5 mt-10">
              <Link
                href="/products"
                className="px-8 py-4 bg-violet-600 hover:bg-violet-700 transition text-white rounded-xl font-semibold shadow-lg"
              >
                Shop Now
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 border border-gray-300 hover:border-violet-600 hover:text-violet-600 transition rounded-xl font-semibold text-gray-700"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-center mt-16">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
              alt="fashion"
              className="w-80 h-80 md:w-120 md:h-120 max-w-xl rounded-3xl shadow-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-20 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">
              Why Shop With Us?
            </h2>

            <p className="mt-4 text-gray-600">
              Premium experience designed for modern shoppers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-3xl">
                🚚
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                Fast Delivery
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Get your products delivered quickly and safely at your doorstep.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-3xl">
                💎
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                Premium Quality
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Carefully selected products with excellent quality and style.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
              <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-3xl">
                🔒
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                Secure Payment
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Safe and secure payment methods for worry-free shopping.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto bg-violet-600 rounded-3xl p-12 text-center text-white shadow-2xl">

          <h2 className="text-4xl md:text-5xl font-bold">
            Start Shopping Today
          </h2>

          <p className="mt-6 text-lg text-violet-100 leading-8">
            Explore thousands of trending products with exclusive offers and discounts.
          </p>

          <Link
            href="/products"
            className="inline-block mt-10 px-10 py-4 bg-white text-violet-600 rounded-xl font-bold hover:scale-105 transition"
          >
            Explore Products
          </Link>
        </div>
      </section>

      <Footer />

    </main>
  );
};

export default HomePage;