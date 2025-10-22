const Announcement = ({ handleToggle, isSignIn }: { handleToggle: any, isSignIn: boolean }) => {
  return (
    <div className="
          w-1/2 h-full 
          flex flex-col items-center justify-center 
          px-10 text-center space-y-6 
          bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 
          text-white shadow-xl
          absolute
          left-[50%]
          transition-all duration-700 ease-in-out
        "
      style={{
        left: isSignIn ? "50%" : "25%",
        transform: isSignIn ? "translateX(0%)" : "translateX(-50%)",
        zIndex: 1000,
        borderTopRightRadius: isSignIn ? "0px" : "60px",
        borderBottomRightRadius: isSignIn ? "0px" : "60px",
        borderTopLeftRadius: isSignIn ? "60px" : "0px",
        borderBottomLeftRadius: isSignIn ? "60px" : "0px",
        transition: `
          left 0.8s ease-in-out,
          transform 0.8s ease-in-out,
          border-top-right-radius 1s ease-in-out,
          border-bottom-right-radius 1s ease-in-out,
          border-top-left-radius 1s ease-in-out,
          border-bottom-left-radius 1s ease-in-out
        `,
      }}

    >
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-wide drop-shadow-md animate-fadeIn">
        {isSignIn ? "Hello, Friend!" : "Welcome back"}
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
          "
        onClick={handleToggle}
      >
        {isSignIn ? "Sign Up" : "Sign In"}
      </button>
    </div>
  )
}

export default Announcement