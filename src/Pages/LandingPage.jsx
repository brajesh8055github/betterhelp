import { useState } from 'react';
import campos from '../Photos/g.campos.jpg'
import hw1 from '../Photos/image-how-it-works-1.png'
import hw2 from '../Photos/image-how-it-works-2.png'
import hw3 from '../Photos/image-how-it-works-3.png'
import gift from '../Photos/gift-give.jpg'
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Banner from '../components/Banner';
import Footer from '../components/Footer';
const LandingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-800 p-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-white mb-4 text-center">
          You deserve to be happy.
        </h1>
        <p className="text-lg text-white mb-8 text-center">
          What type of therapy are you looking for?
        </p>

        {/* Therapy Options */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl">
          {/* Option 1 */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">For Myself</h2>
            <p className="text-gray-500">Individual</p>
          </div>

          {/* Option 2 */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              For me and my partner
            </h2>
            <p className="text-gray-500">Couples</p>
          </div>

          {/* Option 3 */}
          <div className="flex-1 bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">For my child</h2>
            <p className="text-gray-500">Teen</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-red-100 p-6 gap-6">
        {/* Heading */}
        <h1 className="flex-1 text-3xl font-bold text-gray-800 text-center lg:text-left">
          The worlds largest <br />
          therapy service. <br />
          100% online.
        </h1>

        {/* Stats Section */}
        <div className="flex-1  flex-col sm:flex-row gap-6">
          {/* Stat 1 */}
          <div className="flex-1 p-6 border-b-2">
            <h1 className="text-4xl font-extrabold text-green-800 mb-2">
              409,254,184
            </h1>
            <p className="text-gray-600">
              Messages, chat, phone, video sessions
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 p-6  border-b-2">
            <h1 className="text-4xl font-extrabold text-green-800 mb-2">
              32,411
            </h1>
            <p className="text-gray-600">Qualified therapists ready to help</p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 p-6">
            <h1 className="text-4xl font-extrabold text-green-800 mb-2">
              52,40,188
            </h1>
            <p className="text-gray-600">People got help</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between bg-yellow-50 p-6 gap-6">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Professional and qualified therapists who you can trust
          </h1>
          <p className="text-gray-600 mb-6">
            Tap into the `world&s` largest network of qualified and experienced
            therapists who can help you with a range of issues including
            depression, anxiety, relationships, trauma, grief, and more. With our
            therapists, you get the same professionalism and quality you would
            expect from an in-office therapist, but with the ability to
            communicate when and how you want.
          </p>
          <button className="px-6 py-3 bg-green-200 text-green font-semibold rounded-lg shadow-md hover:bg-green-300 transition duration-300">
            Get matched to a therapist
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={campos}
            alt="Therapist"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className='py-20 bg-blue-50'>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center">How it works</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between  p-6 gap-6">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={hw1}
              alt="Therapy"
              className="w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Get matched to the best therapist for you
            </h1>
            <p className="text-gray-600">
              Answer a few questions to find a qualified therapist who fits your needs and preferences. Tap into the largest online network of credentialed providers.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between  p-6 gap-6">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={hw2}
              alt="Therapy"
              className="w-full h-auto "
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Communicate your way
            </h1>
            <p className="text-gray-600">
              Talk to your therapist however you feel comfortable — text, chat, phone, or video.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 gap-6">
          {/* Image Section */}
          <div className="flex-1">
            <img
              src={hw3}
              alt="Therapy"
              className="w-full h-auto "
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Therapy when you need it
            </h1>
            <p className="text-gray-600">
              You can message your therapist anytime, from anywhere. You also get
              to schedule live sessions when it’s convenient for you and can
              connect from any mobile device or computer.
            </p>
          </div>
        </div>
      </div>

      <div className='p-20'>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center">Frequently asked questions</h1>
        <div className="w-full mx-auto mt-6">
          <div className="bg-white ">
            {/* Accordion Item 1 */}
            <div>
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left px-6 py-4 border-b-2 mt-1 text-gray-800 font-semibold rounded-t-lg focus:outline-none flex items-center justify-between"
              >
                <span>What is therapy?</span>
                {openIndex === 0 ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </button>
              {openIndex === 0 && (
                <div className="px-6 py-4 bg-gray-50">
                  Every therapist providing services on BetterHelp is a qualified and experienced counselor, psychologist, social worker, or therapist. They must also have a relevant academic degree, at least 3 years of experience, and have credentials from their professional organization. This includes completing the necessary education, exams, training, and practice requirements. We refer to therapists across our sites and apps according to their professional title and credentials, specific to the U.S., U.K., Australia, Germany, France, or the Netherlands, as applicable.
                </div>
              )}
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div>
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full text-left px-6 py-4 border-b-2 mt-1 text-gray-800 font-semibold focus:outline-none flex items-center justify-between"
            >
              <span>Who will be helping me?</span>
              {openIndex === 1 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 1 && (
              <div className="px-6 py-4 bg-gray-50">
                After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. If you feel your therapist is not a good fit for you, you may elect to be matched to a different therapist.
              </div>
            )}
          </div>

          {/* Accordion Item 3 */}
          <div>
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full text-left px-6 py-4 border-b-2 mt-1 text-gray-800 font-semibold rounded-b-lg focus:outline-none flex items-center justify-between"
            >
              <span>Is Betterhelp right for me?</span>
              {openIndex === 2 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 2 && (
              <div className="px-6 py-4 bg-gray-50">
                BetterHelp may be right for you if you are looking to improve the quality of your life. Whenever there is anything that interferes with your happiness or prevents you from achieving your goals, we may be able to help. We also have therapists who specialize in specific issues such as stress, anxiety, relationships, parenting, depression, addictions, eating, sleeping, trauma, anger, family conflicts, LGBT matters, grief, religion, self esteem, and more.
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full text-left px-6 py-4 border-b-2 mt-1 text-gray-800 font-semibold rounded-b-lg focus:outline-none flex items-center justify-between"
            >
              <span>How much does it cost?</span>
              {openIndex === 3 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 3 && (
              <div className="px-6 py-4 bg-gray-50">
                The cost of therapy through BetterHelp ranges from $70 to $100 per week (billed every 4 weeks) and it is based on your location, source, preferences, and therapist availability. You can cancel your membership at any time, for any reason.
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleAccordion(4)}
              className="w-full text-left px-6 py-4 border-b-2 mt-1 text-gray-800 font-semibold rounded-b-lg focus:outline-none flex items-center justify-between"
            >
              <span>I signed up. How long until I am matched with a therapist?</span>
              {openIndex === 4 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 4 && (
              <div className="px-6 py-4 bg-gray-50">
                The matching process can take a few hours or a few days, depending on therapist availability.
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleAccordion(5)}
              className="w-full text-left px-6 py-4 border-b-2 mb-1 text-gray-800 font-semibold rounded-b-lg focus:outline-none flex items-center justify-between"
            >
              <span>How will I communicate with my therapist?</span>
              {openIndex === 5 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 5 && (
              <div className="px-6 py-4 bg-gray-50">
                You can get therapy in four ways:
                Exchanging messages with your therapist
                Chatting live with your therapist
                Speaking over the phone with your therapist
                Video conferencing with your therapist
                You can use different ways at different times as you wish, based on your needs, availability, and convenience.
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleAccordion(6)}
              className="w-full text-left px-6 py-4 border-b-2 mb-1 text-gray-800 font-semibold rounded-b-lg focus:outline-none flex items-center justify-between"
            >
              <span>Can BetterHelp substitute for traditional face-to-face therapy?</span>
              {openIndex === 6 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 6 && (
              <div className="px-6 py-4 bg-gray-50">
                The professionals who work through BetterHelp are registered therapists who hold the proper credentials to provide therapy. However, while the service may have similar benefits, it is not capable of substituting for traditional face-to-face therapy in every case. Please note that your therapist wont be able to make any official diagnosis, to fulfill any court order or prescribe medication.
              </div>
            )}
          </div>
          <div>
            <button
              onClick={() => toggleAccordion(7)}
              className="w-full text-left px-6 py-4 border-b-2 mb-1 text-gray-800 font-semibold rounded-b-lg focus:outline-none flex items-center justify-between"
            >
              <span>How long can I use BetterHelp?</span>
              {openIndex === 7 ? (
                <RiArrowDropUpLine />
              ) : (
                <RiArrowDropDownLine />
              )}
            </button>
            {openIndex === 7 && (
              <div className="px-6 py-4 bg-gray-50">
                This depends on your needs and varies a lot from one person to another. Some people feel they get most of the value after just a few weeks, while others prefer to stick to the program for an extended period of time. This is completely up to you.
              </div>
            )}
          </div>

        </div>
        <div className='text-center my-4'>
          <a href="/">More frequently asked questions</a>
        </div>
        <div className='text-center my-4'>
          <button className=" px-4 py-2 bg-green-300 text-green-800 rounded hover:bg-green-700">
            Get Started
          </button>
        </div>

      </div>
      <div className=' bg-red-50 py-4 '>
        <div className="flex flex-col lg:flex-row items-center justify-betweenp-6 gap-6">
          <div className='flex-1'>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">Give the gift of a BetterHelp membership</h1>
            <p className="text-gray-600 mb-6">Therapy is one of the most meaningful gifts you can give to your friends and loved ones.</p>
            <button className="px-6 py-3 bg-green-200 text-green font-semibold rounded-lg shadow-md hover:bg-green-300 transition duration-300">Gift a membership</button>
          </div>
          <div className='flex-1'>
            <img src={gift} className="w-full h-auto rounded-lg shadow-lg"></img>
          </div>
        </div>
        <Banner />
        <Footer />
      </div>


    </>
  );
};

export default LandingPage;
