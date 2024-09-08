import React from "react";

const Contact = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          We welcome your inquiries and feedback. Please feel free to reach out
          to us using the information below.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">
          Registered Office
        </h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Met Veterans Association is registered as a Society u/s 9(1) of the
            Haryana Registration and Regulation of Societies Act, 2012.
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong>
            <br />
            3rd Floor, H Block, Commercial Complex,
            <br />
            Vaishali Arcade, Palam Vihar,
            <br />
            Gurugram-122017
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> met.v.association@gmail.com
          </p>
          <p className="text-gray-700">
            <strong>Website:</strong> www.mva.org.in
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
