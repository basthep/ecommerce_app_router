"use client";

import Footer from "../components/Footer.tsx"

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center">

          <p className="text-violet-600 font-semibold tracking-wide uppercase">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-bold text-gray-900">
            Let’s Work Together
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            Have questions, suggestions, or business inquiries?
            Feel free to contact us anytime.
          </p>

        </div>

        {/* CONTACT SECTION */}
        <div className="mt-20 grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-3xl shadow-sm p-10">

            <h2 className="text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              We’d love to hear from you. Reach out using the contact
              information below or send us a message directly.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 space-y-8">

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
                  📧
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Email
                  </h3>

                  <p className="mt-2 text-gray-600">
                    support@shopverse.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
                  📞
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-gray-600">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="w-14 h-14 rounded-2xl bg-violet-100 flex items-center justify-center text-2xl">
                  📍
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Address
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    Kerala, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-3xl shadow-sm p-10">

            <form className="space-y-7">

              {/* NAME */}
              <div>

                <label className="block mb-3 text-gray-700 font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-violet-500 transition"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block mb-3 text-gray-700 font-medium">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-violet-500 transition"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block mb-3 text-gray-700 font-medium">
                  Your Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full px-5 py-4 rounded-2xl border border-gray-200 outline-none resize-none focus:border-violet-500 transition"
                ></textarea>

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-4 bg-violet-600 hover:bg-violet-700 transition rounded-2xl text-white font-semibold text-lg shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      <Footer />

    </main>
  );
};

export default ContactPage;