/*
 * Author: yuanzhirong
 * Date: 2022-09-12 10:23:30
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-10-21 17:43:15
 * Description:
 */
import { createBrowserHistory } from "history";
import { useLayoutEffect, useRef, useState } from "react";
import Router from "./Router";

export default function BrowserRouter({ children }) {
  let historyRef = useRef(null);

  if (!historyRef.current) {
    historyRef.current = createBrowserHistory();
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
