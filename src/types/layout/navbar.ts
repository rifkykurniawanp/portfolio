export type NavItem = {
  label: string;
  href: string;
};

export type NavbarProps = {
  name: string;
  items: NavItem[];
};