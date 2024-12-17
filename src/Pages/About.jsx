import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import bh1 from "../Photos/bh1.jpg";
import bh2 from "../Photos/bh2.jpg";
import bh3 from "../Photos/bh3.jpg";
import bh4 from "../Photos/bh4.jpg";
import bh5 from "../Photos/bh5.jpg";
import bh6 from "../Photos/bh6.jpg";
import herobh from "../Photos/herobh.jpg";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

let posts = [
  { img: bh1, desc: "Darlene has helped me to understand my feelings and emotions and how to deal with them. She is irreplaceable.", name: "- Written about 2 hours ago for Darlene Schmitt (LMHC)" },
  { img: bh2, desc: "I have been working with Colleen for a few years and she has significantly helped me reduce my anxiety and stress. I am thankful for our sessions", name: "- Written about 2 hours ago for Colleen Downes (LCSW)" },
  { img: bh3, desc: "Marimar is extremely empathetic and kind. She deeply cares about her patients and is a great listener. I am lucky to have found her!", name: "- Written about 2 hours ago for Marimar Vazquez-Pineiro (LMHC)" },
];

const About = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let teams = [
    bh4, bh5, bh6, bh1, bh2, bh3
  ];


  return (
    <div className="p-4 md:p-8 bg-gray-50 text-gray-800">
      {/* Section: About Us */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
      </div>
      {/* Section: Find Yourself in Therapy */}
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-2xl font-semibold mb-4">Find yourself in therapy</h2>
        <p className="text-gray-600 leading-relaxed">
          BetterHelp was founded in 2013 to remove the traditional barriers to
          therapy and make mental health care more accessible to everyone.
          Today, it is the worlds largest therapy service — providing
          professional, affordable, and personalized therapy in a convenient
          online format. BetterHelps network of more than 30,000 licensed
          therapists has helped over 5 million people take ownership of their
          mental health and work towards their personal goals. As the unmet need
          for mental health services continues to grow, BetterHelp is committed
          to expanding access to therapy globally.
        </p>
      </div>

      {/* Section: Our Therapists */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Therapists</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          BetterHelp offers access to registered, trained, and experienced
          Practitioner Psychologists, Counsellors, and similar applicable
          recognized professional certifications.
        </p>
        <img
          src={herobh}
          alt="Therapists"
          className="mx-auto rounded-lg shadow-md"
        />
        <button className="px-6 my-2 py-2 border border-gray-600 rounded-full text-gray-700 hover:bg-gray-200 transition">
          Join our team
        </button>
      </div>

      {/* Section: Our Latest Reviews */}
      <div className="bg-green-800 py-10">
        <h2 className="text-2xl font-semibold mb-4 text-center text-white">
          Our Latest Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg text-center "
            >
              <img
                src={post.img}
                alt="Review"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <p className="text-lg font-medium mb-1 text-white">{post.desc}</p>
              <p className="text-green-400">{post.name}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Section: Social Impact */}
      <div className="my-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Our Social Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-3xl font-bold text-green-600 mb-2">477,655,464</p>
            <p className="text-gray-600">
              Given in discounts and financial aid to cover therapy costs for
              low-income individuals
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-3xl font-bold text-green-600 mb-2">477,655,464</p>
            <p className="text-gray-600">
              Free months of therapy donated to communities in need
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F6F2] py-8 px-4 my-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Our Team</h2>
          <p>We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day. We are growing fast and always looking for new talent. If you love people and like challenges - come and join us!</p>
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {teams.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`Team Member ${index}`}
                className="w-full h-64 object-cover rounded-lg "
              />
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border border-gray-600 rounded-full text-gray-700 hover:bg-gray-200 transition">
            Join our team
          </button>
        </div>
      </div>
      <Banner />
      <Footer />
    </div>
  );
};

export default About;

