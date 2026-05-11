import { getData } from "@/lib/getData";
import Projects from "@/models/admin-model/HomePage/Projects";
import { Project } from "./Project";
import { ContactCta } from "../Cta For Connect/ContactCta";
import Category from "@/models/admin-model/Category";

export const ProjectPage = async () => {

    const projectsData = await getData(Projects);
    const category = await getData(Category);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Projects That{" "}<span className="text-secondary">Define Our Work</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    From infrastructure to security, these flagship implementations reflect our ability to deliver at scale.
                </p>
            </div>
            <Project projectData={projectsData} categoryData={category} />
            <ContactCta style={true} title="Start Your Next Project with Us" description="Whether it’s infrastructure, security, or a new challenge, we bring the expertise to deliver with confidence." buttonText="Let's Discuss It" nevigateUrl="contact-us" />
        </div>
    );
};







