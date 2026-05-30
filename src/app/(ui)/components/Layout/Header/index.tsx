import { Menu } from './Menu'
import { getData } from '@/lib/getData'
import Menubar from '@/models/admin-model/Menubar'

export const Header: React.FC = async () => {
  const menuData = await getData(Menubar);
  return <Menu headerData={menuData} />
}
