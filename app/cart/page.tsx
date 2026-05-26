"use client";

import { useSelector} from "react-redux";
import { RootState } from "../store/store";
import Footer from "../components/Footer";

const CartPage = () => {
    
  const cartItems = useSelector(
    (state: RootState) => state.cart.cartItems
  );


  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-12">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
              <h2 className="text-2xl font-semibold">
                Your cart is empty
              </h2>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[2fr_1fr] gap-8">

  {/* CART ITEMS */}
  <div className="space-y-6">

    {cartItems.map((item, index) => (

      <div
        key={`${item.id}-${index}`}
        className="bg-white rounded-2xl shadow-sm p-6"
      >

        <div className="flex items-center gap-6">

          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-contain"
          />

          <div>

            <h3 className="font-semibold text-lg">
              {item.title}
            </h3>

            <p className="text-violet-600 mt-2 font-medium">
              ₹ {Math.round(item.price * 85)}
            </p>

          </div>

        </div>

      </div>

    ))}

  </div>

  {/* CHECKOUT SECTION */}
  <div>

    <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-28">

      <h2 className="text-2xl font-bold mb-8">
        Order Summary
      </h2>

      <div className="flex justify-between mb-4">

        <span className="text-gray-600">
          Items
        </span>

        <span className="font-semibold">
          {cartItems.length}
        </span>

      </div>

      <div className="flex justify-between mb-6">

        <span className="text-gray-600">
          Total
        </span>

        <span className="text-2xl font-bold text-violet-600">
          ₹ {Math.round(total * 85)}
        </span>

      </div>

      <button className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition">
        Proceed To Checkout
      </button>

    </div>

  </div>

</div>
          )}

        </div>

      </main>

      <Footer />
    </>
  );
};

export default CartPage;