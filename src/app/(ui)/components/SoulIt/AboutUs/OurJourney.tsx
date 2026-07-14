import { journeyIcons } from '@/app/api/data'
import { journeyProps } from '@/types/journeyContext';
import { PreLoader } from '../../Common/PreLoader';

export const OurJourney: React.FC<journeyProps> = ({ journeyData }) => {

    return (
        <section className="bg-gray-50">
            <div className="container">
                <div className="md:pb-12 text-center pb-8" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Our Journey —</h3>
                    <h2 className="pb-4 md:text-40 text-28 font-bold uppercase text-MidnightNavyText">
                        Eight Years of{" "}<span className="text-secondary">Relentless Execution</span>
                    </h2>
                    <p className="text-SlateBlueText font-normal sm:text-19  text-center m-auto">
                        Evolving from a partnership firm into a CMMI Level 3 organization <br />
                        delivering high-value government projects across India.
                    </p>
                </div>
                {
                    journeyData?.length === 0 ? <PreLoader /> :
                        <div className="container grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {journeyData?.map((item, index) => (
                                <div
                                    key={item._id}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                    className="group relative border border-secondary rounded-2xl p-6 pl-24 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-MidnightNavyText"
                                >
                                    <div className="absolute -top-4 left-6 px-4 py-1 text-white bg-primary rounded-md text-15 font-semibold transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
                                        {item.journey_year}
                                    </div>
                                    <div className="absolute left-4 top-20 text-3xl text-primary w-16 h-16 flex items-center justify-center rounded-full border border-secondary shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-MidnightNavyText">
                                        {journeyIcons[index % journeyIcons.length]}
                                    </div>
                                    <div className="transition-all duration-300 group-hover:translate-x-1">
                                        <h3 className="font-semibold text-20 text-MidnightNavyText transition-colors duration-300 group-hover:text-primary">
                                            {item.title}
                                        </h3>
                                        <p className="text-15 text-SlateBlueText h-32 mt-1 leading-relaxed text-justify">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </section>
    )
}
