function Hero() {
  return (
    <section
      id="home"
      className="bg-white px-5 py-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-500">
            Explore modern technologies and build your perfect
            development stack. Choose the tools that match your
            skills and project needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#technologies"
              className="rounded-lg bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 px-6 py-3 font-semibold text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700"
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src="/assets/banner-stack.png"
            alt="Development Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;