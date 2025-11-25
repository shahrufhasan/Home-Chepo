import { AuthContext } from "@/provider/AuthContext";
import React, { useContext } from "react";

export default function useAuth() {
  const authInfo = useContext(AuthContext);
  return authInfo;
}
