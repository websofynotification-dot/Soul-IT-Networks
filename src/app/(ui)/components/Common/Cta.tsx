"use client";
import { ctaProps } from "@/types/ctaContext";
import { useRouter } from "next/navigation";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export const Cta: React.FC<ctaProps> = ({
  title,
  description,
  buttonText,
  nevigateUrl,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (nevigateUrl!.startsWith("mailto:")) {
      window.location.href = nevigateUrl!;
    } else {
      router.push(`/${nevigateUrl}`);
    }
  };

  return (
    <div className="bg-white text-primary rounded-3xl p-12 text-center border border-secondary shadow-md shadow-secondary">
      <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
        {title}
      </p>
      <p className="mt-6 text-SlateBlueText font-normal text-19  text-center m-auto">
        {description}
      </p>
      <button
        onClick={handleClick}
        className="mt-10 px-10 py-4 bg-white  font-semibold rounded-md
                     hover:text-white transition duration-300 shadow-lg justify-center 
                     items-center gap-2 text-primary border border-secondary  hover:bg-primary"
      >
        <span className="flex items-center gap-2">
          {buttonText}
          <MdOutlineArrowRightAlt size={25} />{" "}
        </span>
      </button>
    </div>
  );
};
