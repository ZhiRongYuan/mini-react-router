/*
 * Author: yuanzhirong
 * Date: 2022-09-22 01:28:14
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-23 15:36:09
 * Description:
 */
import { useEffect } from "react";
import { useNavigate } from "./hooks";

export default function Navigate({ to, state, replace }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { state, replace });
  }, []);

  return null;
}
