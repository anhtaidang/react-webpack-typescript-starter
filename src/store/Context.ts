import React from "react";
import Permissions from "~/constants/enumPermission";

export interface UserProp {
  username: string;
  password: string;
  fullname: string;
  permission: string;
}

export interface AuthProp {
  username: string;
  fullname: string;
  isAuthenticated: false;
}

export interface ContextProps {
  users: UserProp[];
  auth: AuthProp;
}

export const defaultValue = {
  auth: {
    username: "anhtaidang",
    fullname: "Đặng Anh Tài",
    isAuthenticated: false,
  },
  users: [
    {
      username: "admin",
      password: "123456",
      permission: Permissions.ADMIN,
      fullname: "Administration user",
    },
    {
      username: "ordinary",
      password: "123456",
      permission: Permissions.ORDINARY,
      fullname: "ordinary User",
    },
  ],
} as ContextProps;

export const ContextStore = React.createContext<ContextProps | null>(null);
