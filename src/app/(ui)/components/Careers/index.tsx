import { getData } from "@/lib/getData";
import { CareersAboutUs } from "./CareersAboutUs";
import WhoWeAre from "@/models/admin-model/SoulIt/AboutUs/WhoWeAre";
import FeatureJob from "@/models/admin-model/Careers/FeatureJob";
import { JobOpenings } from "./JobOpenings";
import JobOpening from "@/models/admin-model/Careers/JobOpening";
import Category from "@/models/admin-model/Category";

export const CareersPage = async () => {
    const jobData = await getData(JobOpening);
    const whoWeAreData = await getData(WhoWeAre);
    const featureJobData = await getData(FeatureJob);
    const category = await getData(Category);

    const carrerAboutUsData = {
        whoWeAre: whoWeAreData,
        featureJob: featureJobData
    }

    return (
        <div className="mt-10">

            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Build the{" "}<span className="text-secondary">Future with Us</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    Join a team building reliable, scalable IT infrastructure for critical sectors across the country.
                </p>
            </div>
            <CareersAboutUs cardData={carrerAboutUsData} />
            <JobOpenings jobData={jobData} categoryData={category}/>
        </div>
    );
}
