export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type PublicViewConfig = {
  mainNav: MainNavItem[];
};

export type SiteConfig = {
  name?: string;
};
