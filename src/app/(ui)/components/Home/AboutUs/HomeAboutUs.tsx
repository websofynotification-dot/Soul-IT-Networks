"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HomeAboutUs = ({ aboutUsData }: { aboutUsData: { image: string, _id: string, buttonName: string, buttonUrl: string, sectionSubTitle: string, sectionTitle: string, description: string }[] }) => {
    const router = useRouter()
    const { image, buttonName, buttonUrl, sectionSubTitle, sectionTitle, description } = aboutUsData[0];
    
    return (
        <section className="bg-primary/5">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-4 mx-auto">
                    <div
                        className="col-span-6"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <h2 className="text-primary uppercase md:text-40 text-28 font-bold">{sectionTitle.split("@")[0]}{" "}
                            <span className="text-MidnightNavyText">{sectionTitle.split("@")[1]}</span>
                        </h2>
                        <p className="text-16  text-SlateBlueText text-justify max-w-5xl pt-7 pb-4 pr-4">
                            {description.split(`{"/n"}`)[0]}
                        </p>
                        <p className="text-16  text-SlateBlueText text-justify max-w-5xl pb-4  pr-4">
                            {description.split(`{"/n"}`)[1]}
                        </p>
                        <button
                            onClick={() => router.push(`${buttonUrl}`)}
                            className="inline-block mt-8 px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-transparent hover:border hover:border-secondary/50 hover:text-primary  transition"
                        >
                            {buttonName}
                        </button>
                    </div>
                    <div className="col-span-6  hidden sm:block"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className="relative">
                            <Image
                                src={`${image}`}
                                alt="Product"
                                width={800}
                                height={600}
                                quality={100}
                                sizes="100vw"
                                className="rounded-22  hover:scale-105 transition duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
