/*
 * Author: yuanzhirong
 * Date: 2022-09-23 14:32:24
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-23 14:33:42
 * Description:
 */
import { createHashHistory } from "history";
import { useLayoutEffect, useRef, useState } from "react";
import Router from "./Router";

export default function BrowserRouter({ children }) {
  let historyRef = useRef(null);

  if (!historyRef.current) {
    historyRef.current = createHashHistory();
  }

  const history = historyRef.current;

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Router
      navigator={history}
      location={state.location}
      navigationType={state.action}
    >
      {children}
    </Router>
  );
}
