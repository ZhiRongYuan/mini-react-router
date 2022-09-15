/*
 * Author: yuanzhirong
 * Date: 2022-09-12 12:43:18
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-15 15:52:10
 * Description:
 */
import { useMemo } from "react";
import NavigationContext from "./context/NavigationContext";

export default function Router({ navigator, location, children }) {
  let navigatorContext = useMemo(
    () => ({
      navigator,
      location,
    }),
    [navigator, location]
  );

  return (
    <NavigationContext.Provider value={navigatorContext}>
      {children}
    </NavigationContext.Provider>
  );
}
