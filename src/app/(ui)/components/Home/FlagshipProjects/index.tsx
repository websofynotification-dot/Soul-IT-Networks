import { FlagshipProjectCards } from './FlagshipProjectCards'
import { getData } from '@/lib/getData'
import Projects from '@/models/admin-model/HomePage/Projects'

export const FlagshipProjects: React.FC = async () => {
    const data = await getData(Projects)
    return <FlagshipProjectCards projectData={data} />
}
