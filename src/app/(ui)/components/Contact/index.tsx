import { ContactForm } from "./ContactForm";
import { GoogleMap } from "./GoogleMap";
import { SocialMedialCta } from "./SocialMedialCta";

export const Contact = () => {
    return (
        <div className="mt-10">
            <div className="text-center container"
                data-aos="fade-up">
                <h1 className="text-3xl md:text-[40px] font-bold leading-tight uppercase text-MidnightNavyText">
                    Ready to{" "}<span className="text-primary">Upgrade Your IT</span>
                </h1>
                <p className="mt-5 sm:text-19 text-MidnightNavyText sm:text-center text-justify m-auto">
                    Let’s discuss your infrastructure needs and build a solution that works for you
                </p>
            </div>
            <ContactForm />
            <SocialMedialCta />
        </div>
    )
}
