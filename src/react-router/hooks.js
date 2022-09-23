/*
 * Author: yuanzhirong
 * Date: 2022-09-12 10:24:38
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-23 15:35:27
 * Description:
 */
import React, { useCallback } from "react";
import { matchRoutes } from "react-router-dom";
import NavigationContext from "./context/NavigationContext";
import RouteContext from "./context/RouteContext";
import Outlet from "./Outlet";
import { normalizePathname } from "./utils";

export function useRoutes(routes) {
  // const location = window.location;
  const location = useLocation();

  const pathname = location.pathname;
  console.log(routes, pathname);

  const matches = matchRoutes(routes, { pathname });
  console.log(matches);
  return renderMatches(matches);

  // return routes.map((route) => {
  //   // const match = pathname === route.path || pathname === "/" + route.path;
  //   const match = pathname.startsWith(route.path);

  //   // return match ? route.element : null;
  //   return (
  //     match &&
  //     route.children.map((child) => {
  //       let m = normalizePathname(child.path) === pathname;

  //       return (
  //         m && (
  //           <RouteContext.Provider value={{ outlet: child.element }}>
  //             {route.element !== undefined ? route.element : <Outlet />}
  //           </RouteContext.Provider>
  //         )
  //       );
  //     })
  //   );
  // });
}

function renderMatches(matches) {
  if (matches == null) {
    return null;
  }

  return matches.reduceRight((outlet, match) => {
    return (
      <RouteContext.Provider
        value={{ outlet, matches }}
        children={match.route.element || outlet}
      />
    );
  }, null);
}

export function useNavigate() {
  const { navigator } = React.useContext(NavigationContext);

  const navigate = useCallback(
    (to, options = {}) => {
      if (typeof to === "number") {
        navigator.go(to);
        return;
      }
      (!!options.replace ? navigator.replace : navigator.push)(
        to,
        options.state
      );
    },
    [navigator]
  );

  return navigate;
}

export function useLocation() {
  const { location } = React.useContext(NavigationContext);
  return location;
}

export function useOutlet() {
  const { outlet } = React.useContext(RouteContext);
  return outlet;
}

export function useParams() {
  const { matches } = React.useContext(RouteContext);

  const routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
