import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 ">

      {/* Header Section */}
      <div className="text-center mb-8 bg-red-50">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Contact us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Use this form to reach out to our Customer Success Team regarding any questions, concerns, or feedback. You can also view our FAQ for quick answers to commonly asked questions.
        </p>
      </div>
      <div className="p-4 md:p-8 bg-gray-50 min-h-screen flex justify-center items-center">

        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 md:p-8">
          {/* Type of Contact Section */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Type of contact
          </h2>

          <form className="space-y-4">
            {/* Radio Buttons */}
            <div className="space-y-2">
              {[
                "I am a registered client and I need support.",
                "I am a current BetterHelp therapist and I need support.",
                "I am a therapist interested in joining or a current applicant.",
                "I have a question about the service.",
                "I have a billing related question.",
                "I have a press-related question.",
                "I have a business-related inquiry.",
                "I'm interested in BetterHelp for my organization.",
              ].map((option, index) => (
                <label key={index} className="flex items-center text-gray-700">
                  <input
                    type="radio"
                    name="contact_type"
                    className="h-4 w-4 mr-3 text-green-600 focus:ring-green-500"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />

            </div>
            {/* Checkbox for Language */}
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2 text-green-600 focus:ring-green-500"
              />
              I am comfortable with a reply in English.
            </label>
            <div>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Checkbox for Privacy Agreement */}
            <label className="flex items-start text-gray-700">
              <input
                type="checkbox"
                className="h-4 w-4 mt-1 mr-2 text-green-600 focus:ring-green-500"
              />
              <span>
                By clicking “Submit” you agree to the processing of your personal
                information for the purpose of responding to this inquiry. For
                more information about how we use and retain your information,
                please see our{" "}
                <a
                  href="#"
                  className="text-green-600 underline font-medium hover:text-green-700"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-green-600 underline font-medium hover:text-green-700"
                >
                  Terms of Use
                </a>
                .
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full md:w-auto bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>
          </form>
          {/* Address Section */}
          <div className="mt-6 bg-green-50 p-4 rounded-md">
            <p className="font-semibold text-gray-800">BetterHelp</p>
            <p>990 Villa Street,</p>
            <p>Mountain View, CA 94041</p>
            <p>USA</p>
            <a
              href="mailto:contact@betterhelp.com"
              className="text-green-600 font-medium underline"
            >
              contact@betterhelp.com
            </a>
          </div>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Contact;
