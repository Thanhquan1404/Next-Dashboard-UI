const Announcement = () => {
  return (
    <div className="
          w-1/2 h-full 
          flex flex-col items-center justify-center 
          px-10 text-center space-y-6 
          bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 
          text-white rounded-tl-[60px] rounded-bl-[60px] shadow-xl
          z-1000
        ">
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-wide drop-shadow-md animate-fadeIn">
        Hello, Friend!
      </h1>

      {/* Subtext */}
      <h3 className="text-base font-light text-white/90 leading-relaxed max-w-[300px]">
        Register with your personal details to use all of our site features.
      </h3>

      {/* Sign Up Button */}
      <button className="
            mt-4 px-8 py-3 bg-white text-purple-600 font-semibold rounded-full
            shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-purple-100
            transition-all duration-300 ease-in-out
          ">
        Sign Up
      </button>
    </div>
  )
}

export default Announcement