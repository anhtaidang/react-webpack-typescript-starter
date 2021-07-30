import React from "react";
import { TagOutlined } from "@ant-design/icons";
import { EnumRouterMapType } from "./enum";
import enumUrlClients from "./enumUrlClients";

const routerMaps = [
  {
    title: "System Management",
    type: EnumRouterMapType.GROUP.id,
    root: "systemmanagement",
    subLinks: [
      {
        title: "Dash Board",
        root: "systemmanagement",
        // eslint-disable-next-line react/jsx-filename-extension
        icon: <TagOutlined />,
        type: EnumRouterMapType.LINK.id,
        url: enumUrlClients.ADMIN_DASHBOARD_PAGE,
      },
    ],
  },
];
export default routerMaps;
