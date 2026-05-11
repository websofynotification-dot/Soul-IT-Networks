"use client"
import Slider from "react-slick";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useRouter } from "next/navigation";
import { PreLoader } from "../../Common/PreLoader";

export const HeroSliderImage = ({
  carouselImages
}: {
  carouselImages: {
    image: string,
    _id: string,
    title: string,
    subtitle: string
  }[]
}) => {

  const router = useRouter();

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative text-white overflow-hidden mt-7 sm:mt-4 lg:mt-[2em]">
      <div className="relative h-[12vh] sm:h-[65vh] md:h-[22vh] lg:h-[73vh] w-full">
        {
          carouselImages?.length === 0 ? <div className="h-full flex items-center justify-center"> <PreLoader /></div> :
            <Slider {...settings} className="h-full">
              {carouselImages.map((src, index) => (
                <div key={src._id} className="relative h-[18vh] sm:h-[65vh] md:h-[37vh] lg:h-[87vh] w-full overflow-hidden">
                  <Image
                    src={src.image}
                    alt={`Slide of ${src.title}`}
                    fill
                    priority={index === 0}
                    className="zoom-slide"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container">
                      <p className="text-white tracking-widest font-semibold text-sm mb-4">
                        SINCE 2017 — LUCKNOW, INDIA
                      </p>
                      <h1 className="text-3xl sm:text-5xl capitalize zoom-slide lg:text-6xl font-extrabold leading-tight">
                        {src.title.split("@")[0]}{" "}
                        <span className="text-primary">{src.title.split("@")[1]}</span><br />
                        <span className="text-primary">{src.title.split("@")[2]}</span> {src.title.split("@")[3]}
                      </h1>
                      <p className="mt-6 max-w-[57%] zoom-slide text-base sm:text-19 opacity-80">
                        {src.subtitle}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <button className="bg-primary hover:bg-secondary cursor-pointer px-6 py-3 rounded-md font-medium flex items-center gap-2 transition" onClick={() => router.push("/contact-us")}>
                          <span> Talk to Our Team </span>
                          <MdOutlineArrowRightAlt size={25} />
                        </button>
                        <button className="border border-white/40 cursor-pointer hover:bg-white/10 px-6 py-3 rounded-md font-medium flex items-center gap-2 transition" onClick={() => router.push("/contact-us")}>
                          <span> See What We Do</span>
                          <MdOutlineArrowRightAlt size={25} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
        }
      </div>
    </section>
  );
};