import { getData } from '@/lib/getData'
import Footer from '@/models/admin-model/Footer'
import { FooterInfo } from './FooterInfo';
import Topbar from '@/models/admin-model/Topbar';
export const dynamic = 'force-dynamic';

export const Footers: React.FC = async () => {
    const footerData = await getData(Footer);
    const topbarData = await getData(Topbar);

    return <FooterInfo footerData={footerData} topbarData={topbarData}/>
}
