export interface SidebarContextType {
  isExpanded: boolean;
  isMobileOpen: boolean;
  isHovered: boolean;
  activeItem: string | null;
  openSubmenu: string | null;
  toggleSidebar: () => void;
  toggleMobileSidebar: () => void;
  setIsHovered: (isHovered: boolean) => void;
  setActiveItem: (item: string | null) => void;
  toggleSubmenu: (item: string) => void;
  blogs : any[];
};


export interface TertiaryItem {
  name: string;
  path: string;
};

export interface SecondaryItem {
  name: string;
  path?: string;
  tertiaryItems?: TertiaryItem[];
};

export interface NavItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: SecondaryItem[];
};



