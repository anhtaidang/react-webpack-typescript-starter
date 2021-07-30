/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { AuthProp, defaultValue, UserProp } from "./Context";

const useGlobalState = () => {
  const [users, setUsers] = useState<UserProp[]>(defaultValue.users);
  const [auth, setAuth] = useState<AuthProp>(defaultValue.auth);
  return { users, auth };
};

export default useGlobalState;
