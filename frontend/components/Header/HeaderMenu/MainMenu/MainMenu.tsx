import React from "react";
import ActiveLink from "../../../UiElements/NavLink/NavLink";
import Menu, { MenuItem, MenuLink } from "./MainMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    path: "/",
  },
  {
    id: 2,
    label: "Workshop Floor",
    path: "/workshop",
  },
  {
    id: 3,
    label: "Worker Performance Metrics",
    path: "/workerperformance",
  },
  // {
  //   id: 4,
  //   label: 'Integrations',
  //   path: '/integrations',
  // },
  {
    id: 4,
    label: "Workflow Optimizer",
    path: "/workflowoptimizer",
  },
  {
    id: 5,
    label: "Demand Forecasting",
    path: "/demandforecasting",
  },
  // {
  //   id: 6,
  //   label: "Charts",
  //   path: "/charts",
  // },
  // {
  //   id: 7,
  //   label: "UI Elements",
  //   path: "/uielements",
  // },
  // {
  //   id: 8,

  // },
  // {
  //   id: 9,
  //   label: "Profile",
  //   path: "/profile",
  // },
  // {
  //   id: 10,
  //   label: "Settings",
  //   path: "/settings",
  // },
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
