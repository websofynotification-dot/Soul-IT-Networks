import { getData } from '@/lib/getData';
import { BrochureCard } from './BrochureCard';
import Brochure from '@/models/admin-model/Services/Delivery';

export const Brochures = async () => {
    const brochureData = await getData(Brochure);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-primary">
                    RML{" "}<span className="text-MidnightNavyText">Brochure</span>
                </h1>
                <p className="mt-5 sm:text-19 text-MidnightNavyText sm:text-center text-justify m-auto">
                    Bringing trusted pathology services to your doorstep with care and precision
                </p>
            </div>
            <BrochureCard  data={brochureData}/>
        </div>
    );
}





