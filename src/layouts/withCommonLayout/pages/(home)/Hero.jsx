import BannerImage from "../../../../assets/gift-present-box-monochrome-stylish-trendy-composition-blue-color-background-top-view-flat-lay-pure-beauty-usual-things-around-copyspace-ad-holiday-celebration.jpg"

const Hero = () => {
    return (
        <div
  className="hero = min-h-screen"
  style={{
    backgroundImage: `url(${BannerImage})`,
  }}>
  <div className=" "></div>
  <div className="hero-content  text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-violet-600">Send Virtual Gifts <span className="">With Love</span></h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    );
};

export default Hero;