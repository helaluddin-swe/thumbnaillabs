

const SoftBackground = () => {
  return (
    <div className="relative w-full h-full pointer-events-none">
      
      {/* Left Glow */}
      <div className="
        absolute
        top-40
        left-32
        h-60
        w-60
        rounded-full
        bg-gradient-to-r from-pink-700 to-gray-600
        blur-2xl
        opacity-60
        animate-pulse
      " />

      {/* Center / Right Glow */}
      <div className="
        absolute
        inset-0
        mx-auto
        my-auto
        top-50 
        right-10
        h-72
        w-72
        rounded-full
        bg-gradient-to-r from-pink-700 to-gray-600
        blur-3xl
        opacity-50
        animate-pulse
      " />

    </div>
  );
};

export default SoftBackground;
