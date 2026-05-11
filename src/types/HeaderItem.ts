export interface SubmenuItem { label: string, href: string }

export interface HeaderItem {
  _id: string;
  primaryMenu: string;
  href: string;
  subMenu: boolean;
  secondaryMenu: SubmenuItem[];
}

export interface MenuProps {
  headerData: HeaderItem[];
};





