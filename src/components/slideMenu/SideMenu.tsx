import styled from "@emotion/styled";
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { sideMenuList } from "./mockup";
import { StarTwoTone, FlagTwoTone, FireTwoTone } from "@ant-design/icons";

export const SideMenu = () => {
  type MenuItem = Required<MenuProps>["items"][number];

  const [items, setItems] = useState<MenuItem[]>([]);

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const getSideMenuList = (list) => {
    const arr = list.map((m, index) => {
      return getItem(
        m.title,
        `menu-${index}`,
        <StarTwoTone />,
        m?.subMenu?.map((sm, smindex) => {
          return getItem(
            sm.title,
            `menu-${smindex}-${index}`,
            <FlagTwoTone />,
            sm?.subMenu?.map((ssm, ssmindex) => {
              return getItem(
                ssm,
                `menu-${ssmindex}-${smindex}-${index}`,
                <FireTwoTone />
              );
            })
          );
        })
      );
    });
    setItems(arr);
  };

  useEffect(() => {
    getSideMenuList(sideMenuList);
  }, []);
  return <SideMenuBox mode="vertical" items={items} />;
};

const SideMenuBox = styled(Menu)`
  width: 280px;
`;
