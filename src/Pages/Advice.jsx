import Banner from '../components/Banner'
import Footer from '../components/Footer'
import bh1 from '../Photos/bh1.jpg'
import bh2 from '../Photos/bh2.jpg'
import bh3 from '../Photos/bh3.jpg'
import bh4 from '../Photos/bh4.jpg'
import bh5 from '../Photos/bh5.jpg'
import bh6 from '../Photos/bh6.jpg'
import hero from '../Photos/herobh.jpg'


const recents = [
  { img: bh1, },
  { img: bh2, },
  { img: bh3, },
]
const populars = [
  { img: bh4, },
  { img: bh5, },
  { img: bh6, },
]
const depressions = [
  { img: bh1, },
  { img: bh2, },
  { img: bh3, },
  { img: bh4, },
]
const anxieties = [
  { img: bh5, },
  { img: bh6, },
  { img: bh1, },
  { img: bh2, },
]
const therapies = [
  { img: bh3, },
  { img: bh4, },
  { img: bh5, },
  { img: bh6, },
]

const Advice = () => {
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 bg-red-50 p-4'>
        <div>
          <h2 className="text-5xl font-bold mb-6 text-start">If you are looking for support in your area., see how a nearby therapist can help.</h2>
          <button className="mt-4 mx-auto px-6 py-2 bg-green-400 text-white rounded-md hover:bg-green-600">
            Read more
          </button>
        </div>
        <div>
          <img src={hero} className='rounded-xl'></img>
        </div>

      </div>
      <div className="p-4 md:p-8 bg-gray-50 text-gray-800">

        {/* Section: Recent */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Recent</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recents.map((recent, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={recent.img}
                  alt="Therapy Advice"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-medium mb-2">Unpacking Misconceptions About Therapy: What To Expect</p>
                <p className="text-gray-600 text-sm">
                  Medically reviewed by <span className="font-semibold">April Justice, LICSW</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Popular */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Popular</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {populars.map((popular, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={popular.img}
                  alt="Therapy Advice"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-medium mb-2">Unpacking Misconceptions About Therapy: What To Expect</p>
                <p className="text-gray-600 text-sm">
                  Medically reviewed by <span className="font-semibold">April Justice, LICSW</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Depression */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Depression</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {depressions.map((depression, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={depression.img}
                  alt="Therapy Advice"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-medium mb-2">Unpacking Misconceptions About Therapy: What To Expect</p>
                <p className="text-gray-600 text-sm">
                  Medically reviewed by <span className="font-semibold">April Justice, LICSW</span>
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 block mx-auto px-6 py-2 border text-black rounded-2xl">

            See more
          </button>
        </div>

        {/* Section: Anxiety */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Anxiety</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {anxieties.map((anxiety, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={anxiety.img}
                  alt="Therapy Advice"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-medium mb-2">Unpacking Misconceptions About Therapy: What To Expect</p>
                <p className="text-gray-600 text-sm">
                  Medically reviewed by <span className="font-semibold">April Justice, LICSW</span>
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 block mx-auto px-6 py-2 border text-black rounded-2xl">

            See more
          </button>
        </div>

        {/* Section: Therapy */}
        <div>
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Therapy</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {therapies.map((therapy, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg shadow hover:shadow-lg">
                <img
                  src={therapy.img}
                  alt="Therapy Advice"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="font-medium mb-2">Unpacking Misconceptions About Therapy: What To Expect</p>
                <p className="text-gray-600 text-sm">
                  Medically reviewed by <span className="font-semibold">April Justice, LICSW</span>
                </p>
              </div>
            ))}
          </div>
          <button className="mt-4 block mx-auto px-6 py-2 border text-black rounded-2xl">
            See more
          </button>
        </div>
      </div>
      <Banner />
      <Footer />
    </>
  );
};

export default Advice;
