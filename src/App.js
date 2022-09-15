/*
 * Author: yuanzhirong
 * Date: 2022-09-07 16:40:42
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-15 16:49:32
 * Description:
 */
import logo from "./logo.svg";
// import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { Routes, Route, Link, Outlet, useParams } from "./react-router";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />}>
            <Route path=":username" element={<UserInfo />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="home">home</Link> | <Link to="user">user</Link>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>home</h1>
    </div>
  );
}

function User() {
  return (
    <div>
      <h1>User Info Page</h1>
      <Link to="/user/yuanzr">查看用户信息</Link>
      <Outlet />
    </div>
  );
}

function UserInfo() {
  let { username } = useParams();
  return <h1>Hi! {username}</h1>;
}

export default App;
