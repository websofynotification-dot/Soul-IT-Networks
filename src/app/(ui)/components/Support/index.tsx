import { getData } from "@/lib/getData";
import WhoWeAre from "@/models/admin-model/SoulIt/AboutUs/WhoWeAre";
import { SupportAboutUs } from "./SupportAboutUs";
import { SupportServices } from "./SupportService";
import SupportService from "@/models/admin-model/support/SupportService";
import SupportAddOn from "@/models/admin-model/support/SupportAddOn";
import { SupportAddOns } from "./SupportAddOns";
import { SupportCta } from "./SupportCta";

export const SupportPage = async () => {
  const supportServiceData = await getData(SupportService);
  const supportAddOnData = await getData(SupportAddOn);
  const whoWeAreData = await getData(WhoWeAre);

  return (
    <div className="mt-10">
      <div className="text-center container" data-aos="fade-up">
        <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
          Support That <span className="text-secondary">Stays With You</span>
        </h1>
        <p className="mt-5 sm:text-19 text-SlateBlueText sm:text-center text-justify m-auto">
          From deployment to long-term operations, we ensure every device,
          application, and solution performs reliably.
        </p>
      </div>
      <SupportAboutUs cardData={whoWeAreData} />
      <SupportServices supportServiceData={supportServiceData} />
      <SupportAddOns supportServiceData={supportAddOnData} />
      <SupportCta
        title="Get Support That Works"
        description="From AMC to on-site and remote support, we ensure your deployment runs smoothly."
        buttonText="Request Support"
        nevigateUrl="contact-us"
        techSupportTitle="Technical Support"
        techSupportDescription="Need assistance with your IT infrastructure? Contact our technical support team for prompt and reliable help."
        techSupportButtonText="Email Support"
        techSupportNavigateUrl="mailto:techsupport@soulitnetworks.com"
      />
    </div>
  );
};

