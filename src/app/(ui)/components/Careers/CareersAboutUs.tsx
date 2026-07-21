import { card } from '@/types/cardContext'
import Image from 'next/image'
import { PreLoader } from '../Common/PreLoader';
import { featureJobIcons } from '@/app/api/data';

export const CareersAboutUs: React.FC<{ cardData: { whoWeAre: card[], featureJob: card[] } }> = ({ cardData }) => {
    const { whoWeAre, featureJob } = cardData;
    const { title, description, image } = whoWeAre[2];

    return (
        <section className="pt-12">
            {
                whoWeAre?.length === 0 || featureJob?.length == 0 ? <PreLoader /> :
                    <div className="container">
                        <div className="grid mb-10 md:grid-cols-2 sm:gap-12 gap-5 items-center">
                            <div data-aos="fade-right">
                                <Image
                                    src={image!}
                                    alt="About Us image of RML Mehrotra Pathology"
                                    width={200}
                                    height={300}
                                    className="w-full h-full sm:h-[380px] rounded-2xl shadow-md"
                                />
                            </div>
                            <div data-aos="fade-left">
                                <h2 className="md:text-4xl text-2xl font-bold text-MidnightNavyText mb-4">
                                    {title?.split("@")[0]}{" "}<span className="text-secondary">{title?.split("@")[1]}</span>
                                </h2>
                                <p className="text-SlateBlueText text-17 leading-relaxed text-justify">
                                    {description?.split("@")[0]}
                                    <span className='font-semibold text-primary'>{description?.split("@")[1]}</span>
                                    {description?.split("@")[2]}
                                    <span className='font-semibold text-primary'>{description?.split("@")[3]}</span>
                                    {description?.split("@")[4]}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 sm:gap-6">
                                {featureJob?.map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 120}
                                        className="relative group flex justify-center"
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary translate-x-1 translate-y-1 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:shadow-xl" />

                                        <div className="relative bg-white  border border-secondary rounded-2xl shadow-md p-6 w-full text-center z-10 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl">

                                            <div className="absolute text-2xl -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">

                                                {featureJobIcons[index % featureJobIcons.length]}
                                            </div>
                                            <div className="mt-6">
                                                <h3 className="font-semibold text-20 mb-2 text-MidnightNavyText transition-all duration-300 group-hover:text-primary">
                                                    {item.title}
                                                </h3>

                                                <p className="text-15 text-SlateBlueText mt-4 text-justify leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            }
        </section>
    )
}
