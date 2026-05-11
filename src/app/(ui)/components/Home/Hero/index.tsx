import { getData } from '@/lib/getData';
import HeroImage from '@/models/admin-model/HomePage/HeroImage';
import { HeroSliderImage } from './HeroSliderImage';
export const dynamic = 'force-dynamic';


export const Hero = async () => {
    const data = await getData(HeroImage);
    return <HeroSliderImage carouselImages={data}/>
}
