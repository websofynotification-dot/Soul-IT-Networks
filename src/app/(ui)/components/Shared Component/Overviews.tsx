import Image from 'next/image'
import { FaRegHandPointRight } from 'react-icons/fa';
import { serviceProps } from '@/types/serviceContext';
import { PreLoader } from '../Common/PreLoader';

export const Overviews: React.FC<serviceProps> = ({ serviceData }) => {
    const { title, description, image, keySteps } = serviceData[0];

    return (
        <section className="pt-12">
            {
                serviceData?.length == 0 ? <PreLoader /> :
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
                                <p className="text-SlateBlueText mt-4 text-17 leading-relaxed text-justify">
                                    {description}
                                </p>
                                <h3 className='mt-4 font-semibold text-lg text-MidnightNavyText'>Key Capabilities</h3>
                                <div className="mt-4">
                                    {keySteps?.map((item, index) =>
                                        <div key={index} className="flex gap-4 mb-1 items-center">
                                            <FaRegHandPointRight size={18} className="text-primary" />
                                            <p className="text-16 text-SlateBlueText text-justify">
                                                {item}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    )
}
