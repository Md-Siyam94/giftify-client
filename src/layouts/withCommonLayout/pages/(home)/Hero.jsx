import BannerImage from "../../../../assets/gift-present-box-monochrome-stylish-trendy-composition-blue-color-background-top-view-flat-lay-pure-beauty-usual-things-around-copyspace-ad-holiday-celebration.jpg"

const Hero = () => {
    return (
        <div
  className="hero  h-[320px] md:min-h-screen"
  style={{
    backgroundImage: `url(${BannerImage})`,
    
  }}>
  <div className=" "></div>
  <div className="hero-content  text-center">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-5xl text-4xl font-bold text-violet-600">Send Virtual Gifts <span className="">With Love</span></h1>
      <p className="mb-5">
      Easily send heartfelt, custom virtual gifts to those who matter—anytime, from anywhere. Make every moment meaningful !
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    );
};

export default Hero;