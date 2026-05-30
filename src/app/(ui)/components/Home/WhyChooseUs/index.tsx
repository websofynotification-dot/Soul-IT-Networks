import { getData } from "@/lib/getData";
import { WhyChooseUsUser } from "./WhyChooseUs";
import WhyChooseUs from "@/models/admin-model/HomePage/WhyChooseUs";
export const dynamic = 'force-dynamic';

export const WhyChooseUsSection: React.FC = async () => {
    const data = await getData(WhyChooseUs);
    return <WhyChooseUsUser cardData={data} />
}