/*
 * Author: yuanzhirong
 * Date: 2022-09-12 12:18:30
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-15 15:52:22
 * Description:
 */

import RouteContext from "./context/RouteContext";

// 如 ///product/detail/// -> /product/detail
export const normalizePathname = (pathname) => {
  return pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
};
