/*
 * Author: yuanzhirong
 * Date: 2022-09-12 12:23:58
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-15 15:52:15
 * Description:
 */
import createRoutesFromChildren from "./createRoutesFromChildren";
import { useRoutes } from "./hooks";

export default function Routes({ children }) {
  const routes = createRoutesFromChildren(children);

  return useRoutes(routes);
}
