import { OurPartners } from './OurPartners'
import { getData } from '@/lib/getData'
import Partner from '@/models/admin-model/HomePage/Partner'

export const Partners: React.FC = async () => {
    const data = await getData(Partner)
    return <OurPartners cardData={data} />
}
