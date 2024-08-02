

const Hero = () => {
  return (
    <div className="relative  flex items-center justify-center" 
        style={{ backgroundImage: `url(${'/hero.jpg'})`,
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center',
                 height: '71svh'  }}>
      <div className="absolute top-0 left-0 w-full h-0.5 bg-white"></div>
      <div className="text-center max-w-5xl bg-black bg-opacity-50 p-2 rounded rounded-lg"> 
        <span className="text-white text-4xl md:text-6xl font-bold">თქვენი მთავარი დანიშნულების ადგილი </span>
        <span className="text-yellow-500 text-4xl md:text-6xl font-bold">ავტო იმპორტში</span>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white"></div>
    </div>
  );
};

export default Hero;
