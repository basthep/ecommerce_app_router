import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-28 bg-white border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-12">

        {/* LOGO & ABOUT */}
        <div>

          <h2 className="text-3xl font-bold text-violet-600">
            ShopVerse
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Modern ecommerce platform offering premium products,
            fast delivery, and secure shopping experience.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-xl font-semibold text-gray-900">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-4 text-gray-600">

            <Link
              href="/"
              className="hover:text-violet-600 transition"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="hover:text-violet-600 transition"
            >
              Products
            </Link>

            <Link
              href="/about"
              className="hover:text-violet-600 transition"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="hover:text-violet-600 transition"
            >
              Contact Us
            </Link>

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-xl font-semibold text-gray-900">
            Contact
          </h3>

          <div className="mt-5 space-y-4 text-gray-600">

            <p>📧 support@shopverse.com</p>

            <p>📞 +91 98765 43210</p>

            <p>📍 Kerala, India</p>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm">

        © 2026 ShopVerse. All rights reserved.

      </div>

    </footer>
  );
};

export default Footer;