import React from "react";
import ActiveLink from "../../../UiElements/NavLink/NavLink";
import Menu, { MenuItem, MenuLink } from "./MainMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Workflow Optimizer",
    path: "/apps",
  },
  {
    id: 3,
    label: "Workshop Floor",
    path: "/workshop",
  },
  // {
  //   id: 4,
  //   label: 'Integrations',
  //   path: '/integrations',
  // },
  {
    id: 4,
    label: "Worker Performance",
    path: "/workerperformance",
  },
  {
    id: 5,
    label: "Charts",
    path: "/charts",
  },
  {
    id: 6,
    label: "Forms",
    path: "/forms",
  },
  {
    id: 7,
    label: "UI Elements",
    path: "/uielements",
  },
  {
    id: 8,
    label: "Pricing",
    path: "/pricing",
  },
  {
    id: 9,
    label: "Profile",
    path: "/profile",
  },
  {
    id: 10,
    label: "Settings",
    path: "/settings",
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const MainMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map((item) => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
