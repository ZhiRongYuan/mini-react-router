/*
 * Author: yuanzhirong
 * Date: 2022-09-07 16:40:42
 * LastEditors: yuanzhirong
 * LastEditTime: 2022-09-23 10:27:20
 * Description:
 */
import logo from "./logo.svg";
// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useParams,
//   useNavigate,
//   Navigate,
// } from "react-router-dom";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
  useNavigate,
  Navigate,
} from "./react-router";
// import {
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
//   Navigate,
// } from "./router";
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
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the app!</h1>
      <nav>
        <Link to="/home">home</Link> | <Link to="/user">user</Link> |{" "}
        <Link to="/setting">setting</Link>
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
      <Routes>
        <Route path="test" element={<p>Welcome, new user</p>} />
      </Routes>
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
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <div>
      <h1>Hi! {username}</h1>
      <button onClick={() => navigate("/")}>返回首页</button>
    </div>
  );
}

function Setting() {
  return <Navigate replace to="/login" />;
}

function Login() {
  return <span>Login</span>;
}

export default App;
