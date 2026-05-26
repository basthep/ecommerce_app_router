"use client";

import Image from "next/image";
import Footer from "../components/Footer"

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="text-violet-600 font-semibold uppercase tracking-widest">
              About Us
            </p>

            <h1 className="mt-5 text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Building Modern Shopping Experiences
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              ShopVerse is a modern ecommerce platform focused on delivering
              high-quality products with seamless online shopping experiences.
              We combine elegant design, fast performance, and customer-first
              services to create a trusted digital marketplace.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our mission is to make online shopping simple, secure, and
              enjoyable for everyone while continuously innovating with the
              latest technologies.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button className="px-8 py-4 bg-violet-600 hover:bg-violet-700 transition text-white rounded-2xl font-semibold shadow-lg">
                Explore Products
              </button>

              <button className="px-8 py-4 border border-gray-300 hover:border-violet-600 hover:text-violet-600 transition rounded-2xl font-semibold text-gray-700">
                Contact Us
              </button>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-3xl shadow-sm p-10">

            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
              alt="About"
              className="w-full h-125 object-cover rounded-2xl"
            />

          </div>

        </div>

        {/* STATS */}
        <div className="mt-28 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-3xl shadow-sm p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-600">
              10K+
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Happy Customers
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-600">
              500+
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Premium Products
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-600">
              24/7
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Customer Support
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 text-center">

            <h2 className="text-5xl font-bold text-violet-600">
              99%
            </h2>

            <p className="mt-4 text-gray-600 font-medium">
              Positive Reviews
            </p>

          </div>

        </div>

        {/* MISSION SECTION */}
        <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="bg-white rounded-3xl shadow-sm p-10">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="Mission"
              className="w-full h-112.5 object-cover rounded-2xl"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="text-violet-600 font-semibold uppercase tracking-widest">
              Our Mission
            </p>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 leading-tight">
              Delivering Quality With Innovation
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              We believe ecommerce should be more than just buying products.
              It should provide trust, convenience, and memorable experiences.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Our team constantly works on improving user experience,
              product quality, and customer satisfaction through modern
              technologies and creative solutions.
            </p>

          </div>

        </div>

      </div>

      <Footer />

    </main>
  );
};

export default AboutPage;