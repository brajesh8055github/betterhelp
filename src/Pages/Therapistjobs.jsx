import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Therapistjobs = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 text-gray-800">
      {/* Section 1: Join Therapists */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Join 34,424 therapists who are earning more with BetterHelp!
        </h2>
        <p className="text-gray-600 mb-6">Select an option to get started</p>
        <div>
          {[
            "Clinical Social Worker",
            "Professional Counselor",
            "Marriage and Family Therapist",
            "Psychologist",
            "Psychiatrist",
          ].map((title, index) => (
            <button
              key={index}
              className=" p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-green-50 transition"
            >
              <p className="font-medium">{title}</p>
              <span className="text-sm text-gray-500">
                (LCSW, LICSW, LISW, etc.)
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-500">
          The therapist count displayed represents the total number of active
          therapist accounts worldwide on BetterHelp.
        </p>
      </div>

      {/* Section 2: Benefits */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Private practice with no doors & no overhead
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <p className="mb-4 text-gray-600">
            The therapist count displayed represents the total number of active
            therapist accounts worldwide on BetterHelp.
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
            <li>$650 monthly Health Benefit Stipend</li>
            <li>Bonuses & incentives for high performance</li>
            <li>Free BetterHelp membership</li>
            <li>Free access to 390+ CEU courses</li>
          </ul>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
            <li>
              Eligibility for the Health Benefit Stipend requires a continuous
              commitment of 30 hours per week.
            </li>
            <li>
              Bonuses are provided based on achieving performance milestones.
            </li>
            <li>More perks and benefits are available for top performers.</li>
          </ol>
        </div>
      </div>

      {/* Section 3: Requirements */}
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Requirements
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-center">
          <li>
            Valid license to provide clinical therapy issued by a state board.
          </li>
          <li>Strong commitment to providing quality therapy services.</li>
          <li>Ability to work independently with flexible hours.</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500 text-center">
          Note: Unfortunately, if you are an intern or require supervision to
          provide therapy, you are not eligible at this time.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Start Application
          </button>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default Therapistjobs;
