/*
 * Author: yuanzhirong
 * Date: 2022-09-12 10:23:49
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-15 15:51:36
 * Description:
 */
import React from "react";

export default function createRoutesFromChildren(children) {
  const routes = [];

  React.Children.forEach(children, (child) => {
    const route = {
      element: child.props.element,
      path: child.props.path,
    };

    if (child.props.children) {
      route.children = createRoutesFromChildren(child.props.children);
    }

    routes.push(route);
  });

  return routes;
}
