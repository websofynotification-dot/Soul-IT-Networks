import { ctaProps, techCtaProps } from "@/types/ctaContext";
import { Cta } from "../Common/Cta";

export const SupportCta: React.FC<ctaProps & techCtaProps> = ({
  title,
  description,
  buttonText,
  nevigateUrl,
  techSupportTitle,
  techSupportDescription,
  techSupportButtonText,
  techSupportNavigateUrl,
}) => {
  return (
    <section className="bg-gray-50">
      <div className="container flex-col flex sm:flex-row gap-6">
        <Cta
          title={title}
          description={description}
          buttonText={buttonText}
          nevigateUrl={nevigateUrl}
        />
        <Cta
          title={techSupportTitle}
          description={techSupportDescription}
          buttonText={techSupportButtonText}
          nevigateUrl={techSupportNavigateUrl}
        />
      </div>
    </section>
  );
};
