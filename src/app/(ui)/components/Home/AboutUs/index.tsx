import { getData } from '@/lib/getData';
import RmlWelcome from '@/models/admin-model/HomePage/Certificate';
import { HomeAboutUs } from './HomeAboutUs';
export const dynamic = 'force-dynamic';

export const AboutUs = async () => {
    const data = await getData(RmlWelcome);
    return <HomeAboutUs aboutUsData={data}/>
}