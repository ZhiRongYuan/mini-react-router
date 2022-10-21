/*
 * Author: yuanzhirong
 * Date: 2022-09-12 12:37:05
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-10-21 17:19:11
 * Description:
 */

import { useNavigate } from "./hooks";

export default function Link({ to, children }) {
  const navigator = useNavigate();
  const handle = (e) => {
    e.preventDefault();
    navigator(to);
  };
  return (
    <a href={to} onClick={handle}>
      {children}
    </a>
  );
}
