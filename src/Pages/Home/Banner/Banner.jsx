import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl h-[450px] ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className="w-full " />
        <div className="absolute  h-full right-5 space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/3 rounded-lg pl-10 pt-14 left-0 top-0">
          <h2 className="text-white font-bold text-5xl">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          {/* Inside text button div */}
          <div>
            <button className="btn btn-active btn-secondary mr-4">
              Discover More
            </button>
            <button className="btn btn-outline text-white btn-warning">
              Latest Projects
            </button>
          </div>
        </div>
        {/* slide button div */}
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute  h-full right-5 space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/3 rounded-lg pl-10 pt-14 left-0 top-0">
          <h2 className="text-white font-bold text-5xl">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          {/* Inside text button div */}
          <div>
            <button className="btn btn-active btn-secondary mr-4">
              Discover More
            </button>
            <button className="btn btn-outline text-white btn-warning">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute  h-full right-5 space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/3 rounded-lg pl-10 pt-14 left-0 top-0">
          <h2 className="text-white font-bold text-5xl">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          {/* Inside text button div */}
          <div>
            <button className="btn btn-active btn-secondary mr-4">
              Discover More
            </button>
            <button className="btn btn-outline text-white btn-warning">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute  h-full right-5 space-y-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-1/3 rounded-lg pl-10 pt-14 left-0 top-0">
          <h2 className="text-white font-bold text-5xl">
            Affordable Price For Car Servicing
          </h2>
          <p className="text-white">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          {/* Inside text button div */}
          <div>
            <button className="btn btn-active btn-secondary mr-4">
              Discover More
            </button>
            <button className="btn btn-outline text-white btn-warning">
              Latest Projects
            </button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
