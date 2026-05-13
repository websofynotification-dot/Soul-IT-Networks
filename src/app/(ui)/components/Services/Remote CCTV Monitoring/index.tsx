import { getData } from "@/lib/getData";
import Approach from "@/models/admin-model/Services/Approach";
import Delivery from "@/models/admin-model/Services/Delivery";
import Overview from "@/models/admin-model/Services/Overview";
import WhyChooseSoulIt from "@/models/admin-model/Services/WhyChooseSoulIt";
import { Overviews } from "../../Shared Component/Overviews";
import { WhyChoosSoulIt } from "../../Shared Component/WhyChoosSoulIt";
import { Approaches } from "../../Shared Component/Approaches";
import { Deliveries } from "../../Shared Component/Deliveries";
import { ContactCta } from "../../Cta For Connect/ContactCta";


export const RemoteCcTvMonitoringPage = async () => {

    const filter = "Remote CCTV Monitoring";

    const [
        overviewData,
        whyChooseData,
        approachData,
        deliveryData,
    ] = await Promise.all([
        getData(Overview, filter),
        getData(WhyChooseSoulIt, filter),
        getData(Approach, filter),
        getData(Delivery, filter),
    ]);

    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    24/7 Remote{" "}<span className="text-secondary">Surveillance Services</span>
                </h1>
                <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
                    24x7 CCTV monitoring with live verification, instant escalation, and proactive response for maximum security coverage.
                </p>
            </div>

            <Overviews serviceData={overviewData} />
            <WhyChoosSoulIt
                serviceData={whyChooseData}
                title="Why Choose Soul IT Networks"
                subtitle="Advanced Remote @ Surveillance Operations"
                description="Our trained monitoring teams verify every alert, reduce false positives, and ensure rapid response @ for mission-critical facilities and commercial operations."
            />

            <Approaches
                serviceData={approachData}
                title="Our Approach"
                subtitle="Surveillance Monitoring @ Done Right"
                description="We combine trained operators, smart monitoring tools, and strict escalation protocols to deliver continuous @ and dependable security monitoring."
            />

            <Deliveries
                serviceData={deliveryData}
                title="We Deliver"
                subtitle="Surveillance Monitoring That Protects 24x7"
                description="From live video monitoring to incident escalation, we provide proactive security services designed to reduce risks and improve response times."
            />

            <ContactCta title="Real-Time Monitoring That Takes Action" description="Smart alerts alone aren’t enough. Our remote monitoring team verifies threats instantly and responds before incidents escalate." buttonText="Request a Consultation" nevigateUrl="contact-us" />
        </div>
    );
};







