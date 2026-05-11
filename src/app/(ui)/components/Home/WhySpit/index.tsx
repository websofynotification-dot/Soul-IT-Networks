import { WhySpitSection } from './WhySpitSection'
import { getData } from '@/lib/getData'
import WhySpit from '@/models/admin-model/HomePage/WhySpit'

export const WhySpits = async () => {
  const cardData = await getData(WhySpit);
  
  return <WhySpitSection cardData={cardData} />
}
