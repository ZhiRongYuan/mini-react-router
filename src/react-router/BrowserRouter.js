/*
 * Author: yuanzhirong
 * Date: 2022-09-12 10:23:30
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-15 16:20:15
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
  console.log(history);

  const [state, setState] = useState({
    location: history.location,
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Router navigator={history} location={state.location}>
      {children}
    </Router>
  );
}
