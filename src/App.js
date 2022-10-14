/*
 * Author: yuanzhirong
 * Date: 2022-09-07 16:40:42
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-30 11:30:29
 * Description:
 */
import logo from "./logo.svg";
import pathToRegexp from "path-to-regexp";
// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useParams,
//   useNavigate,
//   Navigate,
//   useOutlet,
//   useLocation,
// } from "react-router-dom";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  Navigate,
  useOutlet,
  useLocation,
} from "./react-router";
import "./App.css";

const a = {};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="user" element={<User />}>
            <Route path=":username" element={<UserInfo />} />
          </Route>
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

function Layout() {
  const location = useLocation();
  const curOutlet = useOutlet();
  if (!a[location.pathname]) {
    a[location.pathname] = curOutlet;
  }

  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/home">home</Link> | <Link to="/user">user</Link> |{" "}
        <Link to="/setting">setting</Link>
      </nav>

      <div className="content">
        <Outlet />
        {/* {Object.keys(a).map((key) => {
          return (
            <div
              style={{ display: location.pathname === key ? "block" : "none" }}
            >
              {a[key]}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>home</h1>
      <input />
    </div>
  );
}

function User() {
  return (
    <div>
      <h1>User Info Page</h1>
      <input />
      <Link to="/user/yuanzr">查看用户信息</Link>
      <Outlet />
    </div>
  );
}

function UserInfo() {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>Hi! {username}</h1>
      <button onClick={() => navigate("/")}>返回首页</button>
    </div>
  );
}

function Test() {
  return <span>test</span>;
}

function Setting() {
  return <Navigate replace to="/login" />;
}

function Login() {
  return <span>Login</span>;
}

export default App;
