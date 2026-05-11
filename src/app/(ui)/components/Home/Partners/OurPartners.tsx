import { cardProps } from '@/types/cardContext'
import { PreLoader } from '../../Common/PreLoader'

export const OurPartners: React.FC<cardProps> = ({ cardData }) => {

    const filterProject = cardData?.filter(item=>item.partner_type === "Technology Partners");

    return (
        <section className="relative overflow-hidden bg-primary">
            <div className="container">
                <div className="md:pb-1 text-center pb-1" data-aos="fade-up">
                    <h3 className="text-primary uppercase">— Strategic Partners —</h3>
                    <h2 className="md:text-40 text-28 font-bold uppercase text-white">
                        Endorsed by Leading Industry Partners
                    </h2>
                </div>
                <div
                    className="flex gap-10 justify-center overflow-x-auto py-4"
                    data-aos="fade-up"
                >
                    {
                        filterProject?.length === 0 ? <PreLoader flag={true} /> :
                            <>
                                {filterProject?.slice(0, 12).map((part, index) => (
                                    <span
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 100}
                                        data-aos-once="true"
                                        className="text-white uppercase whitespace-nowrap transition cursor-pointer hover:text-white/50 hover:scale-105"
                                    >
                                        {part.title}
                                    </span>
                                ))}
                            </>
                    }
                </div>
            </div>
        </section>
    )
}

