import { getData } from '@/lib/getData';
import { OurServices } from './OurServices';
import Service from '@/models/admin-model/HomePage/Service';
export const dynamic = 'force-dynamic';

export const Services: React.FC = async () => {
    const data = await getData(Service);
    return <OurServices cardData={data} />
}
