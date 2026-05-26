"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useSelector} from "react-redux";
import type { RootState } from '../store/store'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  );
  const cartItemsLength = cartItems.length;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-gray-900"
        >
          Shop<span className="text-violet-600">Sphere</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-700 font-bold hover:text-violet-600 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-gray-700 font-bold hover:text-violet-600 transition"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-gray-700 font-bold hover:text-violet-600 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-gray-700 font-bold hover:text-violet-600 transition"
          >
            Contact
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-gray-700 hover:text-violet-600 transition"
          >
            <ShoppingCart size={24} />

            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemsLength ? cartItemsLength : ""}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-5">

            <Link
              href="/"
              className="text-gray-700 hover:text-violet-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-gray-700 hover:text-violet-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-violet-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-violet-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/cart"
              className="text-gray-700 hover:text-violet-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;