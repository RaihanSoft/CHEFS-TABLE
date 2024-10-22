const Hero = () => {
  return (

      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://media.istockphoto.com/id/824283794/photo/famous-chef-works-in-a-big-restaurant-kitchen-with-his-help-kitchen-is-full-of-food-vegetables.webp?a=1&b=1&s=612x612&w=0&k=20&c=TIG8Vo5_1lJq5uwR-jm7ovZGoBJ4hyhBSlS5Xkq6J70=')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database, 
            and solve 500+ coding problems to become an exceptionally well world-class Programmer.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 transition">
              Explore Now
            </button>
            <button className="bg-transparent border border-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition">
              Our Feedback
            </button>
          </div>
        </div>
      </section>

    
  );
};

export default Hero;
